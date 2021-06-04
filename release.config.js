module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/karthickthankyou/zillow-refactor',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
}
