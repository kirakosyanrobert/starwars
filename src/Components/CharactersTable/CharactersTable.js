import React, { useEffect, useState } from 'react';
import './CharactersTable.scss';
import Axios from 'axios';
import Loader from '../UI/Loader/Loader';
import TableDrawer from './TableDrawer/TableDrawer';

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

    const filterAscending = (type) => {
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

    const filterDescending = (type) => {
        if(type === "name") {
            let people = [...characters];
            people.sort((a, b) => b.name.localeCompare(a.name));
            setCharacters(people);
        } else {
            let people = [...characters];
            people.sort((a, b) => +b.height - +a.height);
            setCharacters(people);
        }
    }

    return (
                !loading 
            ?
                <TableDrawer 
                    characters={characters}
                    filterAscending={filterAscending}
                    filterDescending={filterDescending}
                />
            :
                <Loader />
    )
}

export default CharactersTable;