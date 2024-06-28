import React, {useState} from "react";

const Formulario = ({onSearch}) =>{
    const [nombre, setName] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        onSearch(nombre);
        alert(`Nombre del Pokémon: ${nombre}`);
    };
    return (
        <form onSubmit={handleSubmit} className="formulario">
            <div className = "form-name">
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;