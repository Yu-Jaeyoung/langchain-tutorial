import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

try {
  const result = Bun.file("jaeyoung_info.txt");
  const text = await result.text();

  const splitter = new RecursiveCharacterTextSplitter();

  const output = await splitter.createDocuments([ text ]);
  console.info(output);

  const document = { ...output[0] };
  console.info(document.metadata);

  //{
  //   loc: {
  //     lines: {
  //       from: 1,
  //       to: 9,
  //     },
  //   },
  // }

} catch (err) {
  console.info(err);
}