# Bootstrap 3

## Table Of Contents
- [Further Reading]()
    - [The Best Bootstrap Examples](https://www.freecodecamp.org/news/the-best-bootstrap-examples/)

# Overview Of Bootstrap 3
* __Bootstrap__ is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. __Bootstrap__ includes __HTML__ and __CSS__ based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional __JavaScript__ plugins.

# Version History
* Twitter originally developed the Bootstrap framework as an internal tool. They released it as an open source project in August of 2011.

* __Bootstrap 2__ was released in January 2012. One of the primary features was the introduction of the __12 column__ responsive grid system. __Bootstrap 3__ appeared in August of 2013, switching to a flat design and a mobile-first approach. Bootstrap 4 is available in beta as of August 2017, and now includes Sass and Flexbox.
# Advantages of Bootstrap:
* __Easy to use__: Anybody with just basic knowledge of HTML and CSS can start using Bootstrap
* __Responsive features__: Bootstrap's responsive CSS adjusts to phones, tablets, and desktops
* __Mobile-first approach__: In Bootstrap 3, mobile-first styles are part of the core framework
* __Browser compatibility__: Bootstrap is compatible with all modern browsers (Chrome, Firefox, Internet Explorer, Edge, Safari, and Opera)

# Bootstrap Versions
- Bootstrap 3: released in 2013
- Bootsteap 4: released in 2018
- Bootstrap 5: released in 2021

# Where to Get Bootstrap?
* Download Bootstrap from [getbootstrap.com](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* Include Bootstrap from a CDN

# Bootstrap CDN
* If you don't want to download and host Bootstrap yourself, you can include it from a CDN (Content Delivery Network).
* MaxCDN provides CDN support for Bootstrap's CSS and JavaScript. You must also include jQuery:

# MaxCDN
```html
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
```

# Bootstrap Components

# Component 1: Containers
* Bootstrap requires a containing element to wrap site contents. There are two container classes to choose from:
    1. The __.container__ class provides a responsive fixed width container
    2. The __.container-fluid__ class provides a full width container, spanning the entire width of the viewport

# Component 2: Grid System
* In a nutshell, the Bootstrap grid system helps you create responsive layouts, and it is comprised of a system of rows and columns that helps you structure your content.

* __Rows__ are horizontal groups of __columns__, and _each page has a maximum of 12 columns per row_. Within each row, the content is placed inside the columns and it can span anywhere between 1 to 12 columns.

* __Bootstrap__ has five different types of grid tiers: 
    - Extra small,
    - Small, 
    - Medium, 
    - Large and 
    - Extra large. 
* There is a breakpoint defined for each of these grid tiers. Bootstrap uses pixels to define the grid tier breakpoints.

# Component 3: Row
* Use __row__ to group your columns. This will keep everything lined up properly and help you structure your grid.

# Component 4: Columns
* __Column classes__ indicate the number of columns you’d like to use out of the possible 12 per row. For example __col-sm-6__ would mean your columns use up half the width of the row on a small screen, and __col-lg-4__ would use up a third on a large screen.

* Here is how you would define a class prefix to use up one column width on the various screen sizes:
    - __Extra Small__: col-1
    - __Small__: col-sm-1
    - __Medium__: col-md-1
    - __Large__: col-lg-1
    - __Extra Large__: col-xl-1

* __Bootstrap__ provides a ready-made 12 column grid system for use in layouts. Consider the following code.

    ```html
        <div class="container">
        <div class="row">
            <div class="col-md-6">Content</div>
            <div class="col-md-6">Content</div>
        <div>
    </div>
    ```
where:
    - col: column
    - md: screen size
    - 6: column-width

* As a 12 column grid system, all user defined grid column widths must add up to 12.

* Screen size values can be assigned as follows:
    - xs - < 768px Phones
    - sm - < 992px Tablets
    - md - < 1200px Laptops
    - lg - > 1200px Desktops

# Templates Links
1. [W3 Schools Bootstrap Templates](https://www.w3schools.com/bootstrap/bootstrap_templates.asp)
2. [StartBootstrap Templates](https://startbootstrap.com/)
3. [Wrap Bootstrap](https://wrapbootstrap.com/)
4. [Wow Slider](https://wowslider.com/posts/35-top-free-bootstrap-templates-2016-95.html)
5. [Bootstrap Made](https://bootstrapmade.com/)