const { withPaymentInterceptor } = require('@x402/axios');
const axios = require('axios');
const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');

// Vercel handles the "app" and "listen" for you automatically.
// We just export a function.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(200).send("Send a POST request!");

  try {
    const secretKey = bs58.decode(process.env.PRIVATE_KEY);
    const signer = Keypair.fromSecretKey(secretKey);

    const x402Client = withPaymentInterceptor(axios.create(), {
      wallet: signer,
      network: 'solana-devnet'
    });

    // Resource 1: Data
    const stats = await x402Client.post('https://api.x402.jobs/open-facilitator/stats-solana', { symbol: 'SOL' });

    // Resource 2: Post
    await x402Client.post('https://api.x402.jobs/wurk/post', {
      text: `Autonomous payment success! SOL is $${stats.data.price}.`
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err); // This will show up in your Vercel logs!
    res.status(500).json({ error: err.message });
  }
};
