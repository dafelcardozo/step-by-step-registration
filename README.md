<h1 align="center">Thank you for landing at this page!</h1>

## Description

This is the code repository of my 'step-by-step game subscription app', a test prototype built as my solution for the 'Frontend Test Challenge' by Conserva. You may see it here:
http://david-felipe-cardozo.com.co/ .

## Deployment environment

### On the cloud

This app is deployed at Vercel, a cloud platform that specializes in Next.js and React applications. It internally uses GCP VMs.

A continous deployment pipeline of both Vercel and Github was configured for this app.

### On a local dev machine

- Install [PNpM](https://pnpm.io/), the packaging and distribution management library. The app is strongly dependent on it, and therefore is the major requisite.
- Git-fetch this repo, and run `pnpm install`.
- Run the app with `pnpm run dev`, the default port is 3000.  

## Tech stack & components

The app was initiated from a template on https://precedent.dev by Steven Tey ([@steventey](https://twitter.com/steventey)).

### Frameworks

- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that extends JavaScript. 
- [React.js](https://react.dev/) - A Javascript & Typescript to build user interfaces out of individual pieces called components.
- [Redux](https://redux.js.org/) -A Predictable State Container for JS Apps
- [Next.js](https://nextjs.org/) – A React + Node framework for building performant fullstack apps with the best developer experience.
- [Material UI](https://mui.com/material-ui/getting-started/) - A beautiful design Material UI that features a lot of React components to build a nice user interface.
- [Vercel](https://vercel.com/) – A deployment platform for Next.js and React applications

### Components

The app uses a single page model, that contains the following components:

- The app frame container, with two variants for mobile and desktop displays.
- The navigation buttons bar.
- the personal info form, the 'select a plan' step, the 'pick add-ons' step,  the summary and thank you steps.
- the current steps navigation bar, in two variants: as a sidebar on desktop displays or as a 'horizontal stack' anchored to the top of the screen on mobile screens.
- the Redux store and its different 'slices': add-ons, navigation, personal info and plan.