## Introduction
This document presents the specifications for a Front-end React application and some guidelines to the development process.

N.B. There is not right way to approach the solution design, but personal and (hopefully) diverse solutions.
The will to understand the context, to critically elaborate the specifications and to explain creative choices will be rewarded.

## Study case
We want to build a React application that fetches data from an API, displays it as a series of user cards that will be presented nicely in the UI, and allows the user to save their "favorite" users using cookies.

### Initial setup and Project Configuration
Set up your development environment where user-cards are the name of your project. This command will create a new folder with your project name and set up the development environment within.

### React State Management
Manage the application state using React's useState hook. You will need to track the users fetched from the API and the favorite users saved.

### Using React Hooks
Primarily use two React hooks: useState and useEffect. useState lets you add state to your functional components, while useEffect lets you perform side effects (like fetching data) in your component.

### Using packages and node_modules
You might need to use external packages for certain functions, for instance, a package for handling cookies. To install a package, you can use npm (Node Package Manager), which is included with Node.js. All installed packages will be stored in the node_modules folder in your project.

### Managing Build Environments (dev, test, prod)
The command create-react-app includes pre-configured scripts for managing different environments. Decide what you think is the best method to handle environments in the most efficient way.

## Building the Application
Fetch data from API endpoint [random-data](https://random-data-api.com/api/users/random_user?size=10)
This returns the data of ten random users.

### Requirements:
- Each user must be represented by a "user card". 
- This card should display the user's basic information.
- When a card is hovered upon, it should flip to show more information about the user.
- Each card should have a button that allows the user to save that particular user to their "favorites". 
- The saved users should be stored in cookies so that the information persists even when the page is refreshed. 
- Saved users should always be shown first in the user list.
- At the bottom of the page, there should be a button that fetches another set of 10 random users from the API and updates the cards (excluding the cards of the users saved in the favorites).

### Hints
- Perform the fetch request inside a useEffect React hook.
- Create a custom component for the card, accepting a user JSON object as a prop. 
- Map through the data returned from the API and render each user using the custom component.
- Consider using the react-cookie library for handling cookies.
- For the card flip functionality, consider using CSS or a library like react-card-flip.
