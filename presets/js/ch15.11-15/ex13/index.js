document.addEventListener("DOMContentLoaded", () => {
  const messagesDiv = document.getElementById("messages");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", async () => {
    const message = userInput.value.trim();
    if (!message) return;

    displayMessage("user", message);
    userInput.value = "";

    try {
      const response = await fetch("http://localhost:11434/v1/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gemma:2b",
          prompt: message,
          stream: true,
        }),
      });

      if (response.ok) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let botMessage = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // ストリームデータをデコード
          const decodedChunk = decoder.decode(value, { stream: true });
          const lines = decodedChunk
            .split("\n")
            .filter((line) => line.trim().startsWith("data:"));

          for (const line of lines) {
            const jsonStr = line.replace("data: ", "").trim();
            if (jsonStr === "[DONE]") continue;

            try {
              const jsonData = JSON.parse(jsonStr);
              const text = jsonData.choices[0].text;
              botMessage += text;
              displayMessage("bot", botMessage, true);
            } catch (error) {
              console.error("JSONパースエラー:", error);
            }
          }
        }
      } else {
        displayMessage("bot", "エラーが発生しました。");
      }
    } catch (error) {
      displayMessage("bot", "接続エラー: " + error.message);
    }
  });

  function displayMessage(sender, text, replace = false) {
    if (
      replace &&
      messagesDiv.lastChild &&
      messagesDiv.lastChild.classList.contains(sender)
    ) {
      messagesDiv.lastChild.textContent = text;
    } else {
      const messageDiv = document.createElement("div");
      messageDiv.className = sender;
      messageDiv.textContent = text;
      messagesDiv.appendChild(messageDiv);
    }
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});
