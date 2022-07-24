import Character from "./character"

export default function CharacterPanels({ characters }) {

    //refactor me

    let characterPanels = []

    characters = JSON.parse(characters)
    characters.forEach(character => {
        characterPanels.push(new Character(character))
    })
    
    //abstract out individual character panels, then call <Panel data={character} />
    return (
    <ul className="list-none flex flex-wrap justify-evenly">
    {characterPanels.map(character => {
    return(<div className="m-10 w-1/2 border-solid border-green-500 bg-green-900 border-4 p-16">
            <li className="list-" key={`${character.name}`}>
                <p className="block">{`Level ${character.level} ${character.race} ${character.className}`}</p>
                <h2 className="text-3xl">{`${character.name}`}</h2>
                <p className="block font-bold text-blue-300">{`AC: ${character.ac}`}</p>
                <p className="block text-red-500">{`HP: ${character.hp[0].hp_max}`}</p>

            </li>
            </div>)
    })}
    </ul>
    )
}