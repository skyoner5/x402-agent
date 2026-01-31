const express = require('express');
const { withPaymentInterceptor } = require('@x402/axios');
const axios = require('axios');
const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');

const app = express();
app.use(express.json());

// Your specific test key
const secretKey = bs58.decode("44BAv3dt47eZmQLBe411KHESau5xCH3sQMfCA6Yk6EMvEu7HZFXCgGhecwncShH5cxGUD3m8Vc7nKRFCRtdxZiVP");
const signer = Keypair.fromSecretKey(secretKey);

const x402Client = withPaymentInterceptor(axios.create(), {
  wallet: signer,
  network: 'solana-devnet'
});

// NEW: This lets you trigger it by just clicking a link!
app.get('/', (req, res) => {
  res.send(`
    <h1>x402 Agent Controller</h1>
    <button onclick="fetch('/webhook', {method:'POST'})">🚀 RUN AGENT NOW</button>
    <p>Tap the button to trigger the multi-resource workflow.</p>
  `);
});

app.post('/webhook', async (req, res) => {
  try {
    console.log("🤖 Agent Waking Up...");
    const stats = await x402Client.post('https://api.x402.jobs/open-facilitator/stats-solana', { symbol: 'SOL' });
    const post = await x402Client.post('https://api.x402.jobs/wurk/post', {
      text: `SOL Devnet Price: $${stats.data.price}. Autonomous payment success!`
    });
    console.log("✅ DONE!");
    res.status(200).send("Success");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.listen(8080);
      
