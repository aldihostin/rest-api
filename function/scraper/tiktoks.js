const axios = require("axios")

function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = tiktoks
