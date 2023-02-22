export const setsLoader = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/sets`)

        return res.json()
}

export const rocketLoader = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=id:base5`)

        return res.json()
}