# `css` Selectors

## Table Of Contents
- [Further Reading]()
    1. [w3Schools - CSS Pseudo-class](https://www.w3schools.com/css/css_pseudo_classes.asp)
    2. [w3Schools - CSS Pseudo-element](https://www.w3schools.com/css/css_pseudo_elements.asp)
    3. [w3Schools - CSS Attr Selectors](https://www.w3schools.com/css/css_attribute_selectors.asp)

# `css` Selectors
* `css selectors` are used to find/select html elements for styling.
* `css selectors` can be divided into 5 Categories:
    1. Simple Selectors (select elements based on `name`, `id` or `class`)
    2. Combinator Selectors (select elements based on a specific relationship between them)
    3. `Pseudo-class selectors` (select elements based on certain state)
    4. `Pseudo-element selectors` (select and style part of an element)
    5. Attribute Selectors (select elements based on an attribute or attribute value)

# `css` Universal Selector (*)
* Used to select all HTML elements in the page.

    ```css
        * {
            color: black;
        }
    ```

# `css` Grouping Selector
* Grouping selector selects all elements with the same style definition.

    ```css
        p, h1, h2 {
            text-align: center;
        }
    ```

# `css` Class Selector
```css
    /* select paragrahs with id='demo' */
    p.demo {
        color: black;
    }
```

# `css` Combinators
* A __combinator__ is something that explains the relationship between the selectors.
* There are four different combinators in CSS:
    1. descendant selector (space)
    2. child selector (>)
    3. adjacent sibling selector (+)
    4. general sibling selector (~)

# `css` Combinators 1: `Descendant Selector`
* The `descendant selector` matches all elements that are descendants of a specified element.
* E.g., to extract all `p` elements inside `div` elements:

    ```css
        div p {
            background-color: blue;
        }
    ```

# `css` Combinators 2: `Child Selector` (>)
* The `child selector` selects all elements that are the children of a specified element.
* E.g., to select all `p` elements that are children of a `div` element:

    ```css
        div > p {
            color: blue;
        }
    ```

# `css` Combinators 3: `Adjacent Sibling Selector` (+)
* The `adjacent sibling selector` is used to select an element that is directly after another specific element.
* Sibling elements must have the same parent element, and "adjacent" means "immediately following".
* E.g., select the first `p` element that are placed immediately after `div` elements:

    ```css
        div + p {
            color: blue;
        }
    ```

# `css` Combinators 4: `General Sibling Selector` (~)
* The `general sibling selector` selects all elements that are next siblings of a specified element.
* E.g., select `p` elements that are next siblings of a `div` element:

    ```css
        div ~ p {
            color: blue;
        }
    ```

# `css` Pseudo-classes.
* A `pseudo-class` is used to define a special state of an element.
* E.g., it can be used to:
    1. Style an element when a user mouses over it
    2. Style visited and unvisited links differently
    3. Style an element when it gets focus

* Syntax:

    ```css
        selector:pseudo-class {
            property: value;
        }
    ```
# `css` Pseudo-classes 1: Anchor Pseudo-classes
* Links can be displayed in different ways:

    ```css
        /* unvisited link */
        a:link {
        color: #FF0000;
        }

        /* visited link */
        a:visited {
        color: #00FF00;
        }

        /* mouse over link */
        a:hover {
        color: #FF00FF;
        }

        /* selected link */
        a:active {
        color: #0000FF;
        }
    ```
* __NOTE__: `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

# `css` Pseudo-elements
* A `CSS pseudo-element` is used to style specified parts of an element.
* E.g., 
    1. Style the first letter, or line, of an element
    2. Insert content before, or after, the content of an element

* Syntax:

    ```css
        selector::pseudo-element {
            property: value;
        }
    ```

# `css Pseudo-elements` 1: The `::first-line` Pseudo-element
* The `::first-line` pseudo-element is used to add a special style to the _first line of a text_.
* __Note__: The `::first-line` pseudo-element can only be applied to block-level elements.
* The following properties apply to the ::first-line pseudo-element:
    1. font properties
    2. color properties
    3. background properties
    4. word-spacing
    5. letter-spacing
    6. text-decoration
    7. vertical-align
    8. text-transform
    9. line-height
    10. clear