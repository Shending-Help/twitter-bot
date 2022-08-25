import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToJokes = path.join(__dirname, "../data/jokes.json");
const rawData = fs.readFileSync(pathToJokes.replace(/\\/g, "/"));
const jokes = JSON.parse(rawData);

const getJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  console.log(jokes[randomIndex].title + "\n" + jokes[randomIndex].body);
  return jokes[randomIndex];
};

getJoke();

export default getJoke;
