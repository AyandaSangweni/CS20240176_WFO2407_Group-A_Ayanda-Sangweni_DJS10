import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholdger.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {error ? <p>Error: {error}</p> : <BlogList posts={posts} />}
    </div>
  );
}