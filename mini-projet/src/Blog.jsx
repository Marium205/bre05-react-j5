function Blog(props) {
  return (
    <div className="blog-grid">
      {props.data.map((article) => (
        <article className="card" key={article.id}>
          <span className="category">{article.category}</span>
          <h3>{article.title}</h3>
          <p className="date">{article.date}</p>
          <p>{article.excerpt}</p>

          <button className="btn" onClick={() => props.onReadMore(article.id)}>
            Lire la suite →
          </button>
        </article>
      ))}
    </div>
  );
}

export default Blog;