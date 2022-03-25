const PagesBar = ({ setPage, page, data }) => {
    return (
        <>
            <button onClick={() => { setPage(old => Math.max(old - 1, 1)) }}>Previous page</button>
            <span>Page {page}</span>
            <button onClick={() => { setPage(old => (!data || !data.next ? old : old + 1)) }}>Next page</button>
        </>
    );
}

export default PagesBar;