import chalk from "chalk";
import https from "https";

console.log(chalk.green('If this text is green, chalk is working!'));
const getJoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {   // getting the data and store in data var
            data += chunk;
        });
        response.on("end", () => {
            const joke = JSON.parse(data);  // data is in json form so that parsed
            console.log(`Here is a random ${joke.type} joke: `);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        })
        response.on("error", (err) => {
            console.log(`Error fetching the joke ${err.message}` );
        })

    })
}
getJoke()