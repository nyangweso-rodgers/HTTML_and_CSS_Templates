# CSS Grid

## Table Of Contents
- [Introduction to CSS Grid Layout](#Introduction-to-CSS-Grid-Layout)
- [CSS Grid vs CSS Flexbox](#CSS-Grid-vs-CSS-Flexbox)
- [Further Reading]()
    - []()

# Introduction to CSS Grid Layout
* The __CSS Grid Layout__ Module offers a grid-based layout system, with _rows_ and _columns_, making it easier to design web pages without having to use floats and positioning.

# CSS Grid vs CSS Flexbox
* The main difference is that while __Flexbox__ helps with _one dimensional arrangement of elements_, __CSS grid__ is able to do _two dimensional arrangements_. i.e., __Flexbox__, allows you to either arrange elements _horizontally_ (in a row) or _vertically_ (in a column). But with __CSS Grid__ you can align elements both _vertically and horizontally_.

# CSS Grid Container
* To make an HTML element behave as a grid container, you have to set the __display__ property to __grid__ or __inline-grid__.

# The grid-template-columns Property
* The __The grid-template-columns__ property defines the _number of columns_ in your grid layout, and it can define the width of each column. The value is a space-separated-list, where each value defines the width of the respective column.

* If you want your grid layout to contain 4 columns, specify the width of the 4 columns, or "auto" if all columns should have the same width.

    ```css
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto;
        }
    ```
* _Note_: _If you have more than 4 items in a 4 columns grid, the grid will automatically add a new row to put the items in._

* The __grid-template-columns__ property can also be used to specify the size (width) of the columns.
    ```css
        .grid-container {
            display: grid;
            grid-template-columns: 80px 200px auto 40px;
        }
    ```

# The grid-template-rows Property
* The __grid-template-rows__ property defines the height of each row. The value is a space-separated-list, where each value defines the height of the respective row: