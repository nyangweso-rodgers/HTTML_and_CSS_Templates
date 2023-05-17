# bootstrap 5 - carousels


# `h-100`
* `h-100` class sets the height of each card 10 100% of its parent container's height.

# Start with the `carousel` `container` class
* `carousel` class sets the carousel
* `.slide` - Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect

* `data-bs-ride="carousel"` attribute is used to initialize the Bootstrap `carousel` component. It tells `Bootstrap` to automatically initialize the carousel when the page loads.

    * The `data-bs-ride` attribute is specific to `Bootstrap 5` and is used in conjunction with the `carousel` component.
    * When Bootstrap detects an element with the `data-bs-ride="carousel"` attribute, it will automatically enable the carousel functionality, allowing you to navigate through slides or cards using the carousel indicators, navigation arrows, or by swiping (on touch-enabled devices).

# `wrapper` section for slides
* `.carousel-indicators` - Adds indicators for the `carousel`. 
* These are the little dots at the bottom of each slide (which indicates how many slides there are in the `carousel`, and which slide the user are currently viewing)

* `.carousel-inner` -  Adds slides to the `carousel`
* `.carousel-item` - Specifies the content of each `slide`

# `controls` classes
* `.carousel-control-prev` : Adds a left (previous) button to the `carousel`, which allows the user to go back between the slides
* `.carousel-control-next` -  Adds a right (next) button to the `carousel`, which allows the user to go forward between the slides
* `.carousel-control-prev-icon` -  Used together with `.carousel-control-prev` to create a "previous" button
* `.carousel-control-next-icon` -  Used together with `.carousel-control-next` to create a "next" button

# Additional Notes
* _The __.active__ class needs to be added to one of the slides otherwise the carousel will not be visible_. 
* Also be sure to set a unique __id__ on the __.carousel__ for optional controls, especially if you’re using multiple carousels on a single page.