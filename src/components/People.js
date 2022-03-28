import { useState } from "react";
import { useQueryPeople } from '../services/api';
import PagesBar from "./PagesBar";
import Person from "./Person";


const People = () => {
    const [page, setPage] = useState(1);

    const { data, status, isFetching, isFetched } = useQueryPeople(page);

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