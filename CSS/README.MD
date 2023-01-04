# CSS

## Introduction to CSS
- [Overview of CSS]()

- [CSS Selectors](#CSS-Selectors)

- [CSS Units](#CSS-Units)
    - [Absolute Units](#Absolute-Units)
    - [Relative Units](#Relative-Units)

- [Introduction to CSS3](#Introduction-to-CSS3)

# Overview of CSS

# CSS Selectors
Selector | Description | Example
|---------------|-------------------|--------------|
Type CSS Selectors | are the most common and easy to undersatnd selectors. This selector targets element types on the page. | p {} - target all the paragraphs on the page
ID Selectors | allow you to style an HTML element that has an id attribute, regardless of their position in the document tree. | #id-selector {}
Class Selectors | work in a similar way as __ID Selectors__ the major difference is that _ID's can only be applied once per page_, while _class selectors can be used as many times on a page as needed_ | .class-selector {}
Descendant Selectors | these selectors are used to select elements that are descendants of another element. when selecting levels, you can select as many levels deep as you need to. #intro .first em {}

# CSS Units
* __CSS Unit__ determines the size of a property you are setting for an element of its content.
# Absolute Units
* Units that are "__absolute__" are the same size regardless of the parent element or window size.

Unit | Description
|---------------------- | -------------------- |
px | 1px = 1/96th of 1 inch (96px = 1 inch)
pt | 1pt = 1/72th of 1 inch
mm | 1mm = 1/10th of 1cm
cm | Centimeters
pc | 12pt = 1pc
in | inches

# Relative Units
* __Relative units__ are useful for styling responsive sites because they scale relative to the parent or window size (depending upon the unit)
Unit | Description
|---------------------- | -------------------- |
rem | relative to the font size of the root element
em | Relative to the font size of the element
vh | Relative to 1% of the viewport's height
vw | Relative to 1% of the viewport's width
% | Relative to 1% of the parent element
vmin | Relative to the viewport's smaller dimension, 1vmin = max(1vh, 1vw)
vmax | Relative to the viewport's larger dimension, vmax = max(1vh, 1vw)
ch | Relative to the width of the glyph "O" of the element's font


# Introduction to CSS3
__CSS3__  is the latest standard of __CSS__. Significant Features are:
* __Border radius__ - create rounded corners for elements
* __Border Images__ - allows us to specify an image as the border around an element
* __Multiple background__ - applies multiple background to elements
* Animations and effects e.t.c.,

# CSS3 New Features
1. __Box shadow__ - you can attach one or more shadows to an element by specifying values for:
    * color, 
    * size, 
    * blur, and 
    * offset
2. __Gradients__ - allow us to set the background color of the element to a gradient.two types of gradients are available: 
    * Linear and 
    * Radial
3. __Transforms___ - allow you to rotate, scale, and move and skew elements
4. __Transition__ - allows you to animate from one CSS property value to another. you can combine it with transfirms and animate the elements position, rotation, or scale
5. __Animations__ - have their own specifications and they allow you to create keyframes, set duration, easing, e.t.c