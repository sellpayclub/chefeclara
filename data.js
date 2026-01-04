const contentData = {
    filmes: {
        lancamento: [
            { id: 1, title: "Moana 2", year: "2024", rating: 7.5, image: "https://image.tmdb.org/t/p/w342/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg" },
            { id: 2, title: "Gladiador 2", year: "2024", rating: 7.8, image: "https://image.tmdb.org/t/p/w342/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg" },
            { id: 3, title: "Wicked", year: "2024", rating: 8.1, image: "https://image.tmdb.org/t/p/w342/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg" },
            { id: 4, title: "Kraven", year: "2024", rating: 6.2, image: "https://image.tmdb.org/t/p/w342/i47IUSsN126K11JUzqQIOi1Mg1M.jpg" },
            { id: 5, title: "Sonic 3", year: "2024", rating: 7.9, image: "https://image.tmdb.org/t/p/w342/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg" },
        ],
        legendado: [
            { id: 1001, title: "Inception", year: "2010", rating: 8.8, image: "https://image.tmdb.org/t/p/w342/edv3bs1UvYpSrzS3SbsT0Q9v98s.jpg", locked: true },
            { id: 1002, title: "The Dark Knight", year: "2008", rating: 9.0, image: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDp9QmSbmrQvCq0BpJW.jpg", locked: true },
            { id: 1003, title: "Interstellar", year: "2014", rating: 8.7, image: "https://image.tmdb.org/t/p/w342/gEU2QniE6E07Qv8noqkbi3vC1Qz.jpg", locked: true },
        ],
        netflix: [
            { id: 19, title: "Bird Box 2", year: "2024", rating: 6.9, image: "https://image.tmdb.org/t/p/w342/2EYKvYmXVhDPBTsW4YzjvPKSfBB.jpg" },
            { id: 20, title: "Rebel Ridge", year: "2024", rating: 7.5, image: "https://image.tmdb.org/t/p/w342/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg" },
            { id: 1004, title: "Irishman", year: "2019", rating: 7.8, image: "https://image.tmdb.org/t/p/w342/v7vV9V0P6P8uS3S3SbsT0Q9v98s.jpg", locked: true },
        ],
        amazon: [
            { id: 41, title: "Red One", year: "2024", rating: 6.9, image: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg" },
            { id: 42, title: "Saltburn", year: "2023", rating: 7.4, image: "https://image.tmdb.org/t/p/w342/qjhahNLSZ705B5JP92YMEYPocPz.jpg" },
        ],
        disney: [
            { id: 31, title: "Avatar 2", year: "2022", rating: 8.0, image: "https://image.tmdb.org/t/p/w342/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
            { id: 32, title: "Planeta dos Macacos", year: "2024", rating: 7.4, image: "https://image.tmdb.org/t/p/w342/gKkl37BQuKTanygYQG1pyYgLVgf.jpg" },
        ],
        brasil_paralelo: [
            { id: 1101, title: "O Teatro das Sombras", year: "2022", rating: 8.5, image: "https://via.placeholder.com/342x513/1a1a1a/666?text=Brasil+Paralelo", locked: true },
        ],
        max: [
            { id: 49, title: "Wonka", year: "2023", rating: 7.3, image: "https://image.tmdb.org/t/p/w342/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" },
        ],
        acao: [
            { id: 57, title: "John Wick 4", year: "2023", rating: 8.1, image: "https://image.tmdb.org/t/p/w342/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" },
        ],
        comedia: [
            { id: 65, title: "Barbie", year: "2023", rating: 7.4, image: "https://image.tmdb.org/t/p/w342/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
        ],
        terror: [
            { id: 71, title: "Terrifier 3", year: "2024", rating: 7.1, image: "https://image.tmdb.org/t/p/w342/63xYQj1BwRFielxsBDXvHIJyXVm.jpg" },
        ],
    },
    series: {
        lancamento: [
            { id: 101, title: "Squid Game 2", year: "2024", rating: 8.2, image: "https://image.tmdb.org/t/p/w342/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
            { id: 102, title: "The Penguin", year: "2024", rating: 8.5, image: "https://image.tmdb.org/t/p/w342/a1bO4CnjkI6Enc7XzctqtqBS0hD.jpg" },
        ],
        netflix: [
            { id: 113, title: "Stranger Things", year: "2016", rating: 8.7, image: "https://image.tmdb.org/t/p/w342/uOOtwVbSr4QDjAGIifLDwpb2uF0.jpg" },
        ],
    },
    canais: {
        eventos: [
            { id: 2001, name: "UFC 310", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='20' text-anchor='middle' fill='white'%3EUFC%3C/text%3E%3C/svg%3E", locked: true },
        ],
        globo: [
            { id: 2002, name: "Globo RJ", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='20' text-anchor='middle' fill='white'%3EGLOBO%3C/text%3E%3C/svg%3E", locked: true },
        ],
        sbt: [
            { id: 2003, name: "SBT SP", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='20' text-anchor='middle' fill='white'%3ESBT%3C/text%3E%3C/svg%3E", locked: true },
        ],
        record: [
            { id: 2004, name: "Record TV", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='20' text-anchor='middle' fill='white'%3ERECORD%3C/text%3E%3C/svg%3E", locked: true },
        ],
        esportes: [
            { id: 2005, name: "Premiere 1", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='20' text-anchor='middle' fill='white'%3EPREMIERE%3C/text%3E%3C/svg%3E", locked: true },
        ],
        adultos: [
            { id: 2006, name: "Playboy TV", logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='60' font-size='40' text-anchor='middle' fill='white'%3E🔞%3C/text%3E%3C/svg%3E", locked: true },
        ],
    },
};

const subcategoryLabels = {
    filmes: {
        lancamento: "🎬 Lançamentos",
        legendado: "Legendado",
        cinema: "Cinema",
        netflix: "Netflix",
        amazon: "Amazon Prime Video",
        disney: "Disney Plus",
        brasil_paralelo: "Brasil Paralelo",
        looke: "Looke",
        paramount: "Paramount Plus",
        max: "Max",
        apple: "Apple TV Plus",
        globoplay: "Globoplay",
        crunchyroll: "Crunchyroll",
        discovery_plus: "Discovery +",
        animacao: "Animação",
        acao: "Ação & Aventura",
        comedia: "Comédia",
        crime: "Crime",
        documentario: "Documentário",
        faroeste: "Faroeste",
        familia: "Família",
        sci_fi: "Ficção Científica",
        guerra: "Guerra",
        historia: "História",
        misterio: "Mistério",
        musica: "Música",
        romance: "Romance",
        terror: "Terror",
        thriller: "Thriller",
        marvel: "Marvel",
        dc: "DC Comics",
        k4: "4K",
        religioso: "Religioso",
        esportes: "Esportes",
        diverso: "Diverso",
        adulto: "Adulto"
    },
    series: {
        lancamento: "🎬 Lançamentos",
        legendado: "Legendado",
        netflix: "Netflix",
        amazon: "Amazon Prime Video",
        disney: "Disney Plus",
        max: "Max",
        apple: "Apple TV Plus",
        globoplay: "Globoplay",
        crunchyroll: "Crunchyroll",
        animacao: "Animação",
        acao: "Ação",
        aventura: "Aventura",
        comedia: "Comédia",
        cinema_tv: "Cinema TV",
        crime: "Crime"
    },
    canais: {
        eventos: "EVENTOS",
        globo: "CANAIS | GLOBO",
        sbt: "CANAIS | SBT",
        record: "CANAIS | RECORD",
        hbo: "CANAIS | HBO",
        telecine: "CANAIS | TELECINE",
        filmes_series: "CANAIS | FILMES E SERIES",
        esportes: "CANAIS | ESPORTES",
        prime_video: "CANAIS | PRIME VIDEO",
        premiere: "CANAIS | PREMIERE",
        ondemand: "CANAIS | ONDEMAND",
        usa: "CANAIS | ESTADOS UNIDOS",
        argentinos: "CANAIS | ARGENTINOS",
        portugal: "CANAIS | PORTUGAL",
        conmebol: "CANAIS | CONMEBOL",
        dazn: "CANAIS | DAZN",
        nba: "CANAIS | NBA | USA",
        abertos: "CANAIS | ABERTOS",
        discovery: "CANAIS | DISCOVERY",
        documentarios: "CANAIS | DOCUMENTARIOS",
        infantis: "CANAIS | INFANTIS",
        noticias: "CANAIS | NOTICIAS",
        musica: "CANAIS | MUSICA",
        religiosos: "CANAIS | RELIGIOSOS",
        variedades: "CANAIS | VARIEDADES",
        h24: "CANAIS | 24 HORAS",
        h24_infantis: "CANAIS | 24 HORAS INFANTIS",
        uhd_4k: "CANAIS | UHD 4K",
        cinesky: "CANAIS | CINESKY",
        xxx: "CANAIS | XXX ADULTOS"
    },
};
