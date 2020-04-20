import React from "react";
import characters from "./characters.json";
import CharacterCard from "./CharacterCard";
import history from "./history";
import "./Home.css";

function Home(props) {
  let handler = path => {
    history.push(path);
  };
  return (
    <div className="Home">
      <div>
        <h2 className="first-class">Home page</h2>
      </div>
      <div>
        <p className="second-class">some lines written over in a row</p>
      </div>
      <div>
        {props.location.path === "/" && (
          <input type="text" className="input" placeholder="Search.." />
        )}
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {characters.map(character => (
            <div className="col-md-4" key={character.id}>
              <CharacterCard
                name={character.name}
                image={character.image}
                occupation={character.occupation}
                handler={handler}
                path={character.path}
                
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
