import React, { useState } from "react";
import  { useNavigate} from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIspending] = useState(false);
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, Body, author };
    setIspending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
    .then(() => {
      console.log("new blog added");
      setIspending(false);
      history('/');
    });
  };
  return (
    <div className="create">
      <h2>Add a New blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={Body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <input
          type="text"   
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
