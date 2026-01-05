# Como Adicionar Imagens de Capas

## Formato do Nome do Arquivo
As imagens devem ser nomeadas com o **ID do filme/série** seguido de `.jpg`

### Exemplos:
- Moana 2 (ID: 1) → `1.jpg`
- Gladiador 2 (ID: 2) → `2.jpg`
- Wicked (ID: 3) → `3.jpg`
- Oppenheimer (ID: 300) → `300.jpg`

## Especificações Recomendadas
- **Formato:** JPG ou PNG (renomeie para .jpg)
- **Tamanho:** 342 x 513 pixels (proporção 2:3)
- **Qualidade:** 80%+ para boa visualização

## Como Funciona
1. O sistema primeiro tenta carregar `assets/covers/{id}.jpg`
2. Se não existir, tenta a URL remota do TMDB
3. Se ambos falharem, mostra um placeholder com o título

## Onde Encontrar Imagens
- TMDB: https://www.themoviedb.org/
- IMDb: https://www.imdb.com/
- Google Imagens (busque pelo nome do filme + poster)

## Lista de IDs Importantes (lançamentos)
| ID | Título |
|----|--------|
| 1 | Moana 2 |
| 2 | Gladiador 2 |
| 3 | Wicked |
| 4 | Kraven: O Caçador |
| 5 | Sonic 3 |
| 6 | Deadpool & Wolverine |
| 7 | Joker: Folie à Deux |
| 8 | Venom: O Último Ataque |
| 9 | Inside Out 2 |
| 10 | Duna: Parte Dois |
