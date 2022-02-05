import React, { useState, useRef } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/app.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS это язык програмирования' },
    { id: 2, title: 'JavaScript 2', body: 'JS это язык програмирования' },
    { id: 3, title: 'JavaScript 3', body: 'JS это язык програмирования' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов 1" />
      < Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
