module.exports = {
  testRegex: '.*\\.test.(ts|tsx|js)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest'
  },
  collectCoverage: true
};
