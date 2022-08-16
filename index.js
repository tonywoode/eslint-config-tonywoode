module.exports = {
  rules: {
    'no-unused-expressions': 0,
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'brace-style': ['error',
      '1tbs', {
        allowSingleLine: true
      }],
    semi: ['error', 'never'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }]
  }

}
