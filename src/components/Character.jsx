export function Character(character) {
    return (
      <div className="text-center p-5 card">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} className="" />
        <p>{`Origin: ${character.origin && character.origin.name}`}</p>
      </div>
    );
  }
  export default Character;