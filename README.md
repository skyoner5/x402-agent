# 🤖 x402 Autonomous Payment Agent

> **Live Status:** [✅ Online & Functional](https://x402-agent-jkrv.vercel.app/)

### 🚀 Overview
This is an autonomous AI agent built for the x402 Hackathon. It is a serverless backend node that executes Solana transactions and manages payments automatically without human intervention.

### 🛠️ How It Works
1. **Endpoint:** The agent listens for 'Wurk' requests at `https://x402-agent-jkrv.vercel.app/api/webhook`.
2. **Logic:** It processes incoming tasks, validates them against the x402 protocol standards, and signs transactions.
3. **Blockchain:** All actions are settled on the Solana blockchain in real-time.

### 💸 Revenue Model
This agent is a "Worker" in the x402 ecosystem:
- **Service Fees:** Earns SOL/USDC for every automated task completed.
- **Autonomous Payouts:** Funds are sent directly to the agent's linked Solana wallet.

### 🔗 Technical Stack
- **Engine:** Node.js (Serverless)
- **Deployment:** Vercel
- **Blockchain:** Solana (Web3.js)
- **Protocol:** x402 SDK
