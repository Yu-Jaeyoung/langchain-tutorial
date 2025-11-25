// index.ts
document.addEventListener("submit", (e) => {
  e.preventDefault();
  progressConversation();
});
async function progressConversation() {
  const userInput = document.getElementById("user-input");
  const chatbotConversation = document.getElementById("chatbot-conversation-container");
  const question = userInput.value;
  userInput.value = "";
  const newHumanSpeechBubble = document.createElement("div");
  newHumanSpeechBubble.classList.add("speech", "speech-human");
  newHumanSpeechBubble.textContent = question;
  chatbotConversation.appendChild(newHumanSpeechBubble);
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
  try {
    console.log("요청 보내기:", question);
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });
    console.log("응답 상태:", response.status);
    console.log("응답 헤더:", response.headers);
    const data = await response.json();
    console.log("응답 데이터:", data);
    const newAiSpeechBubble = document.createElement("div");
    newAiSpeechBubble.classList.add("speech", "speech-ai");
    newAiSpeechBubble.textContent = data.answer;
    chatbotConversation.appendChild(newAiSpeechBubble);
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
  } catch (error) {
    console.error("에러 발생:", error);
    const errorBubble = document.createElement("div");
    errorBubble.classList.add("speech", "speech-ai");
    errorBubble.textContent = "죄송합니다. 오류가 발생했습니다.";
    chatbotConversation.appendChild(errorBubble);
  }
}
