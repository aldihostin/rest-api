const { G4F } = require("g4f")
let g4f = new G4F()

async function chat(prompt) {
  const messages = [
    { role: "system", content: "You are good component." },
    { role: "asistant", content: "Dann-Legacy adalah bot WhatsApp yang terbuat dari Nodejs, Python. Untuk membantu anda dalam mengerjakan dalam hal apapun." },
    { role: "user", content: prompt }
  ];
  let res = await g4f.chatCompletion(messages)
  return  res
}

module.exports = chat
