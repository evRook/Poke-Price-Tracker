
export const homeLoader = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:charizard`)

        return res.json()
}