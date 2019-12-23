import React, { useEffect, useState } from 'react';
import './CharactersTable.scss';
import { Table } from 'react-bootstrap';
import Axios from 'axios';
import Loader from '../UI/Loader/Loader';
import GenderView from '../UI/Loader/GenderView/GenderView';
import HeightView from '../UI/Loader/HeightView/HeightView';

const CharactersTable = ({charactersLinks, id, setError}) => {
        const [characters, setCharacters] = useState([]);
        const [loading, setLoading] = useState(true);

    const getCharacters = async () => {
        setLoading(true)
        let characters = [];

        for(let i = 0; i < charactersLinks.length; i++) {
            try {
                const res = await Axios.get(`${charactersLinks[i]}`);
                characters.push(res.data);
            } catch (err) {
                setError(err)
            }
        }
        setTimeout(setCharacters(characters), 0);
        setTimeout(setLoading(false), 0);
    }

    useEffect(() => {
        getCharacters();
    }, [id])

    const filter = (type) => {
        if(type === "name") {
            let people = [...characters];
            people.sort((a, b) => a.name.localeCompare(b.name));
            setCharacters(people);
        } else {
            let people = [...characters];
            people.sort((a, b) => +a.height - +b.height);
            setCharacters(people);
        }
    }

    const GetTotal = ({characters}) => {
        let summary = 0;
        characters.map(character => {
            return summary += Number(character.height) || 0
        });
        return <HeightView total={summary} />
    }

    return (
                !loading 
                ?
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th onClick={() => filter("name")}>Name</th>
                                <th>Gender</th>
                                <th onClick={() => filter("height")}>Height</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                characters.map((character, index) => {
                                return  <tr key={`character${index}`}>
                                            <td>{character.name}</td>
                                            <td><GenderView gender={character.gender} /></td>
                                            <td>{character.height}</td>
                                        </tr>
                                })
                            }
                            <tr>
                                <td colSpan="2">{characters.length}</td>
                                <td><GetTotal characters={characters} /></td>
                            </tr>
                        </tbody>
                </Table>
            :
                <Loader />
    )
}

export default CharactersTable;