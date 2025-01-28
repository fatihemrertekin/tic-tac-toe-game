import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        
        if (isEditing) {
            onChangeName(symbol, name);
        }
    }

    function handleNameChange(e) {
        console.log(e);
        setName(e.target.value);
    }

    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" onChange={handleNameChange} value={name} required/>
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}