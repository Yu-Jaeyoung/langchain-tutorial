import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { retriever } from "./utils/retriever.ts";
import { combineDocuments } from "./utils/combine-documents.ts";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";

document.addEventListener("submit", (e) => {
  e.preventDefault();
  progressConversation();
});

const openAIApiKey = process.env.OPENAI_API_KEY;
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  openAIApiKey,
});

const standaloneQuestionTemplate = `Given a question, convert it to a standalone question.
question: {question} standalone question:
`;

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate);

const standaloneQuestionChain = RunnableSequence.from([
  standaloneQuestionPrompt,
  llm,
  new StringOutputParser(),
]);

const retrieverChain = RunnableSequence.from([
  prevResult => prevResult.standalone_question,
  retriever,
  combineDocuments,
]);

const answerTemplate = `
  You are a helpful and enthusiastic support bot who can answer a given
  question about person, name "Jaeyoung" based on the context provided. Try to find the answer
  in the context. If you really don't know the answer, say "I'm sorry, I don't know the answer to that."
  And direct the questioner to email jaeyoung@wisoft.io. Don't try to make up an answer.
  Always speak as if you were chatting to a superior officer.
  context: {context}
  question: {question}
  answer:
`;

const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

const answerChain = RunnableSequence.from([
  answerPrompt,
  llm,
  new StringOutputParser(),
]);

const chain = RunnableSequence.from([
  {
    standalone_question: standaloneQuestionChain,
    original_input: new RunnablePassthrough(),
  },
  {
    context: retrieverChain,
    question: ({ original_input }) => original_input.question,
  },
  answerChain,
]);

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

  const response = await chain.invoke({
    question: question,
  });

  // add AI Message
  const newAiSpeechBubble = document.createElement("div");
  newAiSpeechBubble.classList.add("speech", "speech-ai");
  chatbotConversation.appendChild(newAiSpeechBubble);
  newAiSpeechBubble.textContent = response;
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}