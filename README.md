# Pastor Line Test Task

This repository contains the solution for the Pastor Line test task.

## Table of Contents

- [Introduction](#introduction)
- [Code Structure](#code-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

## Introduction

Welcome to the Pastor Line Test Task repository! This project serves as the solution to a test task related to Pastor Line. Below, you'll find information about its code structure, prerequisites, and how to set up the development environment.

## Code Structure

The project is organized as follows:

- `/src`: Contains the main source code.
  - `/api`: Contains API related functions and Axios configuration.
    - `/config`: Configuration files for the API endpoints.
    - `/request`: Functions for making API requests.
    - `/routing`: Routing configuration for API endpoints.
    - `/sdk`: Software Development Kit (SDK) for interacting with external services.
  - `/app`: Contains application-related code.
    - `/assets`: Stores assets such as images, fonts, and styles.
    - `/components`: Contains reusable React components used throughout the project.
    - `/duck`: Organizes Redux-related code using the "duck" pattern.
    - `/pages`: Individual application pages or views.
    - `/routing`: Handles client-side routing and navigation.
    - `/store`: Redux store setup and reducer management.
- `index.js`: The entry point of the application, where the React app is initialized.

This structure provides a clear separation of concerns and allows for easy navigation and maintenance of the project components and functionality.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 16)
- npm or Yarn

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:** 
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to clone the project.
   - Run the following commands to clone the repository and switch to the `/feature/react-dev-test` branch:

     ```bash
     git clone https://github.com/Sachintlgt/Pastors-line-react-developer-test.git
     cd pastor-line-test-task
     git checkout feature/react-dev-test
     ```
## Environment Setup

To configure the project's environment, follow these steps:

1. Create a file named `.env` in the root directory of the project if it doesn't already exist.

2. Open the `.env` file using a text editor.

3. Add the following line to the `.env` file to set the API URL: `REACT_APP_API_URL="https://api.dev.pastorsline.com/api"`

Ensure there are no spaces or extra characters in this line.

4. Save the `.env` file.

Now, your environment is set up with the specified API URL, and the application will use this URL for API requests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3080](http://localhost:3080) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, so you have full control over them.
All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.
At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved [here](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analyzing the Bundle Size

This section has moved [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Making a Progressive Web App

This section has moved [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Advanced Configuration

This section has moved [here](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Deployment

This section has moved [here](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` fails to minify

This section has moved [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).
