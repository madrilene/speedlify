module.exports = {
  name: "eleventy-excellent.netlify.app", // optional, falls back to object key
  description: "lighthouse para eleventy-excellent starter",
  options: {
    frequency: 60 * 23, // 23 hours
    freshChrome: "site",
  },
  urls: [
    "https://eleventy-excellent.netlify.app/",
    "https://eleventy-excellent.netlify.app/about/",
    "https://eleventy-excellent.netlify.app/blog/",
    "https://eleventy-excellent.netlify.app/blog/post-with-all-the-markdown/",
  ],
};
