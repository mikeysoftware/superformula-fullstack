# Superformula - Fullstack Coding Challenge

> Applicant: Michael Cowan
> Role: Senior Frontend Engineer
> Email: mikey.software@gmail.com

## Demo

You can see the application live at [Demo](https://superforuma-fs-challenge.netlify.app/).

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm install`

Runs the npm command to install all project dependencies.\
**NOTE:** ".env" file was committed for ease of start-up.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run storybook`

Launches the Storybook component library runner in the interactive watch mode.\
Interactive components are displayed in their different states and variants.

## Project Structure

    ├── src                         # Source files
    │   ├── assets                  # Application Assets - Images, SVGs, Fonts.
    │   ├── components              # Application Components - Types, Stories, Tests.
    │   ├── graphql                 # GraphQL Schema - Types, Queries, Mutations, Subcriptions.
    │   ├── hooks                   # Custom React Hooks
    │   ├── providers               # Application Providers - Apollo, Styled Components, React Router.
    │   └── utils                   # Utiltity Functions - Parsers, Formatters, Getters, Setters.
    │   ├── views                   # Application Pages/Top Components
    │   └── index.tsx               # Appication Entry Point
    └── README.md

## Requirements Checklist

### Backend

###### Functionality

- [x] The API should follow typical GraphQL API design pattern
- [x] The data should be saved in the DB
- [x] Proper error handling should be used
- [x] Paginating and filtering (by name) users list

###### Basic Requirements

- [x] Use **AWS AppSync (preferred)** or AWS Lambda + API Gateway approach. (used [AppSync](https://aws.amazon.com/appsync/))
- [x] Use any AWS Database-as-a-Service persistence store. DynamoDB is preferred. (used [DynamoDB](https://aws.amazon.com/dynamodb/))
- [x] Write concise and clear commit messages
- [x] Write clear **documentation** on how it has been designed and how to run the code. (see)
- [x] Add a Query to fetch location information based off the user's address (used [Mapbox](https://www.mapbox.com/api-documentation/) APIs); used [AWS Lambda](https://aws.amazon.com/lambda/)

### Frontend

###### Functionality

- [x] The search functionality should perform real time filtering on client side data and API side data.
- [x] List of users should be updated automatically after single user is updated.
- [x] Create modal from scratch - please don't use any library for it.
- [x] Appear/Disappear of modal should be animated.
- [x] Infinite loading state should be saved in url query (pagination state should be present in URL query (eg ?page=1) to allow for behavior where the user can reload the page while still returning to their current scroll position).

###### Tech stack

- [x] JS oriented (Typescript preferred) (used [TypeScript](https://www.typescriptlang.org/))
- [x] Use **React**, **Angular** or **VUE** (used [React](https://reactjs.org/))
- [x] Use unsplash.com to show random avatar images (used [Unsplash Source](https://source.unsplash.com/))
- [x] You don't have to write configuration from scratch (used [Create React App](https://create-react-app.dev/))
- [x] Feel free to use a preprocessor like SASS/SCSS/Less or CSS in JS. (used [Styled Components](https://styled-components.com/))
- [ ] Provide E2E and unit tests (one component&view well tested is enough, no need to test every component/view) (used [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Cypress](https://www.cypress.io/))
- [x] Please **do not** use any additional libraries with predefined styles like `react-bootstrap`, `material-ui` etc.

###### Bonus (in order)

- [x] Write clear **documentation** on how the app was designed and how to run the code.
- [x] Providing an online demo is welcomed, but not required. (see Demo Link below)
- [x] Provide a description of how you approach mobile friendly apps (what do you use, how)
  > For making mobile friendly applications, I use a combination of Flexbox / Grid CSS and Media Queries for responsiveness.
  > Components are developed in a way that enables the mobile user. Example: Swipe/Gesture functionalities are enabled when in mobile view in comparison to Keyboard shortcuts when in Desktop view.
- [x] Write concise and clear commit messages.
- [x] Provide components in [Storybook](https://storybook.js.org) with tests.
  > See available scripts for launching storybook component library.
- [x] Include subtle animations to focus attention. (used [Framer Motion](https://www.framer.com/motion/))
- [x] Describe optimization opportunities when you conclude
- [x] Map with user location should update async - [x] when user changes "location" field (used [Mapbox](https://www.mapbox.com/))
- [x] Handle server errors
- [x] Handle loading states
- [x] Delete user functionality
