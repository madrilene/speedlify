module.exports = {
  name: "lenesaile.com", // optional, falls back to object key
  description: "lighthouse para lenesaile.com",
  options: {
    frequency: 60 * 23, // 23 hours
    freshChrome: "site",
  },
  urls: [
    "https://www.lenesaile.com/",
    "https://www.lenesaile.com/en/",
    "https://www.lenesaile.com/en/about/",
    "https://www.lenesaile.com/en/services/",
    "https://www.lenesaile.com/en/projects/",
    "https://www.lenesaile.com/en/blog/",
    "https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file/",
  ],
};
