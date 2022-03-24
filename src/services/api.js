const getPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();

}

const objectToExport = {
    getPlanets,
}

export default objectToExport;

