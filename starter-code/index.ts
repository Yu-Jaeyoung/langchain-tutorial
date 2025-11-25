import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

// document.addEventListener("submit", (e) => {
//   e.preventDefault();
//   progressConversation();
// });

const openAIApiKey = process.env.OPENAI_API_KEY;

const embeddings = new OpenAIEmbeddings({ openAIApiKey });
const sbApiKey = process.env.SUPABASE_API_KEY || "undefined";
const sbUrl = process.env.SUPABASE_PROJECT_LC_TUTOR_URL || "undefined";
const client = createClient(sbUrl, sbApiKey);

const vectorStore = new SupabaseVectorStore(embeddings, {
  client,
  tableName: "documents",
  queryName: "match_documents",
});

const retriever = vectorStore.asRetriever();

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  openAIApiKey,
});

/**
 * Challenge:
 * 1. Create a prompt to turn a user's question into a
 *    standalone question. (Hint: the AI understands
 *    the concept of a standalone question. You don't
 *    need to explain it, just ask for it.)
 * 2. Create a chain with the prompt and the model.
 * 3. Invoke the chain remembering to pass in a question.
 * 4. Log out the response.
 * **/

// A string holding the phrasing of the prompt
const standaloneQuestionTemplate = `Given a question, convert it to a standalone question.
question: {question} standalone question:
`;
// A prompt created using PromptTemplate and the fromTemplate method
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

// Take the standaloneQuestionPrompt and PIPE the model
const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm);

const response = await standaloneQuestionChain.invoke({
  question: "What is Jaeyoung's strength in technical skills?",
});

const response2 = await retriever.invoke("What is Jaeyoung's strength in technical skills?");

console.log(response);
console.log(response2);

async function progressConversation() {
  const userInput = document.getElementById("user-input") as HTMLInputElement | null;
  if (!userInput) return;

  const chatbotConversation = document.getElementById("chatbot-conversation-container") as HTMLElement;
  const question = userInput.value;
  userInput.value = "";

  // add human message
  const newHumanSpeechBubble = document.createElement("div");
  newHumanSpeechBubble.classList.add("speech", "speech-human");
  chatbotConversation.appendChild(newHumanSpeechBubble);
  newHumanSpeechBubble.textContent = question;
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;

  // OpenAI API Call
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openAIApiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [ { role: "user", content: question } ],
    }),
  });

  const data = await response.json();
  const result = data.choices[0].message.content;

  // add AI Message
  const newAiSpeechBubble = document.createElement("div");
  newAiSpeechBubble.classList.add("speech", "speech-ai");
  chatbotConversation.appendChild(newAiSpeechBubble);
  newAiSpeechBubble.textContent = result;
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}