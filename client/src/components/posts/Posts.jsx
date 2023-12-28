import { useState,useEffect } from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {

const [posts,setPosts]=useState([])
useEffect(()=>{
 async function fetchData(){
  await fetch("http://localhost:8000/Server/posts")
  .then((res)=>res.json())
  .then((data)=>{
    setPosts(data);
  })
  .catch((err)=>{
    console.log(err)
  });
 }
 fetchData();
  
},[]);


  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
