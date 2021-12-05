// Generates readme template
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](https://img.shields.io/badge/License-${data.license}-yellow.svg)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ![caption](./utils/demonstration.webm)
  or visit the link to project demonstration video: https://watch.screencastify.com/v/WItwcDM9MKkGeq0kfUrY
  ## License 
   The licence used for this project is ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions about this application please feel free to email me at ${data.email}. If you would like to see more of my projects please visit https://github.com/${data.github}.
`;
}


//Allows you to use the markdown file in the index file
module.exports = generateMarkdown;