import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/app.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS это язык програмирования' },
    { id: 2, title: 'JavaScript 2', body: 'JS это язык програмирования' },
    { id: 3, title: 'JavaScript 3', body: 'JS это язык програмирования' }
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'JS это язык програмирования' },
    { id: 2, title: 'Python 2', body: 'JS это язык програмирования' },
    { id: 3, title: 'Python 3', body: 'JS это язык програмирования' }
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 1" />
      < Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
