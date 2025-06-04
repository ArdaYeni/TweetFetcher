import React from 'react';
import TweetForm from './components/TweetForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">AI Tweet Analyzer</h1>
      <TweetForm />
    </div>
  );
}

export default App;