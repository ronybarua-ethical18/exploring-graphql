import React, { useState, useEffect } from "react";

const GetPost = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There was a problem");
      });
  });
  return (
  <div>
      {loading ? `Loading....` : post.title}
      {error || null}
  </div>
  );
};

export default GetPost;
