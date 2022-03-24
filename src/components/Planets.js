import { useQuery } from "react-query";
import api from '../services/api';
import Planet from "./Planet";

const Planets = () => {
    const { data, status } = useQuery('planets', api.getPlanets);
    console.log(data);

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