import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { retriever } from "./utils/retriever.ts";
import { combineDocuments } from "./utils/combine-documents.ts";
import { formatConvHistory } from "./utils/format-conv-history.ts";

const openAIApiKey = process.env.OPENAI_API_KEY;
const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  openAIApiKey,
});

const standaloneQuestionTemplate =
  `Given some conversation history (if any) and a question,
  convert the question to a standalone question.
  conversation history: {conv_history}
  question: {question} 
  standalone question:
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
  You are a helpful and enthusiastic support bot who can answer 
  a given question based on the context provided and the conversation history. 
  Try to find the answer in the context.
  If the answer is not given in the context, find the answer in the conversation history if possible. 
  If you really don't know the answer, say "I'm sorry, I don't know the answer to that."
  And direct the questioner to email jaeyoung@wisoft.io. Don't try to make up an answer.
  Always speak as if you were chatting to a superior officer.
  context: {context}
  conversation history: {conv_history}
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
    conv_history: ({ original_input }) => original_input.conv_history,
  },
  answerChain,
]);

export { chain };