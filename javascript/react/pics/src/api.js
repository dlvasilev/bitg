import axios from 'axios';

const searchImages = async (query) => {
  const resp = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID e729e7665f936992a0626f347380eb07a3f33599e6eef60c8a4b1625883d0f37'
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