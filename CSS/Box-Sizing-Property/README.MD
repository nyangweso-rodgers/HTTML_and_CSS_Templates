# CSS Box-Sizing Property

## Table Of Contents

# CSS Box Sizing
* The CSS __box-sizing__ property allows us to include the padding and border in an element's total width and height.

# Without the CSS box-sizing Property
* By default, the width and height of an element is calculated like this:
    - width + padding + border = actual width of an element
    - height + padding + border = actual height of an element

* This means: When you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height).

* The __box-sizing__ property solves this problem.

# With the CSS box-sizing Property
* The __box-sizing__ property allows us to include the padding and border in an element's total width and height.

* If you set __box-sizing: border-box;__ on an element, padding and border are included in the width and height: