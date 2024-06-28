import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from '../components/Formulario';

const PokeSearch = () => {
    const [searchPoke, setSearchPoke] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchPoke) {
            setLoading(true);
            setError('');
            axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPoke.toLowerCase()}`)
                .then(response => {
                    setPokemon(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setPokemon(null);
                    setLoading(false);
                    setError('Pokémon no encontrado');
                });
        } else {
            setPokemon(null);
        }
    }, [searchPoke]);

    const handleSearch = (nombre) => {
        setSearchPoke(nombre);
    };

    return (
        <div>
            <Formulario onSearch={handleSearch} />
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
};

export default PokeSearch;
