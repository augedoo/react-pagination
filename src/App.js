import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import { Pagination } from './components/Pagination';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // Make request to fetch posts
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  // Get current page
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='text-primary mt-3 mb-3'>Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <div className='mt-3 d-flex justify-content-center'>
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
