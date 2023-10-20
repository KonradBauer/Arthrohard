# Arthrohard

## See [Demo](https://konradbauer.github.io/Arthrohard/)

Arthrohard is an online store that sells pet supplies. This app is to show off my programming skills. This application can be developed in the future with additional functionalities, such as adding products to the basket, connecting another API that will display images, or a user login function.

## Desktop view:

![example](https://github.com/KonradBauer/Arthrohard/blob/main/src/images/DesktopView.gif?raw=true)

## Mobile view: 

![example](https://github.com/KonradBauer/Arthrohard/blob/main/src/images/MobileView.gif?raw=true)

## Files Structure
```
└── root
    ├── public
    │   ├── dog.png
    │   ├── index.html
    │   ├── manifest.json
    │   ├── robots.txt
    │   └── sharenpng
    ├── src
    │   ├── components
    │   │   ├── Header
    │   │   │   ├── index.js
    │   │   │   └── styled.js
    │   │   ├── Ingredients
    │   │   │   ├── index.js
    │   │   │   └── styled.js
    │   │   ├── Main
    │   │   │   ├── index.js
    │   │   │   └── styled.js
    │   │   ├── Modal
    │   │   │   ├── index.js
    │   │   │   └── styled.js
    │   │   ├── ProducrPreview
    │   │   │   ├── index.js
    │   │   │   └── styled.js
    │   │   └── Products
    │   │       ├── index.js
    │   │       └── styled.js
    │   ├── GlobalStyles
    │   │   └── index.js
    │   ├── images (a lot of images here)
    │   ├── App.js
    │   ├── fetchProducts.js
    │   ├── index.js
    │   ├── reportWebVitals.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── README.MD
    └── .gitignore  
```

## Technologies and libraries:
 <ul>
   <li>JavaScript</li>
   <li>React</li>
   <li>Tanstack Query</li>
   <li>Axios</li>
   <li>Styled Components</li>
   <li>React-modal</li>
   <li>React-spinners</li>
 </ul>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
