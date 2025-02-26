import {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import {useLoaderData} from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  //   const [posts, setPosts] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //       );
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  return (
    <div>
      {posts && posts?.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export async function postLoader() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
  const response = await data.json()
  console.log('response :>> ', response);
  return response;

// const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=50");
// console.log('response :>> ', response);
// return response;
}

export default PostList;
