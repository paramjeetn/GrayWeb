import { useState,useEffect } from "react";
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


// const [posts,setPosts]=useState([])
// useEffect(()=>{
//  async function fetchData(){
//   await fetch("http://localhost:8000/Server/posts")
//   .then((res)=>res.json())
//   .then((data)=>{
//     setPosts(data);
//   })
//   .catch((err)=>{
//     console.log(err)
//   });
//  }
//  fetchData();
  
// },[]);


return (
  <div className="posts">
    {error
      ? "Something went wrong!"
      : isPending
      ? "loading"
      : data.map((post) => <Post post={post} key={post.id} />)}
  </div>
)
};

export default Posts;
