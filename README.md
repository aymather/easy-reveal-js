# Easy Scroll Reveal .js

 This script is used to make the Scroll Reveal javscript library extremely easy to implement on a basic level by allowing you to simply add specific class names to nodes.

# Setup

Include this cdn in the `<head>` of your html: `<script src="https://unpkg.com/scrollreveal"></script>`
Include this at the bottom of your `<body>` to connect to the easy-scroll-reveal.js file: `<script src='easy-scroll-reveal.js'></script>`

_Important! Make sure that if your 'easy-scroll-reveal.js' file is located in a folder, that you specify the path to that folder in your script tag. Example: `<script src='/path/to/my/js/stuff/easy-scroll-reveal.js'></script>`_

**And that's it!**

# Usage

Now simply apply class names to give scroll reveal effect. The schema is as follows:

`<div class='slide-DIRECTION-DELAY'></div>`

The only inputs that will change will be DIRECTION or DELAY. In other words...

`<div class='slide-bottom-3'></div>` will slide up from the bottom after 3 seconds
`<div class='slide-top'></div>` will slide down from the top without any delay
`<div class='slide-left-1'></div>` will slide from the left after 1 second
`<div class='slide-right-9'></div>` will slide from the right after 9 seconds

# More customization

All elements by default will slide from a distance of 20% and slide for a duration of 1 second. This can be changed by going into the 'easy-scroll-reveal.js' file and changing the `base` object at line 6. For help changing and adding even more customization, check the [Scroll Reveal Documentation](https://scrollrevealjs.org/api/reveal.html) for more info.

Happy coding :)
By: [Alec Mather](https://github.com/aymather)