# BS 5 - Carousel

* A slideshow component for cycling through elements—images or slides of text—like a carousel.

# How it works
* The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

# Examples
* _The __.active__ class needs to be added to one of the slides otherwise the carousel will not be visible_. Also be sure to set a unique __id__ on the __.carousel__ for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a __data-bs-target__ attribute (or __href__ for links) that matches the __id__ of the __.carousel__ element.