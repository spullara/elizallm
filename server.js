const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ElizaNode = require('elizanode');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// ElizaNode API endpoint
app.post('/v1/chat/completions', (req, res) => {
  const { messages } = req.body;
  
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages format' });
  }

  const eliza = new ElizaNode();
  let elizaResponse = '';

  // Process all user and system messages to build up Eliza's memory
  for (const message of messages) {
    if (message.role === 'user' || message.role === 'system') {
      elizaResponse = eliza.transform(message.content);
    }
  }

  const response = {
    id: 'chatcmpl-' + Math.random().toString(36).substr(2, 9),
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model: 'eliza-1',
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: elizaResponse,
        },
        finish_reason: 'stop',
      },
    ],
    usage: {
      prompt_tokens: messages.reduce((acc, msg) => acc + msg.content.split(' ').length, 0),
      completion_tokens: elizaResponse.split(' ').length,
      total_tokens: messages.reduce((acc, msg) => acc + msg.content.split(' ').length, 0) + elizaResponse.split(' ').length,
    },
  };

  res.json(response);
});

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`ElizaNode Server listening at on port ${port}`);
});
