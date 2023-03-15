import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [puppyBowl, setPuppies] = useState([])

  useEffect(() => {
    const getPuppies = async() => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players');
        const data = await response.json();
  
        setPuppies(data.data.players);
        console.log(data.data.players[0]);
      } catch (error) {
        throw error;
      }
      }
        getPuppies();
  }, [])

  return (
    <>
      <div id="PupPage">
        {
          puppyBowl.map((singlePup, index) => {
            return (
              <div class="OnePup" key={index}>
                <h3 class="PupInfo">ID#: {singlePup.id} | {singlePup.name}</h3>
                <img class="PupPic" src={singlePup.imageUrl}/>
                <h3 class="PupInfo">Pup Stats</h3>
                <h4 class="PupStats">Breed: {singlePup.breed} | Current Status: {singlePup.status}</h4>
              </div>
            )
          })
        }
      </div>
    </>
  )



}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)