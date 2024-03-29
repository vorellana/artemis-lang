import { cases } from "../../src/samples";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

function getHost() {
  return process.env.SHIP_URL || 'http://localhost:81';
}

function getApiKey() {
  return process.env.API_KEY || '';
}

function getFullPath() {
  return `${getHost()}/ship/evaluate`;
}

describe("functional tests for evaluate", () => {
  test.each(cases)("$name -> $output", async ({ input, output, name }) => {
    const path = getFullPath();
    console.log(name);
    const response = await axios.post(path, JSON.stringify(input), {
      headers: {
        "Content-Type": "application/json",
        'x-api-key': getApiKey(),
      },
    });

    expect(await response.data.result).toStrictEqual(output);
  });
});
