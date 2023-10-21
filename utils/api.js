const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
  params: {
    url: 'https://www.instagram.com/reel/CxgAOUUR8R6/',
  },
  headers: {
    'X-RapidAPI-Key': 'b144339594msh8119d314fd730e4p16ecb8jsn8275edf13c7f',
    'X-RapidAPI-Host':
      'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
