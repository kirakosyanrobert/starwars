import React, {useState} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Movie from './Components/Movie/Movie';
import { Container } from 'react-bootstrap';
import CharactersTable from './Components/CharactersTable/CharactersTable';
import ErrorMessage from './Components/UI/Loader/ErrorMessage/ErrorMessage';

const App = () => {
  const [selected, setSelected] = useState({})
  const [error, setError] = useState({})

  return (
    <React.Fragment>
      <ErrorMessage error={error} />
      <Header selected={selected}
              setSelected={setSelected}
              setError={setError}
      />
      <Container>
        <Movie crawl={selected.opening_crawl} />
        {selected.characters &&
          <CharactersTable
            id={selected.episode_id}
            charactersLinks={selected.characters}
            setError={setError}
          />
        }
      </Container>
    </React.Fragment>
  );
}

export default App;
