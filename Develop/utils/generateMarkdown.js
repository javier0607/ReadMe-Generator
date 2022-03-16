// TODO: Create a function that returns a license badge based on which license is passed in
// Checks to see if there is a License
function renderLicenseBadge(license) {
  if (license == "None") {
    return ""
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// Another check for a license
function renderLicenseLink(license) {
  if (license == "None") {
    return ""
  } else {
    return `- [license](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// The alast check for no license
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  } else {
    return `  
    ## License
    This application uses the ${license} license.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # <h1 align="center">${answers.title}</h1>
  ${renderLicenseBadge(answers.license)}
  ## Table of Contents
  - [Description](#description)
  - [gitUserName](#gitUserName)
  ${renderLicenseLink(answers.license)}
  - [Email](#email)
  ${renderLicenseSection(answers.license)}
  ## Description
    ${answers.description}
  <br />
  ## Questions
  Find me on GitHub: ${answers.gitUserName}
  Email me at: ${answers.email}
`
}

module.exports = generateMarkdown;