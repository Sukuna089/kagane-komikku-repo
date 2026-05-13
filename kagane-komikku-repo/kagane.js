class KaganeSource {
  constructor() {
    this.name = "Kagane";
    this.baseUrl = "https://kagane.org";
    this.lang = "en";
  }

  async getPopularManga() {
    const response = await fetch(`${this.baseUrl}`);
    const html = await response.text();

    return {
      mangas: [],
      hasNextPage: false
    };
  }

  async searchManga(query) {
    return {
      mangas: [],
      hasNextPage: false
    };
  }

  async getMangaDetails(url) {
    return {
      title: "Kagane Manga",
      author: "Unknown",
      artist: "Unknown",
      description: "Imported from Kagane.org",
      status: "ONGOING"
    };
  }
}

module.exports = KaganeSource;
