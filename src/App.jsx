import { useEffect } from "react";
import { useGetArticles } from "./hooks/useGetArticles";
import "./styles/normalize.css";
function App() {
  const { loading, articles } = useGetArticles();
  useEffect(() => {
    console.log(articles);
  }, []);
  return (
    <div className="App">
      {loading && <>Cargando</>}
      {!loading && (
        <>
          {articles.map((el) => (
            <div key={el.id}>{el.title}</div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
