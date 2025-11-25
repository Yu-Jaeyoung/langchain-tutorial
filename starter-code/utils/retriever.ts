import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

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

export { retriever };