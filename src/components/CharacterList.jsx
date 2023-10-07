import { useState, useEffect } from "react";
import Character from "./character";

export function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div>
        <div className="container">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
    </div>
  );
}

export default CharacterList;