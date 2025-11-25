import { chain } from "./chain.ts";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    };

    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (req.method === "POST" && new URL(req.url).pathname === "/chat") {
      try {
        const { question } = await req.json();
        console.log("받은 질문:", question);

        const response = await chain.invoke({ question });
        console.log("생성된 응답:", response);

        return new Response(
          JSON.stringify({ answer: response }),
          { headers }
        );
      } catch (error) {
        console.error("에러 발생:", error);
        return new Response(
          JSON.stringify({ error: "Internal Server Error" }),
          { status: 500, headers }
        );
      }
    }

    return new Response("Not Found", { status: 404, headers });
  },
});

console.log(`Server running at http://localhost:${server.port}`);