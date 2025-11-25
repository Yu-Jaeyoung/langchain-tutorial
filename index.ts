import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";


try {
  const result = Bun.file("jaeyoung_info.txt");
  const text = await result.text();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    separators: [ "\n\n", "\n", " ", "", "-- " ],
    chunkOverlap: 50,
  });

  const output = await splitter.createDocuments([ text ]);

  const sbApiKey = process.env.SUPABASE_API_KEY || "undefined";
  const sbUrl = process.env.SUPABASE_PROJECT_LC_TUTOR_URL || "undefined";
  const openAIApiKey = process.env.OPENAI_API_KEY || "undefined";

  if (sbApiKey === "undefined" || sbUrl === "undefined" || openAIApiKey === "undefined") {
    throw new Error("undefined");
  }

  const client = createClient(sbUrl, sbApiKey);

  await SupabaseVectorStore.fromDocuments(
    output,
    new OpenAIEmbeddings({ openAIApiKey }),
    {
      client,
      tableName: "documents",
    },
  );

} catch (err) {
  console.info(err);
}