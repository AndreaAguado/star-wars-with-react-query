import { useState } from "react";
import { useQuery } from "react-query";
import api from '../services/api';
import PagesBar from "./PagesBar";
import Planet from "./Planet";

const Planets = () => {
    const [page, setPage] = useState(1);
    // const getPlanets = (page) => api.get(`http://swapi.dev/api/planets/?page=${page}`);

    // useQuery expects 2 arguments: a key ('planets') and a function ('getPlanets). Additionally it can receive a third parameter which is an object with multiple properties:
    const { data, status, isFetching, isFetched } = useQuery(['planets', page], () => api.get(`http://swapi.dev/api/planets/?page=${page}`), {
        onSuccess: () => console.log('planets data fetched correctly'), //Property receives arrow function as value
        onError: () => console.log('planets data could not be fetched'),//Propertyreceives arrow function as value
        keepPreviousData: true,
    });

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