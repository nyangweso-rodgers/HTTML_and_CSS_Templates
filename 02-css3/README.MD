# CSS

## Introduction to CSS

- [Overview of CSS]()

- [CSS Selectors](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Selectors)

- [CSS Units](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units)

  - [Absolute Units]()
  - [Relative Units]()

- [Introduction to CSS3](#Introduction-to-CSS3)

# Overview of CSS

# CSS Selectors

- **css selectors** are used to find/select html elements for styling.
- css selectors can be divided into 5 Categories:
  1. Simple Selectors (select elements based on `name`, `id` or `class`)
  2. Combinator Selectors (select elements based on a specific relationship between them)
  3. `Pseudo-class selectors` (select elements based on certain state)
  4. `Pseudo-element selectors` (select and style part of an element)
  5. Attribute Selectors (select elements based on an attribute or attribute value)

## 1. CSS Universal Selector (`*`)

- Used to select all HTML elements in the page.

  ```css
  * {
    color: black;
  }
  ```

## 2. CSS Grouping Selector

- Grouping selector selects all elements with the same style definition.

  ```css
  p,
  h1,
  h2 {
    text-align: center;
  }
  ```

## 3. CSS Class Selector

```css
/* select paragrahs with id='demo' */
p.demo {
  color: black;
}
```

## 4. CSS Combinators

- A **combinator** is something that explains the relationship between the selectors.
- There are four different combinators in CSS:
  1. descendant selector (space)
  2. child selector (>)
  3. adjacent sibling selector (+)
  4. general sibling selector (~)

### 4.1. Descendant Selector

- The **descendant selector** matches all elements that are descendants of a specified element.
- E.g., to extract all `p` elements inside `div` elements:

  ```css
  div p {
    background-color: blue;
  }
  ```

### 4.2. Child Selector (`>`)

- The **child selector** selects all elements that are the children of a specified element.
- E.g., to select all `p` elements that are children of a `div` element:

  ```css
  div > p {
    color: blue;
  }
  ```

### 4.3. Adjacent Sibling Selector (`+`)

- The **adjacent sibling selector** is used to select an element that is directly after another specific element.
- Sibling elements must have the same parent element, and "adjacent" means "immediately following".
- E.g., select the first `p` element that are placed immediately after `div` elements:

  ```css
  div + p {
    color: blue;
  }
  ```

### 4.4. General Sibling Selector (`~`)

- The **general sibling selector** selects all elements that are next siblings of a specified element.
- E.g., select `p` elements that are next siblings of a `div` element:

  ```css
  div ~ p {
    color: blue;
  }
  ```

## 5. CSS Pseudo-classes.

- A **pseudo-class** is used to define a special state of an element.
- E.g., it can be used to:

  1. Style an element when a user mouses over it
  2. Style visited and unvisited links differently
  3. Style an element when it gets focus

- Syntax:

  ```css
  selector:pseudo-class {
    property: value;
  }
  ```

### 5.1. Anchor Pseudo-classes

- Links can be displayed in different ways:

  ```css
  /* unvisited link */
  a:link {
    color: #ff0000;
  }

  /* visited link */
  a:visited {
    color: #00ff00;
  }

  /* mouse over link */
  a:hover {
    color: #ff00ff;
  }

  /* selected link */
  a:active {
    color: #0000ff;
  }
  ```

* **NOTE**:
  - `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective!
  - `a:active` MUST come after `a:hover` in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

# Common CSS Mistakes

## 1. Not Using fallback fonts

- every computer doesn't have every font that yu use.
- also, imported fonts like google fonts, sometimes for some reason may not get downloaded
- so it's always better to use fallback fonts

  ```css
  body {
    font-family: Roboto, Arial, sans-serif;
  }
  ```

## 2. Using `px` for everything

- if we use `px` units, every user will see the same sized elements and is not good as every user has a different monitor.
- instead of using `px` units, use `relative` units like `rem`, `em`, the elements will scale based on the size of the monitor screen size.

  ```css
  p {
    font-size: 1.3rem;
    line-height: 1.6;
    padding: 1em;
  }
  ```

## 3. Complicating Selectors

- example:

  ```css
  header .navigation ul.nav-links {
    line-style-type: none;
  }
  ```

- when you can use direct class for a particular element, you should not complicate by nesting with different selectors

  ```css
  .nav-links {
    line-style-type: none;
  }
  ```

## 4. Repeating the same code

- when there are same styles for multiple elements, don't repeat your code, just group selectors

  ```css
  #home-section {
    background-color: #f5f5f5;
    color: #202020;
  }
  #about-section {
    background-color: #f5f5f5;
    color: #202020;
  }
  ```

- to group selectors, separate each selector with a comma:

  ```css
  #home-section,
  #about-section {
    background-color: #f5f5f5;
    color: #202020;
  }
  ```

## 5. Using Color Names

- avoid using color names since every browser doesn't display the same color
- if you want the colors to function the sane in all browsers, use `hex`, `rgb` or `hsl`

  ```css
  .box {
    background-color: #f0f0f0;
  }
  ```

## 6. `z-index` Mistakes

- many developers use a really high `z-index` value to put an element in front.
- and it becomes difficult when you want to put another elements in front of others. The `z-index` value starts increasing much higher.

  ```css
  .modal-container {
    z-index: 123;
  }
  .modal {
    z-index: 123456;
  }
  ```

- the solution is to use moderate values, so that it doesn't become difficult for a long run

  ```css
  .modal-container {
    z-index: 1;
  }
  .modal {
    z-index: 2;
  }
  ```

## 7. Not Using Shorthand

- there are many properties which you can use both shorthand and longhand methods:

  ```css
  .container {
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 0;
    margin-right: 0;
  }
  ```

- most of these cases can be simplified by using the shorthand method

  ```css
  .container {
    margin: 1em 2em 0 0;
  }
  ```

## 8. Additional Mistakes include:

1. Using `!important` more oftenly
2. Using `inline css`
3. Not organizing your css
4. inconsistent naming
5. using CSS's @import
6. Using ids insteadd of classes
7. Using only one stylesheet for everything

# Resources

1. [w3Schools - CSS Pseudo-class](https://www.w3schools.com/css/css_pseudo_classes.asp)
