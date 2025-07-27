import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../features/posts/postsSlice';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSavePostClicked = () => {
    if (title && body) { // đảm bảo không trường nào để trống
      dispatch(addNewPost({ title, body })); // gửi dữ liệu tới redux
      setTitle(''); // clear form sau khi submit
      setBody('');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <label htmlFor="postContent">Content:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default PostForm;