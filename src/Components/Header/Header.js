import React, {useEffect, useState} from 'react';
import './Header.scss';
import { Dropdown } from 'react-bootstrap';
import Axios from 'axios';
import Loader from '../UI/Loader/Loader';


const Header = ({selected, setSelected, setError}) => {
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);

    const getData = () => {
        Axios.get(`https://swapi.co/api/films/`)
        .then(res => {
            let films = res.data.results.sort((a, b) => {
                return Date.parse(a.release_date) - Date.parse(b.release_date)
            });
            setFilms(films)
            setLoading(false);
        })
        .catch(err => setError(err))
    }

    const showActive = (film) => {
        setSelected(film)
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <header className="header__content">
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    {selected.title || 'Choose Film'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        !loading
                        ?
                            films.map(film => {
                                return <Dropdown.Item 
                                            key={film.episode_id}
                                            onClick={() => showActive(film)}
                                        >
                                            {film.title}
                                        </Dropdown.Item>
                            })
                        :
                            <Loader />
                    }
                </Dropdown.Menu>
            </Dropdown>
        </header>
      
    )
}

export default Header;