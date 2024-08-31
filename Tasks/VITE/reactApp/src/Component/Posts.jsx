import React, { useEffect, useState } from 'react';
import Card from './Card'

const Posts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.org/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.slice(0, 30));
        })
        .catch((error) => {
          console.log('Error Fetching Data', error);
        });
    }, []);
  
    return (
      <div>
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    );
  };

export default Posts
