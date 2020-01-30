# Project Overview


## Project Description

Our project idea was to created a [Goodreads](https://www.goodreads.com/) clone.  So we created an app called Great-Reads that has some of the same functionality as Goodreads.  The app opens to the main page where we have all the books.  A user can view each book details on the main page.  They can also create, delete, and update the books.  On the Author page you can view all the books but a certain author and add authors.


## Project Links

- [front end repo](https://github.com/viviRbi/Great-reads)
- [deployment](https://greatreads.netlify.com/)
- [back end repo](https://github.com/allenjosephs/Great-reads-backend)


## Wireframes


- [wire frame](https://github.com/viviRbi/Great-reads/blob/master/plan/pr3_main.png)

- [react architecture](https://github.com/viviRbi/Great-reads/blob/master/plan/component.jpg)


#### MVP
-Books
    -See all books
    -Add new book
    -View book details
    -Delete book
-Author
    -View all authors
    -Add new author
-Testing




#### PostMVP EXAMPLE

- Local Storage for favorite books
- User log in
    -favorite books
    -Want to read books
    -Currently Reading books
    -Already read books
-Book rating
-Advanced book search

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |
| App | This will make the initial data pull, include React Router, state|
| Header | This will render the header include the nav & top image |
| Main | This will render the main section |
| Search | This will render the search bar |
| Result | This will render the resutls |
| Footer | This will render the header include the footer info |



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
const newBook = {
      _id: newId,
      title: newTitle,
      coverImgURL: newUrl,
      author: newAuthor
    }
    if (!idArr.includes(newBook._id)) {
      savedBookId.push(newBook)
    }
    this.setState({ savedBookId })
    localStorage.setItem('savedBookId', JSON.stringify(savedBookId))
```
```
  removeHandle = (e) => {
    const newFetchId = this.state.savedBook.concat()
    const removedIndex = e.target.attributes.getNamedItem('index').value
    newFetchId.splice(removedIndex, 1)
    localStorage.setItem('savedBookId', JSON.stringify(newFetchId))
    this.setState({ savedBook: newFetchId })
  }
```

## Issues and Resolutions


#### SAMPLE.....
**ERROR**:
**RESOLUTION**:








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
