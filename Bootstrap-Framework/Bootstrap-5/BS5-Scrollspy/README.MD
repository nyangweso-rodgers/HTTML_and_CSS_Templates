# Bootstrap 5 Scrollspy

## Table Of Contents
- [Further Reading]()
    - [Bootstrap 5 Scrollspy](https://www.w3schools.com/bootstrap5/bootstrap_scrollspy.php)

# Scrollspy
* __Scrollspy__ is used to automatically update links in a navigation list based on scroll position.

# Example: How to Create a Scrollspy

# Example Explained
* Add __data-bs-spy="scroll"__ to the element that should be used as the scrollable area (often this is the __< body >__ element).

* Then add the __data-bs-target__ attribute with a value of the id or the class name of the navigation bar (__.navbar__). This is to make sure that the navbar is connected with the scrollable area.

* __Note__: _that scrollable elements must match the ID of the links inside the navbar's list items (< div id="section1"> matches < a href="#section1">).

* The optional __data-bs-offset__ attribute specifies the number of pixels to offset from top when calculating the position of scroll. This is useful when you feel that the links inside the navbar changes the active state too soon or too early when jumping to the scrollable elements. Default is 10 pixels.