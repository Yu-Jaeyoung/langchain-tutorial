import { chain } from "./chain.ts";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (req.method === "POST" && new URL(req.url).pathname === "/chat") {
      const { question } = await req.json();
      const response = await chain.invoke({ question });
      return Response.json({ answer: response });
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);