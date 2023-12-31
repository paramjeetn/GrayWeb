//import { useState,useEffect } from "react";
import Post from "../post/Post";
import "./posts.scss";
import {useQuery} from "@tanstack/react-query"
import { makeRequest } from "../../axios.js";


const Posts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts").then(res=>{
        return res.data;
      })
  })


return (
  <div className="posts">
    {error
      ? "Something went wrong!"
      : isPending
      ? "loading"
      : data.map((post) => <Post post={post}  />)}
  </div>
)
};

export default Posts;
