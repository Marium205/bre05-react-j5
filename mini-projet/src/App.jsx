import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import "./App.css";

import data from "./data/data";

function App() {
  // Comme le spoiler du prof : "blog" ou "post"
  const [state, setState] = useState("blog");

  // Pour savoir quel article afficher en détail
  const [selectedId, setSelectedId] = useState(null);

  function goToBlog() {
    setState("blog");
    setSelectedId(null);
  }

  function goToPost(id) {
    setSelectedId(id);
    setState("post");
  }

  if (state === "blog") {
    return (
      <>
        <Blog data={data} onReadMore={goToPost} />
      </>
    );
  } else {
    // on cherche l'article sélectionné
    const selectedArticle = data.find((article) => article.id === selectedId);

    return (
      <>
        <button className="back-link" onClick={goToBlog}>
          ← Retour à l'accueil
        </button>

        <Post article={selectedArticle} />
      </>
    );
  }
}

export default App;