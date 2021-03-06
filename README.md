# Project: book-track-react - [Mohamed Ismail]

# Description
  
  ### First open [Book Track App](https://book-track-app.herokuapp.com/) to discover, how app works .
  - Simply , It acts as a single page application using ReactJs .
  - the wep App act as  a `Bookshelf App` that allows users to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as you interact with the application.
  

  #### How  components do interact with each other:

```
APP.js
│     
│
└───BookShelf ( stateless function)
│   │  
│   └─── MyReads.js ( stateless function)
│          │        
│          └───  Book.js
│     
└───  Search.js   
        │
        └───  Book.js
    
 ``` 

# Required Libraries and Dependencies
   - Create React App : run `npm install -g create-react-app`
   - React Regular Expression : run `npm install --save escape-string-regexp`
   - React Router : run `npm install --save react-router-dom`
   - React Rating : run `npm install --save react-star-rating-component`

# How to Run Project 
   1.  Download all Project files
   2.  Run `yarn install` [yarn](https://yarnpkg.com/en/) is preferred package for ReactJs or `npm install` to install all required dependancies &packages .
   3.  Run `yarn start`  or `npm start` 
   3.  open browser [MyReads App](http://localhost:3000/)
   4.  Use the serach terms which are in `SEARCH_TERMS.md`
 
# Miscellaneous
  - ESlint rules are implemented .
  - Implement on Amazon AWS Cloud or on Github pages 



# Resources
 
   1. [React Library](https://facebook.github.io/react/)
   2. [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
   3. [Create React updates-Webpack2](https://facebook.github.io/react/blog/2017/05/18/whats-new-in-create-react-app.html)
   4. [React Form and select element](https://facebook.github.io/react/docs/forms.html)
   5. [Short-circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation)
   6. [React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
   7. [Using a function in `setState` instead of an object](https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)
   8. [Eslint Rules](http://eslint.org/)
   9. [Heroku Cloud](https://devcenter.heroku.com/)
