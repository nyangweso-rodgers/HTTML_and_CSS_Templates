# CSS Flexbox Property

## Table Of Contents
- [Further Reading]()
   1. [w3Schools - CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)

# CSS Grid vs CSS Flexbox
* While  `Flexbox` helps with _one dimensional arrangement of elements_,  `CSS grid` is able to do _two dimensional arrangements_. i.e., `Flexbox`, allows you to either arrange elements _horizontally_ (in a row) or _vertically_ (in a column). But with `CSS Grid` you can align elements both _vertically and horizontally_.

# `Flex Container` vs. `Flex Item`
* `Flex Items` are the direct children of of a `flex container`.

# `Flex Container`
* A Flexible Layout must have a parent element with a `display: flex;`
* Direct child elements of the flexible container automatically becomes flexible items.
* The flex container __properties__ are:
    1. `flex-direction` - defines in which direction the container wants to stack the flex items. __Values__ include:
       1. `column` - stacks the flex items vertically (from top to bottom):
       2. `column-reverse` - stacks the flex items vertically (but from bottom to top):
       3. `row` - stacks the flex items horizontally (but from left to right):
       4. `row-reverse` - stacks the flex items horizontally (but from right to left):


    2. `flex-wrap` - specifies whether the flex items should wrap or not. __Values__ are:
       1. `wrap` - specifies that the flex items will wrap if necessary:
       2. `nowrap` - specifies that the flex items will not wrap (this is default):
       3. `wrap-reverse` - specifies that the flexible items will wrap if necessary, in reverse order:


    3. `flex-flow` - shorthand property for setting both the `flex-direction` and `flex-wrap` properties.


    4. `justify-content` - used to align the flex items: __Values__ are:
       1. `center` - aligns the flex items at the center of the container:
       2. `flex-start` - aligns the flex items at the beginning of the container (this is default):
       3. `flex-end` - aligns the flex items at the end of the container
       4. `space-around` - displays the flex items with space before, between, and after the lines:
       5. `space-between` - displays the flex items with space between the lines:


    5. `align-items` - used to align the flex items. __Values__ are:
       1. `center` - aligns the flex items in the middle of the container:
       2. `flex-start` - aligns the flex items at the top of the container:
       3. `flex-end` - aligns the flex items at the bottom of the container:
       4. `stretch` - stretches the flex items to fill the container (this is default):
       5. `baseline` - aligns the flex items such as their baselines aligns:


    6. `align-content` - used to align the flex lines. __Values__ are:
       1. `space-between` - displays the flex lines with equal space between them:
       2. `space-around` - displays the flex lines with space before, between, and after them:
       3. `stretch` - stretches the flex lines to take up the remaining space (this is default):
       4. `center` - displays the flex lines in the middle of the container:
       5. `flex-start` - displays the flex lines at the start of the container:
       6. `flex-end` - displays the flex lines at the end of the container: 