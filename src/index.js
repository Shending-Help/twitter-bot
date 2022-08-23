import Twitter from "twitter";
import { getTweets } from "./tweets";
import getJoke from "./joker";

getJoke();

const client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});
