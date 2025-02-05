class MediasApi {
  /**
   * @param {string} url
   */
  constructor (url) {
    this._url = url
  }

  async getMedias () {
    return fetch(this._url)
      .then(res => res.json())
      .then((data) => data.media)
      .catch(err => console.log('an error occurs', err))
  }

  async getPhotographers () {
    return fetch(this._url)
      .then(res => res.json())
      .then((data) => data.photographers)
      .catch(err => console.log('an error occurs', err))
  }
}
