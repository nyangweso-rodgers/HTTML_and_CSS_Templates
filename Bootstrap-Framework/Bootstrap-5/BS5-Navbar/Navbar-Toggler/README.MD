# Navbar Toggler

# Overview
* Very often, especially on small screens, you want to _hide the navigation links and replace them with a button that should reveal them when clicked on_.

* To create a collapsible navigation bar, use a button with __class="navbar-toggler"__, __data-bs-toggle="collapse"__ and __data-bs-target="#thetarget"__. Then wrap the navbar content (links, etc) inside a < div > element with __class="collapse navbar-collapse"__, followed by an __id__ that matches the __data-bs-target__ of the button: "thetarget".