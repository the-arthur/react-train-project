import React, { useState, useRef, useMemo, useEffect } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/myModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState()
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit));
    })
    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            {/* <button onClick={fetchPosts}>Получить посты</button> */}
            <MyButton style={{ marginTop: "30px" }} onClick={() => { setModal(true) }}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            <hr style={{ marginTop: "15px" }} />
            {postError &&
                <h1>Ошибка ${postError}</h1>
            }
            {isPostLoading
                ?
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}><Loader /></div>
                :
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов:" />}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
            {/* <Counter />
      <ClassCounter /> */}
        </div>
    );
}

export default Posts;
