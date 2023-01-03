# webpack-cli-repro-babel

> Minimal Webpack CLI 5 bug reproduction: https://github.com/webpack/webpack-cli/issues/3559

## Build

```sh
npm install && npm run build
```

Gives:

> SyntaxError: Unexpected token 'export'

Note that when replacing Webpack CLI version in `package.json`:

```diff
- "webpack-cli": "^5.0.1"
+ "webpack-cli": "^4.10.0"
```

And re-installing, the build works fine!