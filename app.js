// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const loginForm = document.getElementById('loginForm');
const userNameInput = document.getElementById('userName');
const appContainer = document.getElementById('appContainer');
const displayName = document.getElementById('displayName');
const subcategoriesPanel = document.getElementById('subcategories');
const subcategoriesList = document.getElementById('subcategoriesList');
const mainContent = document.querySelector('.main-content');
const contentGrid = document.getElementById('contentGrid');
const loadingOverlay = document.getElementById('loadingOverlay');
const modalOverlay = document.getElementById('modalOverlay');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const previewUnlockBtn = document.getElementById('previewUnlockBtn');

let currentSection = 'home';
let currentSubcategory = null;
let favorites = JSON.parse(localStorage.getItem('tvshow_favorites')) || [];

// LOGIN
document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('tvshow_user');
    if (savedName) {
        showApp(savedName);
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = userNameInput.value.trim();
    if (name) {
        localStorage.setItem('tvshow_user', name);
        showApp(name);
    }
});

function showApp(name) {
    loginScreen.style.display = 'none';
    appContainer.style.display = 'flex';
    displayName.textContent = name;
    initNavigation();
    initSearch();
    initMobileMenu();
    initPreviewBanner();
    loadHomeContent();
}

// NAVIGATION
function initNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            handleSectionChange(item.dataset.section);
        });
    });
}

function handleSectionChange(section) {
    currentSection = section;
    currentSubcategory = null;
    if (section === 'home') {
        hideSubcategories();
        loadHomeContent();
    } else if (section === 'favoritos') {
        hideSubcategories();
        loadFavoritesContent();
    } else if (['filmes', 'series', 'canais'].includes(section)) {
        showSubcategories(section);
        const firstSubcat = Object.keys(contentData[section])[0];
        loadCategoryContent(section, firstSubcat);
    }
    // Fechar menu mobile após seleção
    if (window.innerWidth <= 768) {
        closeMobileMenu();
    }
}

// MOBILE MENU
function initMobileMenu() {
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });

        // Fechar menu ao clicar no overlay
        const overlay = document.getElementById('sidebarOverlay');
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
    }
}

function toggleMobileMenu() {
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
        const overlay = document.getElementById('sidebarOverlay');
        if (overlay) {
            overlay.classList.toggle('active');
        }
        document.body.classList.toggle('menu-open');
    }
}

function closeMobileMenu() {
    if (sidebar) {
        sidebar.classList.remove('mobile-open');
        const overlay = document.getElementById('sidebarOverlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
        document.body.classList.remove('menu-open');
    }
}

// PREVIEW BANNER
function initPreviewBanner() {
    if (previewUnlockBtn) {
        previewUnlockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showBlockedModal();
        });
    }
}

// SUBCATEGORIES
function showSubcategories(section) {
    subcategoriesList.innerHTML = '';
    const subcats = subcategoryLabels[section];
    Object.entries(subcats).forEach(([key, label], index) => {
        const item = document.createElement('div');
        item.className = `subcategory-item ${index === 0 ? 'active' : ''}`;
        item.textContent = label;
        item.addEventListener('click', () => {
            subcategoriesList.querySelectorAll('.subcategory-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            loadCategoryContent(section, key);
        });
        subcategoriesList.appendChild(item);
    });
    subcategoriesPanel.classList.add('visible');
    mainContent.classList.add('with-subcategories');
}

function hideSubcategories() {
    subcategoriesPanel.classList.remove('visible');
    mainContent.classList.remove('with-subcategories');
}

// CONTENT LOADING
function loadHomeContent() {
    contentGrid.innerHTML = '';
    const allContent = [];
    const seenIds = new Set();
    
    // Unlocked for HOME preview - pegar mais itens de cada categoria sem duplicações
    Object.values(contentData.filmes).forEach(cat => {
        cat.slice(0, 8).forEach(item => {
            if (!seenIds.has(item.id)) {
                seenIds.add(item.id);
                allContent.push({ ...item, type: 'movie', locked: false });
            }
        });
    });
    
    Object.values(contentData.series).forEach(cat => {
        cat.slice(0, 6).forEach(item => {
            if (!seenIds.has(item.id)) {
                seenIds.add(item.id);
                allContent.push({ ...item, type: 'series', locked: false });
            }
        });
    });
    
    shuffleArray(allContent);
    // Mostrar todos os itens disponíveis (não limitar a 12)
    allContent.forEach(item => contentGrid.appendChild(createContentCard(item)));
}

function loadCategoryContent(section, subcategory) {
    currentSubcategory = subcategory;
    contentGrid.innerHTML = '';

    let items = (contentData[section][subcategory] || []).map(item => ({
        ...item,
        locked: true,
        type: section === 'filmes' ? 'movie' : 'series'
    }));

    if (section === 'canais') {
        const channels = (contentData.canais[subcategory] || []).map(c => ({ ...c, locked: true }));
        channels.forEach(channel => contentGrid.appendChild(createChannelCard(channel)));
    } else {
        items.forEach(item => contentGrid.appendChild(createContentCard(item)));
    }
}

function loadFavoritesContent() {
    contentGrid.innerHTML = '';
    if (favorites.length === 0) {
        contentGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-secondary);">
            <svg style="width:60px;height:60px;margin-bottom:15px;opacity:0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <h3 style="margin-bottom:10px;color:var(--text-primary);">Seus Favoritos</h3>
            <p>Clique no ❤️ para adicionar</p></div>`;
    } else {
        // Garantir que favoritos apareçam bloqueados
        favorites.forEach(item => {
            const lockedItem = { ...item, locked: true };
            contentGrid.appendChild(createContentCard(lockedItem));
        });
    }
}

// CARDS
function createContentCard(item) {
    const card = document.createElement('div');
    const isLocked = item.locked !== undefined ? item.locked : true;
    card.className = 'content-card' + (isLocked ? ' locked-card' : '');
    const ratingClass = item.rating >= 7.5 ? 'high' : item.rating >= 6 ? 'medium' : 'low';
    const isFav = favorites.some(fav => fav.id === item.id);
    const title = item.title || item.name || "Sem Título";
    const image = item.image || `https://placehold.co/342x513/1a1a1a/666?text=${title.replace(/\s/g, '+')}`;

    const favBtnHtml = `
        <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        </button>
    `;

    if (isLocked) {
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="card-image locked-image" loading="lazy" onerror="this.src='https://placehold.co/342x513/1a1a1a/333?text=Erro+Imagem'">
            ${favBtnHtml}
            <div class="locked-overlay">
                <div class="lock-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                </div>
                <span class="locked-text">Bloqueado</span>
            </div>
            <div class="card-rating ${ratingClass}">${item.rating}</div>
            <div class="card-overlay">
                <h3 class="card-title">${title}</h3>
                <span class="card-year">${item.year}</span>
                <button class="card-play-btn unlock-btn" onclick="handlePlayClick(event)">
                    Desbloquear
                </button>
            </div>`;
    } else {
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="card-image" loading="lazy" onerror="this.src='https://placehold.co/342x513/1a1a1a/333?text=Erro+Imagem'">
            ${favBtnHtml}
            <div class="card-rating ${ratingClass}">${item.rating}</div>
            <div class="card-overlay">
                <h3 class="card-title">${title}</h3>
                <span class="card-year">${item.year}</span>
                <button class="card-play-btn" onclick="handlePlayClick(event)">
                    Assistir
                </button>
            </div>`;
    }
    return card;
}

function createChannelCard(channel) {
    const card = document.createElement('div');
    card.className = 'content-card channel-card' + (channel.locked ? ' locked-card' : '');

    if (channel.locked) {
        card.innerHTML = `
            <div class="channel-logo-wrapper locked-image">
                <img src="${channel.logo}" alt="${channel.name}" class="channel-logo" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="channel-fallback-name" style="display:none;">${channel.name}</span>
            </div>
            <div class="locked-overlay">
                <div class="lock-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                </div>
                <span class="locked-text">Bloqueado</span>
            </div>
            <div class="card-overlay">
                <button class="card-play-btn unlock-btn" onclick="handlePlayClick(event)" style="width:100%;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="11" rx="2"/>
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    Liberação Imediata
                </button>
            </div>`;
    } else {
        card.innerHTML = `
            <div class="channel-logo-wrapper">
                <img src="${channel.logo}" alt="${channel.name}" class="channel-logo" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="channel-fallback-name" style="display:none;">${channel.name}</span>
            </div>
            <div class="card-overlay">
                <button class="card-play-btn" onclick="handlePlayClick(event)" style="width:100%;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
                    Ao Vivo
                </button>
            </div>`;
    }
    return card;
}

function toggleFavorite(event, item) {
    event.stopPropagation();
    const index = favorites.findIndex(fav => fav.id === item.id);
    if (index === -1) {
        favorites.push(item);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('tvshow_favorites', JSON.stringify(favorites));

    // Update the UI
    const btn = event.currentTarget;
    const isFav = favorites.some(fav => fav.id === item.id);
    btn.classList.toggle('active', isFav);
    const svg = btn.querySelector('svg');
    svg.setAttribute('fill', isFav ? 'currentColor' : 'none');

    if (currentSection === 'favoritos') {
        loadFavoritesContent();
    }
}
function handlePlayClick(event) {
    event.stopPropagation();
    loadingOverlay.classList.add('visible');
    setTimeout(() => {
        loadingOverlay.classList.remove('visible');
        showBlockedModal();
    }, 2000);
}

function showBlockedModal() {
    document.querySelector('.sidebar').classList.add('blur-bg');
    mainContent.classList.add('blur-bg');
    subcategoriesPanel.classList.add('blur-bg');
    modalOverlay.classList.add('visible');
}

function hideBlockedModal() {
    document.querySelector('.sidebar').classList.remove('blur-bg');
    mainContent.classList.remove('blur-bg');
    subcategoriesPanel.classList.remove('blur-bg');
    modalOverlay.classList.remove('visible');
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) hideBlockedModal();
});

// SEARCH
function initSearch() {
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            if (currentSection === 'home') loadHomeContent();
            else if (currentSubcategory) loadCategoryContent(currentSection, currentSubcategory);
            return;
        }
        const results = [];
        const seenIds = new Set();
        
        Object.values(contentData.filmes).forEach(cat => cat.forEach(item => {
            if (item.title.toLowerCase().includes(query) && !seenIds.has(item.id)) {
                seenIds.add(item.id);
                results.push({ ...item, type: 'movie', locked: true });
            }
        }));
        Object.values(contentData.series).forEach(cat => cat.forEach(item => {
            if (item.title.toLowerCase().includes(query) && !seenIds.has(item.id)) {
                seenIds.add(item.id);
                results.push({ ...item, type: 'series', locked: true });
            }
        }));
        
        contentGrid.innerHTML = '';
        if (results.length === 0) {
            contentGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-secondary);">Nenhum resultado para "${query}"</div>`;
        } else {
            results.forEach(item => contentGrid.appendChild(createContentCard(item)));
        }
    }, 300));
}

// UTILS
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// CTA - Update with your checkout URL
document.getElementById('ctaButton').href = '#checkout';
