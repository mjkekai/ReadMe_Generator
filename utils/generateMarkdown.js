// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Description](#description)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)

## Description 

${data.description}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Installation

${data.installation}

## Credits

${data.credits}

## License

${data.license}

`;
}

module.exports = generateMarkdown;