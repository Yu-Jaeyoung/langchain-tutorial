// index.ts
document.addEventListener("submit", (e) => {
  e.preventDefault();
  progressConversation();
});
async function progressConversation() {
  const userInput = document.getElementById("user-input");
  if (!userInput)
    return;
  const chatbotConversation = document.getElementById("chatbot-conversation-container");
  const question = userInput.value;
  userInput.value = "";
  const newHumanSpeechBubble = document.createElement("div");
  newHumanSpeechBubble.classList.add("speech", "speech-human");
  chatbotConversation.appendChild(newHumanSpeechBubble);
  newHumanSpeechBubble.textContent = question;
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });
  const data = await response.json();
  const newAiSpeechBubble = document.createElement("div");
  newAiSpeechBubble.classList.add("speech", "speech-ai");
  newAiSpeechBubble.textContent = data.answer;
  chatbotConversation.appendChild(newAiSpeechBubble);
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}
