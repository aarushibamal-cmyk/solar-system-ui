import React from 'react'
import Card from './components/Cards.jsx'
import ImageCard from './components/ImageCard.jsx'
import Navbar from './components/Navbar.jsx'
import styles from './components/Planet.module.css'
const solarSystem = [
  {
    name: "Sun",
    fact: "The Sun contains about 99.86% of all the mass in the solar system.",
    link: "https://i.pinimg.com/736x/71/28/18/7128183ff52dacf42eacc78ab391e82d.jpg",
    description: "The Sun is the center of our solar system and a massive star made mostly of hydrogen and helium. It generates energy through nuclear fusion, producing light and heat that sustain life on Earth. Its gravity holds all the planets in orbit, and it contains about 99.86% of the total mass of the solar system."
  },
  {
    name: "Mercury",
    fact: "A day on Mercury is longer than its year.",
    link: "https://i.pinimg.com/736x/c7/8e/5d/c78e5dbdbce258a0f603f56881b6e44e.jpg",
    description: "Mercury is the closest planet to the Sun and also the smallest in the solar system. It has no atmosphere to trap heat, which causes extreme temperature changes between day and night. Its surface is heavily cratered, similar to the Moon, and a single day on Mercury lasts longer than its entire year."
  },
  {
    name: "Venus",
    fact: "Venus rotates in the opposite direction compared to most planets.",
    link: "https://i.pinimg.com/736x/da/82/bf/da82bf8da7049494ad9ef90571e2bc41.jpg",
    description: "Venus is often called Earth's twin because of its similar size, but it is extremely hostile. Its thick carbon dioxide atmosphere creates a strong greenhouse effect, making it the hottest planet in the solar system. Venus also rotates very slowly and in the opposite direction, causing the Sun to rise in the west and set in the east."
  },
  {
    name: "Earth",
    fact: "Earth is the only known planet that supports life.",
    link: "https://i.pinimg.com/1200x/5f/a4/15/5fa41589e831612dfd63d2591198c4e7.jpg",
    description: "Earth is the third planet from the Sun and the only known planet that supports life. It has a perfect balance of atmosphere, water, and temperature that allows living organisms to thrive. About 71% of its surface is covered with water, and it has a protective magnetic field that shields it from harmful solar radiation."
  },
  {
    name: "Mars",
    fact: "Mars has the tallest volcano in the solar system, Olympus Mons.",
    link: "https://i.pinimg.com/736x/73/82/da/7382da9644fe10fee1e9953f259205e4.jpg",
    description: "Mars is known as the Red Planet due to iron oxide on its surface. It has the tallest volcano in the solar system, Olympus Mons, and a massive canyon system called Valles Marineris. Scientists believe Mars once had liquid water, making it a key target in the search for past or present life beyond Earth."
  },
  {
    name: "Jupiter",
    fact: "Jupiter is so large that all other planets could fit inside it.",
    link: "https://i.pinimg.com/736x/fa/89/14/fa891426046813ed0993cab4f1e312c6.jpg",
    description: "Jupiter is the largest planet in the solar system and is a gas giant composed mainly of hydrogen and helium. It has a powerful magnetic field and dozens of moons, including Ganymede, the largest moon in the solar system. Its most famous feature is the Great Red Spot, a massive storm that has been raging for centuries."
  },
  {
    name: "Saturn",
    fact: "Saturn can float in water because it is less dense than water.",
    link: "https://i.pinimg.com/736x/10/83/2f/10832f8c4943efdc5c58d06d00039cd3.jpg",
     description: "Saturn is a gas giant best known for its spectacular ring system made of ice, rock, and dust. It is the second-largest planet and has a very low density, meaning it could theoretically float in water. Saturn also has many moons, including Titan, which has a thick atmosphere and lakes of liquid methane."
  },
  {
    name: "Uranus",
    fact: "Uranus rotates on its side, making its seasons extremely unusual.",
    link: "https://i.pinimg.com/736x/78/ff/2f/78ff2fbbfe4486acf0dc8d9f74dc5dd2.jpg",
    description: "Uranus is an ice giant with a pale blue color caused by methane in its atmosphere. It is unique because it rotates on its side, likely due to a massive collision in the past, leading to extreme seasonal changes. Uranus has faint rings and a cold atmosphere, making it one of the chilliest planets."
  },
  {
    name: "Neptune",
    fact: "Neptune has the fastest winds in the solar system.",
    link: "https://i.pinimg.com/736x/a7/c9/0f/a7c90ff08b97074a4bb3bcff61279d96.jpg",
    description: "Neptune is the farthest planet from the Sun and is known for its deep blue color and extremely strong winds, the fastest in the solar system. It is an ice giant like Uranus and has a dynamic atmosphere with storms and cloud patterns. Neptune’s moon Triton is geologically active and orbits the planet in the opposite direction of its rotation."
  }
];
const App = () => {
  return (
    <div className={styles.solarSystem}>
      <Navbar/>
      {solarSystem.map((planet) => (
        <div className={styles.planetSection} key={planet.name}>
          <Card name={planet.name} fact={planet.fact} description={planet.description}/>
          <ImageCard image={planet.link}/>
        </div>
      ))}
    </div>
  )
}

export default App

