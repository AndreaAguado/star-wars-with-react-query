import { useState } from "react";
import { useQueryPlanets } from '../services/api';
import PagesBar from "./PagesBar";
import Planet from "./Planet";

const Planets = () => {
    const [page, setPage] = useState(1);

    const { data, status, isFetching, isFetched } = useQueryPlanets(page);

    return (
        <div>
            <h2>Planets</h2>
            <PagesBar setPage={setPage} page={page} data={data} />
            {isFetching && !isFetched && <p>Loading...</p>}

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