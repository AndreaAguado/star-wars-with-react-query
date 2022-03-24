const Person = ({ person }) => {
    return (<>
        <h3>{person.name}</h3>
        <p>Gender: {person.gender}</p>
        <p>Birth year: {person.birth_year}</p>
    </>);
}

export default Person;