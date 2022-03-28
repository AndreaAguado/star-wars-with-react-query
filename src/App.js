import { useState } from "react";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Planets from "./components/Planets";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const [page, setPage] = useState('planets');
  return (
    <>
      <div className="App">
        <header>
          <h1>Star Wars Info</h1>
          <NavBar setPage={setPage} />
        </header>
        <main className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </main>
        <footer></footer>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
