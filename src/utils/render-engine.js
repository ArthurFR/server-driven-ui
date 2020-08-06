import fetchAsync from './fetch.js';

export default class RenderEngine {
  constructor(url) {
    this.url = url;
  }

  async createElments(url) {
    const data = fetchAsync(url);
    return data;
  }
}
