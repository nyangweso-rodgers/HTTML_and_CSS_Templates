# CSS Pseudo-Elements

## Table of Contents
- [Further Reading]()
    - [CSS Pseudo-elements - W3Schools](https://www.w3schools.com/css/css_pseudo_elements.asp)

# Introduction to CSS Pseudo-Elements
* A CSS __pseudo-element__ is used to style specified parts of an element. For example, it can be used to:
    - Style the first letter, or line, of an element
    - Insert content before, or after, the content of an element

# Syntax
```css
    selector::pseudo-element {
        property: value;
    }
```

# The ::first-line Pseudo-element
* The __::first-line__ pseudo-element is used to add a special style to the first line of a text.

* __Note__: _The __::first-line__ pseudo-element can only be applied to block-level elements_.

# The ::first-letter Pseudo-element
* The __::first-letter__ pseudo-element is used to add a special style to the first letter of a text.

* __Note__: _The __::first-letter__ pseudo-element can only be applied to block-level elements_.

# The ::selection Pseudo-element
* The __::selection__ pseudo-element matches the portion of an element that is selected by a user.
* The following CSS properties can be applied to __::selection: color, background, cursor__, and __outline__.