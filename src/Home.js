import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
export default function Home() {
       const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
      return (
    <div className="Home">
      
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <div className="Title">All Blogs!</div>
      {blogs && <BlogList blogs={blogs} />}
           </div>
  ); 
}
