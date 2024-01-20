# css Units

## Table of Contents
- css Units
    1. Absolute Units
       1. [`px` unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/px-Unit)
       2. [`%` Unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/percentage-Unit)


    2. Relative Units
       1. [`em` Unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/em-Unit)
       2. [`rem` Unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/rem-Unit)
       3. [`vh` Unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/vh-Unit)
       4. [`vw` Unit](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Units/vw-Unit)

- [Further Reading]()
    1. [Hashnode - CSS for Beginners Part 4 (CSS Units + Challenges)](https://blog.amenas.me/css-for-beginners-part-4-css-units-challenges)

# CSS Units
* __CSS Unit__ determines the size of a property you are setting for an element of its content.

# Absolute Units
* Units that are "__absolute__" are the same size regardless of the parent element or window size.

    Unit | Description
    |---------------------- | -------------------- |
    `pt` | 1pt = 1/72th of 1 inch
    `mm` | 1mm = 1/10th of 1cm
    `cm` | Centimeters
    `pc` | 12pt = 1pc
    `in` | inches

# Relative Units
* __Relative units__ are useful for styling responsive sites because they scale `relative` to the parent or window size (depending upon the unit)
  
    Unit | Description | Use Case 
    |---------------------- | -------------------- | -------------------- |
    `vmin` | Relative to the viewport's smaller dimension, 1vmin = max(1vh, 1vw)
    `vmax` | Relative to the viewport's larger dimension, vmax = max(1vh, 1vw)
    `ch` | Relative to the width of the glyph "O" of the element's font