# MERN FunShop

# Lessons
1. Introduction
2. Install tools
3. Create react app
4. Create Repository
5. List products
    1. create products array
    2. add product images
    3. render products
    4. style products 

6. Add routing
    1. npm i react-router-dom
    2. create route for home screen
    3. cretae router for product 

7.  Create Node.Js Server
    1. run npm init in root folder
    2. update package.json set type: module
    3. add .Js to imports
    4. npm install express
    5. create server.js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / return backend is ready
    9. move products.js from frontend to backend
    10. create route for /api/products
    11. return products
    12. run npm start

8. Fetch Products from Backend
    1. set proxy in package.json
    2. npm install axios
    3. use state hook
    4. use effect hook
    5. use reducer hook

9. Manage State by Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from useReducer

10. Add bootsrap UI Framework
    1. npm install react-bootstarp bootstrap
    2. update App.js

11. Create Product and Rating Component
    1. create rating component
    2. create product component
    3. use rating component in product component

12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action.

13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function

14. Implement Add To Cart
    1. Create react Context
    2. Define Reducer
    3. Create store provider
    4. Implement add to cart button click handler

15. Complete Add Too Cart
    1. check if item exist in the cart
    2. check count in stock in backend

16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column

17.  Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout

18. Create Sign-in Screen
    1. create sign-in form
    2. add email and password
    3. add sign-in button

19. Connect to MongoDG Database
    1. create atlas mongodb database
    2. install local mongodb database
    3. npm install mongoose (if you dont have it alrady).
    4. connect to mongodb database.