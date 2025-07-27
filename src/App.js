import React from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;