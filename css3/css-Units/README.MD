# css Units

## Table of Contents

# CSS Units
* __CSS Unit__ determines the size of a property you are setting for an element of its content.

# Absolute Units
* Units that are "__absolute__" are the same size regardless of the parent element or window size.

    Unit | Description
    |---------------------- | -------------------- |
    `px` | 1px = 1/96th of 1 inch (96px = 1 inch)
    `pt` | 1pt = 1/72th of 1 inch
    `mm` | 1mm = 1/10th of 1cm
    `cm` | Centimeters
    `pc` | 12pt = 1pc
    `in` | inches

# Relative Units
* __Relative units__ are useful for styling responsive sites because they scale `relative` to the parent or window size (depending upon the unit)
  
    Unit | Description | Use Case 
    |---------------------- | -------------------- | -------------------- |
    `rem` | relative to the font size of the root element (`html`) | particularly useful for setting font sizes and overall layout proportions that adapt to different screen sizes. They provide a responsive design that adjusts to changes in the root font size.
    `em` | Relative to the font size of the element | can be useful for creating proportional spacing within specific elements. However, it's important to note that using em units can lead to compounding effects when nesting elements with different font sizes. Careful consideration and testing are required to ensure desired results.
    `vh` | Relative to 1% of the viewport's height
    `vw` | Relative to 1% of the viewport's width
    `%` | Relative to 1% of the parent element
    `vmin` | Relative to the viewport's smaller dimension, 1vmin = max(1vh, 1vw)
    `vmax` | Relative to the viewport's larger dimension, vmax = max(1vh, 1vw)
    `ch` | Relative to the width of the glyph "O" of the element's font

* `vh`/`vw` (`viewport height`/`width`): These units are based on the size of the `viewport` and are particularly useful for achieving fluid layouts that adapt to different screen sizes. `vh` and `vw` units are commonly used for setting `font sizes`, ``padding``, and margin when you want elements to scale proportionally with the viewport dimensions. They are especially suitable for full-height or full-width elements.

# Viewport Height(`vh`)
* If we take `1vh` that means we take `1%` of the browser's height...