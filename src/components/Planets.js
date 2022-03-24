import { useQuery } from "react-query";
import api from '../services/api';
import Planet from "./Planet";

const Planets = () => {
    const getPlanets = () => api.get('http://swapi.dev/api/planets/');
    // useQuery expects 2 arguments: a key ('planets') and a function ('getPlanets). Additionally it can receive a third parameter which is an object with multiple properties:
    const { data, status } = useQuery('planets', getPlanets, {
        onSuccess: () => console.log('planets data fetched correctly'), //Property receives arrow function as value
        onError: () => console.log('planets data could not be fetched')//Propertyreceives arrow function as value
    });

    return (
        <div>
            <h2>Planets</h2>
            {status === 'error' && <p>Error fetching the data from the API</p>
            }
            {status === 'loading' && <p>Loading data...</p>}
            {status === 'success' &&
                <ul>
                    {
                        data.results.map((planet) => (
                            <li key={planet.name} className="card">
                                <Planet planet={planet} />
                            </li>
                        ))
                    }

                </ul>}
        </div>
    );
}

export default Planets;