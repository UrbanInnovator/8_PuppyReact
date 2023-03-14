import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [puppyBowl, setPuppyBowl] = useState([])

  useEffect(() => {
    const getPuppies = async() => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players');
        const data = await response.json();
  
        setPuppyBowl(data.data.players)
        console.log(puppyBowl);
      } catch (error) {
        throw error;
      }
      }
        getPuppies();,,,
  }, [])

  return (
    <>
    {
      puppyBowl.map((singlePup, index) => {
        return <li key={index}>{singlePup.name}</li>
      })
    }
    </>
  )



}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)