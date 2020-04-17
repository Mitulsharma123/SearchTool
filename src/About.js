import React from "react";
import characters from './characters_a.json';
import CharacterCard from './CharacterCard';
import './About.css';

function About(){
    return (
    <div className="about">
        <div><h2 className="first-class">About</h2></div>
        <div><p className="second-class">some lines written over in a row</p></div>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
      {characters.map(character => (
        <div className='col-md-4'>
          <CharacterCard name={character.name} 
          image={character.image} 
          occupation={character.occupation}
          />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default About;