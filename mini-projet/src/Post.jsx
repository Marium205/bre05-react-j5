function Post(props) {
  // sécurité : si jamais selectedArticle est null
  if (!props.article) {
    return (
      <article className="article-detail">
        <p>Article introuvable.</p>
      </article>
    );
  }

  return (
    <article className="article-detail">
      <span className="category">{props.article.category}</span>
      <h2>{props.article.title}</h2>
      <p className="date">Publié le {props.article.date}</p>
      <hr />
      <p>{props.article.content}</p>
    </article>
  );
}

export default Post;