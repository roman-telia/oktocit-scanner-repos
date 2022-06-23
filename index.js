// Octokit.js
// https://github.com/octokit/core.js#readme
require("dotenv").config();
const { Octokit, App } = require("octokit");

const octokit = new Octokit({
  auth: process.env.OCTOKIT_TOKEN,
});

async function fetchRepos() {
  const response = await octokit.request(
    "GET /search/repositories?q=@teliads/components+filename%3Apackage.json&type=Code",
    {}
  );
  console.log(response);
}
fetchRepos();
