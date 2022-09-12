# My Favourite Cars

Simple React App using Typescript Redux Styled Components and Airbnb style guide

[![wakatime](https://wakatime.com/badge/github/sergiogomes/my-favourite-cars.svg)](https://wakatime.com/badge/github/sergiogomes/my-favourite-cars)

![package version](https://img.shields.io/github/package-json/v/sergiogomes/my-favourite-cars/main?label=version&logo=npm)

![vercel](https://img.shields.io/github/deployments/sergiogomes/my-favourite-cars/production?label=vercel&logo=vercel&logoColor=white)

## Requiremets

- The app must use React;
- The app must use Typescript;
- The app must look good on any resolution mobile/desktop;
- Use any css-in-js solutions, styled-components is preferable;
- Use redux or react-context to state management;
- On the home page, we should be able to filter by name, edit and delete a car;
- On the New page, we should be able to submit only if the form is valid;
- The app must be exposed to any git repository that you can share with us, for
example on GitHub/GitLab

## Plus

- Show us some tests;
- Show us some Animations;
- Show us good patterns(SOLID, KISS, FLUX…);
- Show us a good folder architecture;
- Use some style guide.

## Pages

These are the pages we need

### Home

On the home page, we should be able to filter by name, edit and delete a car
![image](https://user-images.githubusercontent.com/5064727/189524308-569269b2-8311-48ed-8704-d4e7f8eb35c7.png)

### Add New Car

On the Add New Car page, we should be able to submit only if the form is valid
![image](https://user-images.githubusercontent.com/5064727/189524332-b6ebc406-4486-4f95-a8ca-41f392392731.png)

## Creation Steps

```bash
# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## References

### Folder structure

<https://javascript.plainenglish.io/how-to-structure-your-react-redux-app-83d523851137>

### Styled Components

<https://alanbsmith.medium.com/structuring-our-styled-components-part-i-2bf21fa64b28>
