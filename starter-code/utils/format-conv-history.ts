export function formatConvHistory(message: any) {
  return message.map((
           message: any,
           i: any,
         ) => {
           if (i % 2 === 0) {
             return `Human : ${message}`;
           } else {
             return `AI : ${message}`;
           }
         })
         .join("\n");
}