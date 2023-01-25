# BS 5 - Carousel
## Table Of Contents
- [Further Reading]()
    - [w3 Schools - Bootstrap 5 Carousel](https://www.w3schools.com/bootstrap5/bootstrap_carousel.php)

# Overview Of Carousel uin BS5
* A slideshow component for cycling through elements—images or slides of text—like a carousel.

# How it works
* The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

# Examples
* _The __.active__ class needs to be added to one of the slides otherwise the carousel will not be visible_. Also be sure to set a unique __id__ on the __.carousel__ for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a __data-bs-target__ attribute (or __href__ for links) that matches the __id__ of the __.carousel__ element.

# Classes
1. __.carousel__: creates a carousel

2. __.carousel-indicators__: Adds indicators for the carousel. These are the little dots at the bottom of each slide (which indicates how many slides there are in the carousel, and which slide the user are currently viewing)

3. __.carousel-inner__: Adds slides to the carousel

4. __.carousel-item__: Specifies the content of each slide

5. __.carousel-control-prev__: Adds a left (previous) button to the carousel, which allows the user to go back between the slides

6. __.carousel-control-next__: Adds a right (next) button to the carousel, which allows the user to go forward between the slides

7. __.carousel-control-prev-icon__: Used together with .carousel-control-prev to create a "previous" button

8. __.carousel-control-next-icon__: Used together with .carousel-control-next to create a "next" button

9. __.slide__: Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect