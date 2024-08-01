

# React ChatGPT Chatbot

## Overview

The React ChatGPT Chatbot is a web application built with React that integrates OpenAI's GPT-3.5 (or GPT-4) model to provide intelligent, conversational interactions. This chatbot allows users to interact with GPT in a chat-like interface, making it easy to integrate advanced AI capabilities into your web applications.

## Features

- **Interactive Chat Interface:** A user-friendly chat interface built with React.
- **OpenAI Integration:** Connects to OpenAI's API to generate responses using GPT-3.5 (or GPT-4).
- **Real-time Responses:** Provides real-time conversational capabilities.

## Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- An OpenAI API key.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/coopercodes/ReactChatGPTChatbot.git
   cd ReactChatGPTChatbot
   ```

2. **Install Dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory of the project and add your OpenAI API key:

   ```plaintext
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. **Start the Development Server:**

   Using npm:
   ```bash
   npm start
   ```

   Or using yarn:
   ```bash
   yarn start
   ```

   This will start the development server and open the application in your default browser.

2. **Interact with the Chatbot:**

   Open your browser and navigate to `http://localhost:3000` (or the port specified in your `.env` file). You can now interact with the chatbot by typing messages into the input field and receiving responses from GPT.

## API Integration

The chatbot interacts with the OpenAI API to fetch responses. The endpoint used for this is:

```http
POST https://api.openai.com/v1/engines/gpt-3.5-turbo/completions
```

Make sure you have the correct API key and that it is properly configured in your `.env` file.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/coopercodes/ReactChatGPTChatbot).

---
