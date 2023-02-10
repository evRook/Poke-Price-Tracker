export const homeLoader = async () => {
    const res = await fetch('https://api.pokemontcg.io/v2/cards/base1-4')

    return res.json()
}