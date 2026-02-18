import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
  try {
    const joke = await getJoke();
    console.log(joke);
    
    // Imposta l'output per GitHub Actions
    core.setOutput("joke", joke);
  } catch (error) {
    // Gestisce eventuali errori fallendo la action
    core.setFailed(`Action fallita: ${error.message}`);
  }
}

run();