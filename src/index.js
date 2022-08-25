import client from "./twitterClient";
import getJoke from "./joker";

const tweet = async () => {
  const joke = await getJoke();
  const tweet = `${joke.title}\n${joke.body}`;
  await client.post("statuses/update", { status: tweet });
};

setInterval(tweet, 1000 * 60 * 60); // every hour
