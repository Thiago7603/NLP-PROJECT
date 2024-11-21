const { NlpManager } = require('node-nlp');

class ChatNLP {
  constructor() {
    this.manager = new NlpManager({ languages: ['en'], forceNER: true });
    this.initializeTraining();
  }

  async initializeTraining() {
    // Add greetings
    this.manager.addDocument('en', 'hello', 'greetings');
    this.manager.addDocument('en', 'hi', 'greetings');
    this.manager.addDocument('en', 'hey', 'greetings');
    this.manager.addAnswer('en', 'greetings', 'Hello! How can I help you today?');

    // Add farewells
    this.manager.addDocument('en', 'goodbye', 'farewell');
    this.manager.addDocument('en', 'bye', 'farewell');
    this.manager.addDocument('en', 'see you', 'farewell');
    this.manager.addAnswer('en', 'farewell', 'Goodbye! Have a great day!');

    // Add help responses
    this.manager.addDocument('en', 'help', 'help');
    this.manager.addDocument('en', 'what can you do', 'help');
    this.manager.addDocument('en', 'how does this work', 'help');
    this.manager.addAnswer('en', 'help', 'I can help you with basic conversations. Try asking me questions or just chat with me!');

    await this.manager.train();
  }

  async process(text) {
    const response = await this.manager.process('en', text);
    return response.answer || "I'm not sure how to respond to that. Could you rephrase your message?";
  }
}

module.exports = ChatNLP;
