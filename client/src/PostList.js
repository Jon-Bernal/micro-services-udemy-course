import React, { useState, useEffect } from "react";
import axios from "axios";
import Commentcreate from "./CommentCreate";
import CommentList from "./CommentList";

const Postlist = () => {
  const [posts, setPosts] = useState({});

  async function fetchPosts() {
    const res = await axios.get("http://localhost:4000/posts");
    console.log("res.data :>> ", res.data);
    setPosts(res.data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts?.map((post) => {
        return (
          <div
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={post.id}
          >
            <div className="card-body">
              <h3>{post.title}</h3>
              <Commentcreate postId={post.id} />
              <CommentList postId={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postlist;
