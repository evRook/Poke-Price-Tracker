
export const base1Loader = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=id:base1`)

        return res.json()
}