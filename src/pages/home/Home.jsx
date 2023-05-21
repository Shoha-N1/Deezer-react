import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();

    if (data?.posts?.length) {
      setPosts(data.posts);
    }
  }

  return (
    <div>
      <div className="big-box">
        <h2>posts</h2>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>

              <div>{post.body}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="big-box">
        <h2>Playlists</h2>
      </div>

      <div className="big-box">
        <h2>Podcast</h2>
      </div>

      <div className="big-box">
        <h2>Tracks</h2>
      </div>
    </div>
  );
}
