import { useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


export default function Feed() {
  const [posts,setPosts] = useEffect([]);

  useEffect(()=>{
  const fetchPosts = async() => {
    const res = await axios.get("posts/timeline/658ec52362697763f7e08071");
    console.log(res);
  }; 

 fetchPosts();

  },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => ( */}
          {/* // <Post key={p.id} post={p} /> */}
        {/* // ))} */}
      </div>
    </div>
  );
}
