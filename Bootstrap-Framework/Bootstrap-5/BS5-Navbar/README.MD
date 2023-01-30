# BS5 -Navbars

## Table Of Conntents
- [Further Reading]()
    - [](https://www.w3schools.com/bootstrap5/bootstrap_navbar.php)

# Navigation Bars
* A navigation bar is a navigation header that is placed at the top of the page: With Bootstrap, a navigation bar can extend or collapse, depending on the screen size.

* A standard navigation bar is created with the __.navbar__ class, followed by a responsive collapsing class: __.navbar-expand-xxl|xl|lg|md|sm__ (stacks the navbar vertically on xxlarge, extra large, large, medium or small screens).

* To add links inside the navbar, use either an <ul> element (or a <div>) with class="navbar-nav". Then add <li> elements with a __.nav-item__ class followed by an < a > element with a __.nav-link__ class:

# Text Color of Navigation Bar
* __navbar-light__: This class will set the color of the text to dark. This is used when using a light background color.
* __navbar-dark__: This class will set the color of the text to light. This is used when using a dark background color.

# Background Color
* Use any of the __.bg-color__ classes to change the background color of the navbar:
    - .bg-primary, 
    - .bg-success, 
    - .bg-info, 
    - .bg-warning, 
    - .bg-danger, 
    - .bg-secondary, 
    - .bg-dark and 
    - .bg-light

* __Tip__: _Add a white text color to all links in the navbar with the __.navbar-dark__ class, or use the __.navbar-light__ class to add a black text color.

# Brand/Logo
* The __.navbar-brand__ class is used to highlight the brand/logo/project name of your page:

# Fixed Navigation Bar
* The navigation bar can also be fixed at the top or at the bottom of the page. A fixed navigation bar stays visible in a fixed position (top or bottom) independent of the page scroll.

* The __.fixed-top__ class makes the navigation bar fixed at the top:

* Use the __.fixed-bottom__ class to make the navbar stay at the bottom of the page:

* Use the __.sticky-top__ class to make the navbar fixed/stay at the top of the page when you scroll past it. Note: This class does not work in IE11 and earlier (will treat it as position:relative).