const get = async (url) => {
    const res = await fetch(url);
    return res.json();

}

const objectToExport = {
    get,
}

export default objectToExport;

