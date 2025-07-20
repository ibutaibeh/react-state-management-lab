// src/App.jsx
import './App.css'
import { useState } from 'react';

const team = [];
const money=100;
const zombieFighters= [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
];

const App = () => {

const [myTeam, setMyTeam]= useState([])
const [availableZombies, setavailableZombies]= useState(zombieFighters)
const money = myTeam.reduce((acc,curr)=>{return acc-curr.price},100)
const strength= myTeam.reduce((sum,curr)=>{return sum+curr.strength},0)
const agility= myTeam.reduce((sum,curr)=>{return sum+curr.agility},0)


const handleAddFighter =(fighter)=>{
  if(money>=fighter.price){
setMyTeam([...myTeam,fighter])
setavailableZombies(availableZombies.filter((zombie)=>(zombie.id!==fighter.id)))
  }else{
    return console.log('not enough money')
  }


  }
const handleRemoveFighter =(fighter)=>{
setavailableZombies([...availableZombies,fighter])
setMyTeam(myTeam.filter((zombie)=>(zombie.id!==fighter.id)))

  }
  return (

    <>
    <h1>Zombie Fighters</h1>
    <h3>Money:{money}</h3>
    <h3>Team Strength:{strength}</h3>
    <h3>Team Agility:{agility}</h3>
    <h2>My Team</h2>
    <ul>
      {myTeam.length===0 ? <p>Pick some team members!</p> :
myTeam.map((z,id)=>(
  <li key={z.id}>
          <img src={z.img} alt="zombie img" />
          <h3>{z.name}</h3>
          <p>Price: {z.price}</p>
          <p>Strength: {z.strength}</p>
          <p>Agility: {z.agility}</p>
          <button onClick={()=>handleRemoveFighter(z)}>remove</button> 
  </li>)) }


    </ul>
    
    <h2>Fighters</h2>
    <ul>
{availableZombies.map((z,id)=>(
  <li key={z.id}>
          <img src={z.img} alt="zombie img" />
          <h3>{z.name}</h3>
          <p>Price: {z.price}</p>
          <p>Strength: {z.strength}</p>
          <p>Agility: {z.agility}</p>
          <button onClick={()=>handleAddFighter(z)}>Add</button>
  </li>
))}

    </ul>
    
    </>
  )

}

export default App
