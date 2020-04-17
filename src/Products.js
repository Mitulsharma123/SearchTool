import React from "react";
import CharacterCard from './CharacterCard';
import characters from './characters_c.json';
import './Product.css';

function Contact() {
  return (
    <div className="contact">
      <div><h2 className="first-class">Product</h2></div>
        <div><p className="second-class">some lines written over in a row</p></div>
          <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
      {characters.map(character => (
        <div className='col-md-4'>
          <CharacterCard name={character.name}
          image={character.image}
          occupation={character.occupation}
          /></div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Contact;