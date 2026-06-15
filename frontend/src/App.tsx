import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  // abort = used to cancel the fetch request if the component unmounts before the request completes
  useEffect(() => {
    const abort = new AbortController();
    fetch("http://localhost:5000/api", { signal: abort.signal })
      .then((response) => response.json())
      .then(setData)
      .catch((error) => setError(error.message));
    return () => abort.abort();
  }, []);

  return (
    <>
      <h1>Hello from React!</h1>

      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );}

export default App;
