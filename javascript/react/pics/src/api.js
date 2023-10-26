import axios from 'axios';

const searchImages = async (query) => {
  const resp = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID {SET_YOUR_KEY_HERE}'
    },
    params: {
      query
    }
  });
  return resp.data.results;
}

export {
  searchImages
}