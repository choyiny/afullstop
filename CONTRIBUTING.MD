## How to Contribute?
I'm very glad you're reading this! Before you create an issue or pull request, please make sure you read the below information first.

If you haven't already, feel free to Star this repository!

### Submitting Issues
Issues can be open for (almost) everything, from bug reports to feature requests. Please do make sure you make the issues informative, and abide by the ideal of this repository. Here is an example of unaccepted issues that will be closed when discovered:

`This is not a full stop, it's a period`

Please also tag your issue with the appropriate tags.

### Submitting Pull Requests
Please send a [pull request here](https://github.com/choyiny/afullstop/pulls). It would be awesome if you included a description of what you have done and simple documentation if you included javascript or CSS code. Before you submit your PR, please make sure you have done the following:

- Make sure you have the most up-to-date fork so you minimize the chance of running into code conflicts.
- Make sure your code is properly indented to standards of HTML, CSS and Javascript.

#### Creating a new page design
If you are creating a new page design or want to modify an existing one, please make sure your changes are viewable at your Github Pages `username.github.io/afullstop`. Your PR will not be merged without a working preview.

Before you can start to develop a new page design, please make sure that you have Node.js (>=6.0.0) and all required project dependencies installed (just run `npm i` after you cloned the repository).
We're using a straightforward [Webpack](https://github.com/webpack/webpack) build workflow, transpile our ECMASCRIPT2015+ code with babel and use [React](https://facebook.github.io/react/) for rendering our designs, so you can just run `npm start` to launch a development server on your computer. With this server, you can edit react components and watch the applying changes in your browser at `http://localhost:8080/notaperiod/` without page reloading.

When you want to create a new design, you can just copy the `src/components/BaseDesign` to `src/components/YOURDESIGNNAME` and modify it to your preference (read a small [introduction to jsx](https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm)). To enable your new design, you need to import it inside the `src/index.js`. To render your design, you have to replace the `BaseDesign` at the *render-call* at the bottom appropriately (advanced logic to do this process automatically and randomly will be added in future). When your development servers is running, you can see the changes appearing inside your browser.

If you want to import javascript libraries, please install them using [npm](https://www.npmjs.com/): run `npm install --save <packageName>` and don't forget to commit the resulting package.json. You can import them using the new [module support in ECMASCRIPT2015](http://exploringjs.com/es6/ch_modules.html). Our Webpack workflow allows you also to include common `.css` files. Import them inside your components through referencing to their relative paths. They will be automatically bundled, reference them from your components with the `className` attribute.

### Important scripts
- `npm run start`: Starts a development server at `http://localhost:8080/notaperiod/`
- `npm run lint`: Lint .js files for syntax to preserve code compliance
- `npm run build.prod`: Build the project for production (so you can commit and push to update gh-pages)

#### Credits
We would love to credit you. When you make a pull request and it has been approved, please add your name to `README.md` in the contributors section.
