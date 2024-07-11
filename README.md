# ElizaNode Chat Application

This project is a full-stack application that implements a chat interface for interacting with ELIZA, a JavaScript implementation of the classic ELIZA chatbot. The application uses a React frontend and an Express.js backend that provides an OpenAI-compatible API for ELIZA.

## Features

- Chat interface for interacting with ELIZA
- React-based frontend with Tailwind CSS for styling
- Express.js backend serving both the API and the React app
- OpenAI-compatible API for easy integration and potential future expansion

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 12.0 or later) and npm
- You have a basic understanding of React and Express.js

## Installation and Setup

Follow these steps to get your development environment set up:

1. Clone the repository:
   ```
   git clone https://github.com/spullara/elizallm
   cd elizallm
   ```

2. Install server dependencies:
   ```
   npm install
   ```

3. Navigate to the client directory and install frontend dependencies:
   ```
   cd client
   npm install
   ```

4. Return to the root directory:
   ```
   cd ..
   ```

5. Create a production build of the React app:
   ```
   cd client
   npm run build
   cd ..
   ```

## Running the Application

To run the application in development mode:

1. Start the Express server:
   ```
   node server.js
   ```

2. In a new terminal, start the React development server:
   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

To run the application in production mode:

1. Ensure you have built the React app (step 5 in Installation and Setup)
2. Start the Express server:
   ```
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the application is running:

1. You'll see a chat interface in your browser.
2. Type your message in the input field at the bottom of the screen.
3. Press Enter or click the Send button to send your message.
4. ElizaNode will process your message and respond, simulating a conversation.

## API Usage

The backend provides an OpenAI-compatible API endpoint at `/v1/chat/completions`. You can make POST requests to this endpoint with the following structure:

```json
{
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello, how are you?"}
  ]
}
```

The API will respond with ElizaNode's reply in a format similar to OpenAI's API.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact the maintainer of this project, please email [your-email@example.com].

## Acknowledgements

- [ElizaNode](https://www.npmjs.com/package/elizanode) - The NPM package this project is based on.
- [Create React App](https://create-react-app.dev/) - Used to bootstrap the React application.
- [Express.js](https://expressjs.com/) - The web application framework used for the backend.
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework used for styling.

