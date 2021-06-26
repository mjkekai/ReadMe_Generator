// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your application: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this application usage for?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?",
    },
    {
      type: "list",
      name: "license",
      message: "license?",
      choices: ["MIT", "BSD3", "APACHE2.0", "GPL3.0"],
    },
    {
      type: "input",
      name: "installation",
      message: "How to install?",
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
      },
  ])
  .then((answers) => {
    console.log("answers: ", answers);
    fs.writeFileSync(
      path.join(__dirname, "README.md"),
      generateMarkdown(answers)
    );
  })
  .catch((err) => {
    console.log(err);
  });
