import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Equalizer } from '@material-ui/icons';
import './Pokemon.css';

export const Pokemon = ({ name }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemonDetails(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [name]);

    return (
        <div className="pokemon-card">
            {pokemonDetails ? (
                <div>
                    <ul>
                        <li><h3>{pokemonDetails.name}</h3></li>
                        <li className="image">
                            <img
                                src={pokemonDetails.sprites.front_default}
                                alt={`Afbeelding ${pokemonDetails.name}`}
                            />
                        </li>
                        <li><h4>Moves: </h4>{pokemonDetails.moves.length}</li>
                        <li><h4>Weight: </h4>{pokemonDetails.weight}</li>
                    </ul>
                    <ul className="abilities">
                        <li>
                            <h4><Equalizer />Abilities</h4>
                        </li>
                        {pokemonDetails.abilities.map(({ ability }) => (
                            <li key={ability.name}>{ability.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                    <span className="loading">loading...</span>
                )
            }
        </div>
    )
}