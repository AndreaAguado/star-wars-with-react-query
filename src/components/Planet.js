const Planet = ({ planet }) => {
    return (
        <>
            <h3>{planet.name}</h3>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
        </>
    );
}

export default Planet;