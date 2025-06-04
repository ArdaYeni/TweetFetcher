import React, { useState } from 'react';
import { sendToAirtable } from '../services/airtable';
import { analyzeWithChatGPT } from '../services/opanai';



function TweetForm() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

const extractTweetDetails = (url) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(twitter\.com|x\.com)\/([^\/]+)\/status\/(\d+)/);
const username = match ? `@${match[2]}` : '@unknown';
const tweetId = match ? match[3] : 'unknown';

 return {
  username,
  content: `This is a placeholder tweet content from ${username}. (Tweet ID: ${tweetId})`,
  timestamp: new Date().toISOString(),
};

};



  const analyzeTweet = (content) => {
    // Simulate basic sentiment and summary analysis
    const lower = content.toLowerCase();
    let sentiment = 'neutral';
    if (lower.includes('good') || lower.includes('great') || lower.includes('amazing') || lower.includes('⚡')) {
      sentiment = 'positive';
    } else if (lower.includes('bad') || lower.includes('hate') || lower.includes('terrible')) {
      sentiment = 'negative';
    }
    const summary = content.length > 50 ? content.substring(0, 50) + '...' : content;
    return { summary, sentiment };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tweet = extractTweetDetails(url);

    const analysis = await analyzeWithChatGPT(tweet.content); // calls OpenAI

    

    await sendToAirtable({
      Username: tweet.username,
      'Tweet Content': tweet.content,
      Sentiment: analysis.sentiment,
      Summary: analysis.summary,
      Timestamp: tweet.timestamp,
    });

    setStatus('Tweet analyzed and saved!');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste Tweet URL here"
        className="input"
        required
      />
      <button type="submit" className="button">
        Analyze Tweet
      </button>
      {status && <p className="status">{status}</p>}
    </form>
  );
}
export default TweetForm;
