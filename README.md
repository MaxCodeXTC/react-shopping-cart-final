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
         6.
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
   1. npx create-react-app react-shopping-cart
   2. Remove unused files
   3. Convert App.js Class Component
   4. Add header, main and footer
   5. Update index.css to add grid
4. Publish Code on Github
   1. Create Github account
   2. Create new repository
   3. Add it as remote repository in VS Code
   4. Commit changes
   5. Push changes on github
5. Product Component
   1. Create data.json {products:[{_id, title, description, price,image,price,availableSizes }]}
   2. Update App.js to import data.json
   3.
6. Filter Component
7. Cart Component
8. Create Products Backend
   1. Install nodemon globally
   2. Add server.js
   3. install express body-parser mongoose
   4. app = express()
   5. app.use(bodyParser.json())
   6. mongoose.connect()
   7. create Product model
   8. app.post("/api.products")
   9. Postman send post request
   10. route.get("/api/products")
   11. route.delete("/api/products/:id")
9. Add Redux
10. Add Redux To Filter
11. Add Redux To Cart
12. Add Animation
13. Create Order
14. Add React Router
15. Add Admin Section
16. Connect To Cloud MongoDB
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
17. Install Heroku CLI

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
    12. app.use("/", express.static(\_\_dirname + "/build"));
    13. app.get("/", (req, res) => res.sendFile(\_\_dirname + "/build/index.html"));
    14. git add . && git commit -m "publish"
    15. git push heroku

18. Future Works
