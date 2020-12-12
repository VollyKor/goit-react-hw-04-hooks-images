const axios = require('axios');

const request = {
  apiKey: '18765895-18a10ce9a19270e66dddd4391',
  page: 1,

  getImgs(search = '', page = '1') {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${this.apiKey}`;
    return axios
      .get(url)
      .then(data => data)
      .catch(error => {
        throw error;
      });
  },

  reset() {
    this.page = 1;
  },

  pageIncrement() {
    return (this.page += 1);
  },

  getNextPageImgs(query) {
    this.pageIncrement();
    return this.getImgs(query, this.page);
  },
};

export default request;
