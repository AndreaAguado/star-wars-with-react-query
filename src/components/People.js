import { useQuery } from "react-query";
import api from '../services/api';
import Person from "./Person";

const People = () => {
    const getPeople = () => api.get('https://swapi.dev/api/people/');
    const { data, status } = useQuery('people', getPeople);
    console.log(data);

    return (<div>
        <h2>People</h2>
        {status === 'error' && <p>Error fetching the data from the API</p>
        }
        {status === 'loading' && <p>Loading data...</p>}
        {status === 'success' &&
            <ul>
                {
                    data.results.map((person) => (
                        <li key={person.name} className="card">
                            <Person person={person} />
                        </li>
                    ))
                }

            </ul>}</div>);
}

export default People;