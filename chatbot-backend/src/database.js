require('dotenv').config();
const { Pinecone } = require('@pinecone-database/pinecone'); // Pinecone

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});
const index = pc.index('datos');