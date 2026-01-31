# 🤖 x402 Autonomous Payment Agent

> **Live Status:** [✅ Online & Functional](https://x402-agent-xi.vercel.app/api/webhook)

### 🚀 What is this?
This is an autonomous AI agent built for the x402 Hackathon. It is designed to sit in the background and execute Solana transactions automatically when triggered by the x402 protocol.

### 🛠️ How It Works
1. **Trigger:** The agent listens for 'Wurk' requests at its Vercel endpoint.
2. **Logic:** It validates the request and prepares a Solana transaction using the x402 SDK.
3. **Execution:** Using a secure `PRIVATE_KEY` stored in Vercel environment variables, it signs and broadcasts the transaction to the Solana mainnet.

### 💸 Revenue Model (How I Get Paid)
This agent earns **SOL/USDC** for every task it completes. 
- **Direct Payments:** Payments are routed to the agent's wallet address.
- **Protocol Fees:** The agent collects a service fee for every successful autonomous execution.

### 🔗 Technical Stack
- **Engine:** Node.js (Serverless)
- **Deployment:** Vercel
- **Blockchain:** Solana (Web3.js)
- **Protocol:** x402
