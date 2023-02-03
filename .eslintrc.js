module.exports = {
  plugins: ['jsx-a11y', 'risxss', 'prefer-arrow', 'unused-imports'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/strict',
  ],
  rules: {
    curly: ['error', 'all'],
    eqeqeq: ['error', 'smart'],
    complexity: ['error', 8],
    'max-lines': ['error', 200],
    'max-depth': ['error', 3],
    'max-params': ['error', 4],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    'prefer-const': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@bifrost /*/*'],
            message:
              'import of internal modules must be done at the root level.',
          },
        ],
        paths: [
          {
            name: 'lodash',
            message: 'Please use lodash/{module} import instead',
          },
          {
            name: '.',
            message: 'Please use explicit import file',
          },
        ],
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [{ pattern: '@bifrost/**', group: 'unknown' }],
        groups: [
          ['external', 'builtin'],
          'unknown',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-duplicates': 'error',
    'import/namespace': 'off',
    'import/no-anonymous-default-export': 'error',
    // Specific NextJS accessibility config
    // Not necessary with NextJS links
    'jsx-a11y/anchor-is-valid': 'off',
    // Add alt attributes to NextJS Images
    'jsx-a11y/alt-text': [
      2,
      {
        img: ['Image'],
      },
    ],
    'risxss/catch-potential-xss-react': 'error',
    'react/no-string-refs': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        '@typescript-eslint/prefer-optional-chain': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: true,
          },
        ],
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            minimumDescriptionLength: 10,
          },
        ],
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowNumber: true,
            allowBoolean: true,
          },
        ],
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              FC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              SFC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
              FunctionComponent:
                'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.FC':
                'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.SFC':
                'Use `const MyComponent = (props: Props): JSX.Element` instead',
              'React.FunctionComponent':
                'Use `const MyComponent = (props: Props): JSX.Element` instead',
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
};
