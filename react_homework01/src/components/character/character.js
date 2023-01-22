
import './character.css';


 const CharacterBlock = ({character}) => {
    const {id, name, status, species, gender, image} = character;

    return (
        <div className="character-block">
            <img className="character-image" src={image} alt={name}/>
            <div className="character-text">
                <div>
                    id: {id}
                </div>
                <div>
                    name: {name}
                </div>
                <div>
                    status: {status}
                </div>
                <div>
                    species: {species}
                </div>
                <div>
                    gender: {gender}
                </div>
            </div>
        </div>
    );
};
export {CharacterBlock};
