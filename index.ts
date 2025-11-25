import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

try {
  const result = Bun.file("jaeyoung_info.txt");
  const text = await result.text();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    separators: [ "\n\n", "\n", " ", "","-- " ],
    chunkOverlap: 50,
  });

  const output = await splitter.createDocuments([ text ]);
  console.info(output);
} catch (err) {
  console.info(err);
}