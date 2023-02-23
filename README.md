# Poke Price Tracker

![Alt text](docs/src/Pages/Components/img/ScreenshotPPT.png)

### [evrook.github.io/Poke-Price-Tracker](https://evrook.github.io/Poke-Price-Tracker/)

<br/>

## About:
---
<p>
    This project is to build out a well known UI pattern in react with data integrated from an API. 
</p>



</br>

## Later Additions:
---
- Integrated data for all sets.
- Modal display for cards
- Filter/Search functionality 

</br>

## How to get started:
---

- Get Familiar with the [Pokemon TCG API](https://pokemontcg.io/)

- Check out the [Pokemon TCG Documentation](https://docs.pokemontcg.io/)

- Set up loaders in <code>loaders.js</code> to communicate with the API.

<p>
    ex:

    export const rocketLoader = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=id:base5`)

        return res.json()
    }
</p>

</br>

## Built With:
---

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<br/>

## Acknowledgements:
---

- [Badges4](https://github.com/alexandresanlim/Badges4-README.md-Profile)

- [Pokemon TCG API](https://pokemontcg.io/)

## Contributions
---
- [Source Code](https://github.com/evRook/Poke-Price-Tracker)
- [Issue Tracker](https://github.com/evRook/Poke-Price-Tracker/issues)