# Parcel React Boilerplate

A simple boilerplate to quickly start a front-end React application using Parcel to bundle, watch and compile.

Linting, commands and compilation work out of the box with minimal configuration needed. Basic linting rules and Babel configuration allows for the latest React coding best practices.

Uses:
- ESLint
- Stylelint
- Prettier
- Husky / Lint-staged
- Babel
- Autoprefixer
- Jeet
- Include Media

This boilerplate includes helper classes, variables and mixins for grid, colors, spacing, media queries and typography.

## Usage

🔽 **Clone repo**

```
git clone https://github.com/nath-green/parcel-react-boilerplate.git
```

🏄‍ **Install dependencies**

```
yarn install
```

🚀 **Start local server**

```js
yarn start

// Server running at http://localhost:1234
```

## Commands

| Command      | Description                                              |
| ------------ | -------------------------------------------------------- |
| `yarn start` | Start the local dev server with hot module reload        |
| `yarn prod`  | Removes `./dist` folder and builds production ready code |
| `yarn lint`  | Lint both sass and js files                              |
| `yarn clean` | Remove `./dist` folder                                   |
| `git commit ...` | Runs relevant linters on pre-commit hook                                    |

## Structure

- HTML entry: `./src/index.html`
- JS entry: `./src/index.js`
- SCSS entry: `./src/styles/main.scss`
