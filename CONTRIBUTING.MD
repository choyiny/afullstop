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
If you are creating a new page design or is modifying an existing one, please make sure your changes are viewable at your Github Pages `username.github.io/afullstop`. Your PR will not be merged without a working preview.

Create a new HTML page and clone the existing `404.html` template. Name your page something informative, for example, `animation.html` if you have done something related to `animate.css` or animation with javascript.

#### Using external CSS/JS Library
If you choose to use an external CSS/JS Library such as parallax.js or bootstrap, please include the `min.js` file in `/assets/css/`. Before you do that, please make sure the library does not already exist.

Please also do use a CDN for the below Libraries
- jQuery `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>`
- AngularJS `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>`
- Bootstrap CSS `<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`
- Bootstrap JS `<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>`

#### Check before submitting
- You did not include any `.DS_Store` files in your pull request.

#### Credits
We would love to credit you. When you make a pull request and it has been approved, please add your name to `README.md` in the contributors section.