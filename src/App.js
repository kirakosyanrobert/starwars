import React, {useState} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Movie from './Components/Movie/Movie';
import { Container } from 'react-bootstrap';

const App = () => {
  const [selected, setSelected] = useState({})
 

  return (
    <React.Fragment>
      <Header selected={selected} setSelected={setSelected}  />
      <Container>
        <Movie crawl={selected.opening_crawl} />

      </Container>
    </React.Fragment>
  );
}

export default App;
