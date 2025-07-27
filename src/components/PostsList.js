import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch(); // gửi action tới redux
  const posts = useSelector((state) => state.posts.list); // lấy data từ redux store
  const postStatus = useSelector((state) => state.posts.status);

  // lấy data khi dữ liệu tải lần đầu
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  if (postStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default PostsList;