import React, { useState, useRef, useMemo } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/myModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/app.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS это язык програмирования' },
    { id: 2, title: 'Python', body: 'dwadawdawda' },
    { id: 3, title: 'Script', body: 'ания' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState()
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => { setModal(true) }}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ marginTop: "15px" }} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
