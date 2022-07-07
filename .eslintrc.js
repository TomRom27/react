module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        commonjs: true,
        es6:true,
        node:true,
        //jest:true,
    },
    parserOptions: {
        ecmaVersion:2020,
        requireConfigFile:false,
        babelOptions: {
            presets: ["@babel/preset-react"]
        },
        ecmaFeatures: {
            impliedStrict:true,
            jsx:true,
        },
        sourceType:'module',
    },
    plugins:['jest','react','react-hooks','prettier'],
    extends:['plugin:jest/recommended', 'eslint:recommended','plugin:react/recommended','plugin:react-hooks/recommended','prettier'],
    settings:{
        react: {
            version: 'detect'
        }
    },
    rules:{
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react/jsx-key': ['off'],
        'no-unused-vars': ['warn', { "varsIgnorePattern":"[iI]gnored" }],

    },

  };