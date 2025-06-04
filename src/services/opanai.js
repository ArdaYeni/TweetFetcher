export async function analyzeWithChatGPT(tweetContent) {
    console.log('Loaded OpenAI key:', process.env.REACT_APP_OPENAI_API_KEY);

  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const prompt = `Analyze the following tweet content and return:\n\n1. A 1-sentence summary of the tweet.\n2. The sentiment (positive, neutral, or negative).\n\nTweet: "${tweetContent}"`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for summarizing tweets and detecting sentiment.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  console.log('OpenAI Response:', data);

  // Defensive check for errors
  if (!data.choices || !data.choices[0]) {
    return {
      summary: 'Error: Could not generate summary.',
      sentiment: 'neutral',
    };
  }

  const result = data.choices[0].message.content;

  const summaryMatch = result.match(/1\.\s*(.*?)\s*2\./s);
  const sentimentMatch = result.match(/2\.\s*(.*)/s);

  return {
    summary: summaryMatch ? summaryMatch[1].trim() : 'Summary not found.',
    sentiment: sentimentMatch ? sentimentMatch[1].trim().toLowerCase() : 'neutral',
  };
}
