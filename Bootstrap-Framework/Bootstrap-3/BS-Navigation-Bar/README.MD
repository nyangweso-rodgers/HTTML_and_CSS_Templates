# Navigation Bar


## Table Of Contents
- [Further Reading]()
    - [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)

# Overview Of Navigation Bar
* __Navigation bar__ (also referred to as a navbar) is a header at the top of the page to display navigational information.

# How To Use
* To use Bootstrap Navigation Bars you add a __< nav >__ element to the top inside the < body > element of your webpage. There are various styles you can add to customize the display of your navbars.

# Navbar Sub-Components 
* __.navbar-brand__: for your company, product, or project name.
* __.navbar-nav__: for a full-height and lightweight navigation (including support for dropdowns).
* __.navbar-toggler__: for use with our collapse plugin and other navigation toggling behaviors.
* __.form-inline__: for any form controls and actions.
* __.navbar-text__: for adding vertically centered strings of text.
* __.collapse.navbar-collapse__: for grouping and hiding navbar contents by a parent breakpoint.
# Navbar Styles
* Bootstrap provides a set of classes in the Bootstrap framework to style your navbars. These classes are as followed:
    - __navbar navbar-default__: This is the default style for your navbars.
    - __navbar navbar-inverse__: This is similar to the default style except the colors are inverted.

# Adding forms to the navbar
* You can also add forms to the navbar. This could be used for tasks such as a search field, quick login field, etc.

    ```html
        <form class="navbar-form navbar-right">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
        </div>  
        <button type="submit" class="btn btn-default">Search</button>  
        </form>
    ```

# Aligning elements to the right on the navbar
* In some cases you might want to align elements in a navbar to the right (for example a login or sign-up button.). To do this you'll need to use the __navbar-right__ class.

    ```html
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Site Name</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Action Link #1</a></li>
            <li><a href="#">Action Link #2</a></li>
            </ul>
        </div>
        </nav>
    ```

# Displaying the navbar independent of scrolling
* In some cases you might want to keep the __navbar__ at the top or bottom of the screen regardless of scrolling. You will need to add either the __navbar-fixed-top__ or __navbar-fixed-bottom__ class to the __< nav >__ element.

    ```html
        <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Site Name</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
        </div>
        </nav>
    ```

# Collapsing the navbar
* On a small screen (such as a phone or tablet) the navbar is going to take up too much space. Luckily the option to collase the navbar exists. You can accomplish this using the following example.

    ```html
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Site Name</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            </ul>
        </div>
        </nav>
    ```