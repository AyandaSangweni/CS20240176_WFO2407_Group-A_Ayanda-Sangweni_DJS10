import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please try again later.");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {error ? <ErrorMessage error={error} /> : <BlogList posts={posts} />}
    </div>
  );
};

export default App; 