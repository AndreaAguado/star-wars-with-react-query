import { useQuery } from "react-query";
import api from '../services/api';

const Planets = () => {
    const { data, status } = useQuery('planets', api.getPlanets);
    console.log(data);

    return (
        <div>
            <h2>Planets</h2>
            <p>{status}</p>
        </div>
    );
}

export default Planets;