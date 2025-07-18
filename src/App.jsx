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
const [myTeam,setMyTeam]= useState(team);
const [gold,setGold]= useState(money);
const [zombieStore,setZombieStore]= useState(zombieFighters);




  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
<div>
    <h2>My Team</h2>
    <ul>
{team.map((t,id)=>(
  
    <li key={id}>
          <img src={t.img} alt="zombie img" />
          <h3>{t.name}</h3>
          <p>Price: {t.price}</p>
          <p>Strength: {t.strength}</p>
          <p>Agility: {t.agility}</p>
    </li>

))}
  </ul>
</div>
<div>
<h2>Add from these list</h2>
<ul>
    {zombieFighters.map((zombieFighter,id)=>(
       
        <li key={id}>
          <img src={zombieFighter.img} alt="zombie img" />
          <h3>{zombieFighter.name}</h3>
          <p>Price: {zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={handleAddFighter}>Add</button>
      </li>   
    ))}
 </ul>
</div>
    </>
  );
}

export default App
