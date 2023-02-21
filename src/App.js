import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  let page = 1;

  const loadMoreComments = () => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`
    )
      .then((request) => request.json())
      .then((response) => {
        const tenComments = [];
        response.forEach((res) => tenComments.push(res));
        setComments((comment) => [...comment, ...tenComments]);
        setLoading(false);
      });

    page++;
  };

  const handleScroll = (e) => {
    if (
      Math.ceil(e.target.documentElement.scrollTop + window.innerHeight) + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreComments();
    }
  };

  useEffect(() => {
    loadMoreComments();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="container py-5">
        <div className="row g-5">
          {comments?.map((comment) => (
            <div key={comment?.id} className="col-4">
              <Card comment={comment} />
            </div>
          ))}
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
}

export default App;
