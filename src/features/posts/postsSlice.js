import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// api address
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch data
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data; // data từ api
});

// thunk để thêm bài viết mới
export const addNewPost = createAsyncThunk('posts/addNewPost', async (newPost) => {
  const response = await axios.post(POSTS_URL, newPost);
  return response.data; // tạo post mới
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [], // list post
    status: 'idle', // state
  },
  reducers: {}, // extra reducers để xử lí actions
  extraReducers(builder) {
    builder
      // bắt đầu
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      // thành công
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; // cập nhật danh sách bài viết
      })
      //
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.list.unshift(action.payload); // thêm bài viết mới vào đầu danh sách
      });
  }
});

export default postsSlice.reducer;