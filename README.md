<h1 align="center">
<br>
  <a href="https://github.dxc.com/ay7/dtc-react-reusable-component"><img src="https://i.imgur.com/GpQk5wG.png" alt="React Reusable Components" width=128"></a>
<br>
<br>
React Reusable Components
</h1>


<hr />

## Introduction

This repository contains reusable components which can be used for your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.


## Features

This reusable components features all the latest tools and practices in the industry.

- ⚛ **React** — 16.7.0-alpha.0 with Hooks
- ♻ **Redux with Redux Thunk** — State Management with middleware to handle async requests
- 🛠 **Babel** — ES6 syntax, Airbnb & React/Recommended config
- 🚀 **Webpack**  — Hot Reloading, Code Splitting, Optimized Build
- 💅 **CSS** — Styled Components
- ✅  **Tests** — Jest, React Testing Library & Cypress
- 💖  **Lint** — ESlint
- 🐶  **Husky** — Prevent bad commits

## Getting started

1. Clone this repo
2. Move to the appropriate directory: `cd dtc-react-reusable-component`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at ` http://localhost:3000`.

## Steps to Use Reusable Components

1. Clone- https://github.dxc.com/ay7/dtc-react-reusable-component
2. Add the component in the shared folder with the naming convention "dtc-yourComponent" example- dtc-pickTable
3. Create a navigation entry in Navigation Bar as below:
    eg: React-Table
    < NavLink as={Link} exact activeClassName="navbar__link--active" className="navbar__link" to="/React-table">React Table </ NavLink>
4. Add routing to the components 
    eg: React-Table routing
   < Route exact path='/react-table' component={EnhancedTableIndex}></ Route>
5. Create a branch , test the code and merge it. 


## Commands

- `npm start` - start the dev server
- `npm run build` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm run lint:fix` - execute an eslint and fix the errors
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run test:cover` - coverage mode


## License
PremBalaji    
