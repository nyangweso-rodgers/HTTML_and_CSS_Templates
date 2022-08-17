# CSS

## Introduction to CSS
- [Overview of CSS]()
    - [Type CSS Selectors](#Type-CSS-Selectors)
        - [ID Selectors](#ID-Selectors)
        - [Class Selectors](#Class-Selectors)
        - [Descendant Selectors](#Descendant-Selectors)
- [Introduction to CSS3](#Introduction-to-CSS3)



# Overview of CSS

# Type CSS Selectors
are the most common and easy to undersatnd selectors. This selector targets element types on the page.
* to target all the paragraphs on the page
```css
    p {
	color: red;
	font-size: 130%;
    };
```
# ID Selectors
__id selectors__ allow you to style an HTML element that has an id attribute, regardless of their position in the document tree. to select an element with a specific ID, use a hash character, and follow it with the id of the element.

# Class Selectors
__class selectors__ work in a similar way as __ID Selectors__ the major difference is that _ID's can only be applied once per page_, while _class selectors can be used as many times on a page as needed_. to select elements with specific class, use a period character followed by the name of the class.

# Descendant Selectors
these selectors are used to select elements that are descendants of another element. when selecting levels, you can select as many levels deep as you need to.
```css
    /* to target only <em> elements of the first paragraph of the 'intro' section;*/
    #intro .first em {
	color: pink;
	background-color: grey;
    }
```

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