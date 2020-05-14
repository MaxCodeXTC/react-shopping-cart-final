# Build ECommerce Shopping Cart by React & Redux 2020 Edition

[Get 90% Discount On This Course At Udemy](https://www.udemy.com/course/build-ecommerce-website-by-react-redux-in-one-hour/?couponCode=CODINGWITHBASIR)

Demo: https://react-shopping-cart-final.herokuapp.com/

## What you’ll learn

- Design Shopping Cart Using HTML and CSS
- Implement React Components For Product List, Filter, Cart
- Managing Component State using Redux, React-Redux and - Redux-Thunk
- Creating Animations Using React-Reveal and Add Routes using React-Routers
- Build Backend using Node, Express, MongoDB and Mongoose
- Publish Project on the Heroku and MongoDB Atlas

## Are there any course requirements or prerequisites?

- Basic HTML and CSS
- Basic JavaScript

## Who this course is for:

- Javascript developers
- Web Developers
- Freelancers
- Programming Students

## Table Of Content

1. Introduction
   1. Review Shopping Cart Features
      1. Fully-Functional Shopping Cart
      2. Instant Feedback
      3. Animated and Intuitive Design
      4. List Products
      5. Sort Products By Price High or Low
      6. Filter Products by Size
      7. Open Modal By Click on Product
      8. Add Product To Cart using Animation
      9. Handle Multiple Click By Adding More Items
      10. Remove Product
      11. Show Checkout Form
      12. Create Order with user friendly id
      13. Admin Section to see list of products
      14. Using postman to add or remove products and orders
2. Tools and Technologies
   1. JavaScript
      1. Arrow Functions
      2. Array functions
      3. Spread Operators
      4. Deconstructing assginments
      5. Local Storage
   2. React
      1. react-touter-dom
      2. react-reveal
      3. react-modal
   3. Redux
      1. react-redux
      2. redux-thunk
   4. Node
      1. express
      2. body-parser
      3. Environment Variables
      4. nodemon
   5. MongoDB
      1. mongoose
      2. shortid
   6. Development
      1. VS Code
         1. JavaScript (ES6) Code Snippets
         2. ES7 React Extension
         3. ESLint Extension
         4. Node Debug
         5. CSS Peek
      2. Chrome
         1. React Developer Tools
         2. Redux Developer Tools
      3. Git
         1. create repo
         2. commit changes
         3. add remote repo
         4. create branch
         5. push branch
      4. Github
         1. create repo
         2. connect to local repo
         3. recieve branches
         4. pull request
         5. merge with master
      5. Postman
         1. create post to create products
         2. create delete request to remove products and orders
   7. Deployment
      1. Heroku
      2. MongoDB Atlas (Cloud)
3. Create React App
   1. Open VS Code and open terminal
   2. cd Desktop
   3. npx create-react-app react-shopping-cart
   4. Remove unused files
   5. Convert App.js Class Component
   6. Add header, main and footer
   7. Update index.css to add grid
4. Project Development Workflow
   1. Create Google Spreadsheet
   2. Add columns Feature, Description, State, and Duration
   3. Enter Products Component, Show list of products, Open, 2
   4. Add Time ? Hours, Rate 30 USD/Hours, Cost ? USD
   5. Add All Features
   6. Create Github account
   7. Create new repository
   8. Add it as remote repository in VS Code
   9. Commit changes
   10. Push changes on github
   11. Start => create new feature Feature 1 in google spreadsheet
   12. Create a new branch feature-1 for test the workflow
   13. Add "// branch feature 1" in App.js Line 1
   14. Commit with message "feature 1"
   15. Click publish changes
   16. Open repository page on github
   17. Create pull request
   18. Merge pull request
   19. In VS Code switch to master and Sync changes
   20. End => Loop from step 11 for next feature
5. Products Component
   1. Create data.json {products:[{_id, title, description, price,image,price,availableSizes }]}
   2. Update App.js to import data.json
   3. div.content {flex, wrap}
      1. div.main {flex: 3 60rem}
      2. div.sidebar {flex: 1 20rem;}
   4. Create components/Products.js component
   5. Add it to div.main in App.js and set products props
   6. ul.products {flex,center, center,warp, p:0,m:0, style:none}
   7. this.props.products.map(p => li.key={p.\_id} {flex, p:1, m:1, none,h:47}
   8. div.product { flex, column, space-between, h:100%}
      1. a href="#" > img {max-width, max-height:37} + p {p.title}
      2. div.product-price > div.product.price + button.button.primary Add to cart
      3. product-price {flex, space-between, center}
         1. div {p.price} flex: 1; align: center; size: 2rem
         2. button.button.primary Add To Cart
6. Filter Component

   1. Create components/Filter.js
   2. Add it above Products component in App.js
   3. Update Filter.js render
      1. div.filter {flex, wrap, p,m:1rem, border-bottom: .1rem}
         1. filter-result {this.props.filteredProducts.length}
         2. filter-sort {flex:1}
            1. label Order select value=this.props.sort
            2. onChange= this.props.sortProducts(e.t.value)
            3. option lowestprice Lowest, ...
         3. filter-size {flex:1}
            1. label Filter select value=this.props.size
            2. onChange= this.props.filterProducts(e.t.value)
            3. option "" ALL, XS, S, M, L, XL, XXL
   4. Update <Filter size={this.state.size} sort={this.state.sort} sortProducts={this.sortProducts} filterProducts={this.filterProducts} >
   5. this.state = {sort:"", size:"", products}
   6. filterProducts = (size)=>{this.setState({size, products:
   7. size === "" ? products : products.filter(
      (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
      )}
   8. sortProducts = (sort)=>{this.setState(state =>({sort,
   9. products: state.products.slice().sort((a, b) =>
      sort === "lowestprice"
      ? (a.price > b.price ? 1 : -1)
      : sort === "lowestprice"
      ? (a.price < b.price ? 1 : -1)
      : (a.\_id > b.\_id ? 1 : -1)
      )

7. Cart Component
   1. Set Active Task Management Spreadsheet
   2. Create branch cart-component
   3. Product.js
   4. Handle "Add To Cart" to this.props.addToCart(product)
   5. App.js
   6. Add cartItems to state as []
   7. Create addToCart(product)
   8. Slice, Check product existance, add to cartitems
   9. Cart.js
   10. Define cartItems from this.props
   11. Check cartItems.length and show message
   12. List cartItems {cartItems.length > 0 && (}
   13. index.css
   14. Style cart, cart-header, cart-items (img, li),
   15. Publish changes
   16. Pull request, merge, change to master
   17. Task Management Spreadsheet set it done
8. Checkout Form
   1. Set Active Task Management Spreadsheet
   2. Create branch checkout-form
   3. Cart.js
   4. Make cart items persistent
   5. Use LocalStorage on App constructor to load cart items (JSON.parse)
   6. Use LocalStorage on addToCart to save cart items (JSON.stringify)
   7. Handle Click on Proceed
   8. Update showCheckout state to true on click
   9. Conditional rendering Checkout Form
   10. Get Email, Name and Address required input
   11. Define handleInput function
   12. Add Checkout Button
   13. Handle onSubmit Form Event by this.createOrder
   14. Create order object and pass to parent to handle it
   15. Commit and Publish changes
   16. Pull request, merge, change to master
   17. Task Management Spreadsheet set it done
9. Add Modal and Animation
   1. Set Active Task Management Spreadsheet
   2. Create branch animation-modal
   3. Show Animation
   4. Install react-reveal
   5. Create fade effect from bottom for products
   6. Create fade left for add to cart
   7. Create fade right for show checkout form
   8. Open Modal by click on product image
   9. Install react-modal
   10. Products.js
   11. Import Modal
   12. Set state for product to null
   13. Define openModal and closeModal
   14. Show Modal if product exist
   15. Create Modal
   16. Create zoom effect for modal
   17. index.css
   18. Style Product Details
   19. Commit and Publish changes
   20. Pull request, merge, change to master
   21. Task Management Spreadsheet set it done
10. Create Products Backend
    1. Install nodemon globally
    2. Add server.js
    3. Install express body-parser mongoose shortid
    4. Install MongoDB
    5. app = express()
    6. app.use(bodyParser.json())
    7. mongoose.connect()
    8. create Product model
    9. app.post("/api.products")
    10. Postman send post request
    11. route.get("/api/products")
    12. route.delete("/api/products/:id")
11. Add Redux
    1. what is redux (diagram)
    2. npm install redux react-redux
    3. store.js
    4. import redux
    5. set cartItems from localstorage
    6. set initial state
    7. create reducer
    8. create store
    9. App.js
    10. import store
    11. wrap it in Provider
    12. cart.js
    13. connect to store
    14.
12. Add Redux To Filter
13. Add Redux To Cart
14. Create Order
15. Add React Router
16. Add Admin Section
17. Connect To Cloud MongoDB Atlas
    1. Create an account on https://www.mongodb.com/cloud
    2. Login to https://cloud.mongodb.com/
    3. Add database user
    4. Left sidebar> Select Security > Database Access
    5. Select Add New User button
    6. Enter user name and password and click Add User
    7. Add IP whitelist
    8. Left sidebar > Select Security > Network Access
    9. Select Add IP Address
    10. Enter 0.0.0.0/0 in Whitelist Entry and click Confirm
    11. Get connection string
    12. Left sidebar > Select Altas > Cluster
    13. Click Connect
    14. Click Connect to your application
    15. Click Copy button
    16. Step 2: Deploy On Heroku
    17. Create git repository in amazona folder using git init
    18. Create Heroku Account at heroku.com
18. Install Heroku CLI

    1. heroku login
    2. heroku apps:create react-shopping-cart-final
    3. Edit package.json
    4. "engines": { "node": "12.4.0", "npm": "6.9.0"}
    5. Create Procfile
    6. web: node server.js
    7. Set MongoDB connection string in Heroku
    8. Open Heroku apps https://dashboard.heroku.com/apps/
    9. Select your apps, open Setting Tab and click Reveal Config Vars
    10. Add key MONGODB_URL
    11. Enter copied connection string from the previous step
    12. Update database name and username and password
    13. Add key NODE_MODULES_CACHE and value false
    14. app.use("/", express.static(\_\_dirname + "/build"));
    15. app.get("/", (req, res) => res.sendFile(\_\_dirname + "/build/index.html"));
    16. git add . && git commit -m "publish"
    17. git push heroku

19. Future Works
