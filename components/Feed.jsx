"use client"

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const Feed = () => {

  const [ searchText, setSearchText ] = useState('');
  const [ posts, setPosts ] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }
   
    fetchPosts();
   console.log(posts)
  }, []);

  const handleSearchChange = (e) => {
   
    
  }

  return (

    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder='Search for a tag or a username'
          className='search_input peer'
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => { }} />

    </section>
  )
}

const PromptCardList = ({ data, handleTagClick }) => {

  return (
    <div className="mt-16 prompt_layout">
      { data && data.map((post) => (
        <PromptCard data={data}
                    post={post}
                    key={post._id}
                    handleTagClick={handleTagClick} />
      )) }
     
    </div>
  )
};

export default Feed