const redis = require("./redisClient");

async function queryNews(question) {
  const cached = await redis.get(question);
  if (cached) {
    return cached;
  }

  const newsContext = [
    "India is rapidly investing in Artificial Intelligence research.",
    "Tech startups are focusing on scalable backend systems."
  ];

  const answer =
    "Based on recent news: " +
    newsContext.join(" ") +
    " | Answer generated for question: " +
    question;

  await redis.set(question, answer);
  return answer;
}

module.exports = { queryNews };
