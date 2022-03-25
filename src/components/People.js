import { useState } from "react";
import { useQuery } from "react-query";
import api from '../services/api';
import PagesBar from "./PagesBar";
import Person from "./Person";


const People = () => {
    const [page, setPage] = useState(1);
    // const getPeople = () => api.get('https://swapi.dev/api/people/');
    const { data, status, isFetching, isFetched } = useQuery(['people', page], () => api.get(`https://swapi.dev/api/people/?page=${page}`), {
        onSuccess: () => console.log('people data fetched correctly'), //Property receives arrow function as value
        onError: () => console.log('people data could not be fetched'),//Propertyreceives arrow function as value
        keepPreviousData: true,
    });

    return (
        <div>
            <h2>People</h2>
            <PagesBar setPage={setPage} page={page} data={data} />
            {isFetching && !isFetched && <p>Loading...</p>}

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

                </ul>}
        </div>
    );
}

export default People;