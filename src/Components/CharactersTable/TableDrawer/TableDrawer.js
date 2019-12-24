import React from 'react';
import { Table } from 'react-bootstrap';
import GenderView from '../../UI/Loader/GenderView/GenderView';
import HeightView from '../../UI/Loader/HeightView/HeightView';

const TableDrawer = ({characters, filterAscending, filterDescending}) => {

    const GetTotal = ({characters}) => {
        let summary = 0;
        characters.map(character => {
            return summary += Number(character.height) || 0
        });
        return <HeightView total={summary} />
    }

    return (
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th onDoubleClick={() => filterDescending("name")}
                            onClick={() => filterAscending("name")}
                        >
                            Name
                        </th>
                        <th>Gender</th>
                        <th onDoubleClick={() => filterDescending("height")}
                            onClick={() => filterAscending("height")}
                        >   
                            Height
                        </th>
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
    )
}

export default TableDrawer;