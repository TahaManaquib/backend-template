module.exports = {
  extends: ['@commitlint/cli', '@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^([A-Z]{2})-(feature|fix|docs|style|refactor|perf|test|chore|revert):\s(.+)$/,
      headerCorrespondence: ['scope', 'type', 'subject']
    }
  },
  rules: {
    'type-enum': [2, 'always', ['feature', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert']],
    'subject-case': [2, 'always', 'sentence-case'],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'upper-case'],
    'scope-max-length': [2, 'always', 2],
    'scope-min-length': [2, 'always', 2],

    'subject-max-length': [2, 'always', 100]
  }
}
