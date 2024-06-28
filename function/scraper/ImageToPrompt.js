const { fetch } = require('node-fetch')

async function imgToPrompt(url) {
  try {
    const response = await fetch(url);
    const imageData = await response.buffer();
    const imageBase64 = Buffer.from(imageData).toString("base64");

    const payload = {
      consume_points: 1,
      image: imageBase64,
    };

    const headers = {
      "Content-Type": "application/json",
      Cookie:
        "_ga=GA1.1.1902043976.1711876868; _ga_WQ0WB7ZY96=GS1.1.1711876868.1.1.1711877146.0.0.0",
      Origin: "https://animegenius.live3d.io",
      Referer: "https://animegenius.live3d.io/",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTI5MTQyMTIsInN1YiI6Imdvb2dsZSAxNjEzMTIzIGdlbnR1cnN5MDJAZ21haWwuY29tIn0.niSNoUYnECi7nKdY9BObDHAt_EX-FsLcdhxfoUCWbbs",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    };

    const result = await fetch(
      "https://api.live3d.io/api/v1/generation/img2prompt",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      },
    );

    const responseData = await result.json();
    return responseData;
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    return null;
  }
}

module.exports = imgToPrompt
