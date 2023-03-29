# The Position Property 

## Table Of Contents
- [Further Reading]()
    - [CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)

# The Position Property
* The __position__ property specific the type of postioning method used for an element.

* There are five different position values:
    - static
    - relative
    - fixed
    - absolute
    - sticky

* Elements are then positioned using the __top__, __bottom__, __left__ and __right__ properties.

* __Note__: _these properties will not work unless the __position__ property is ste first_

# Position: static;
* HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties.

* An element with __position: static__; is not positioned in any special way; it is always positioned according to the normal flow of the page:

# Position: relative;
* An element with __position:relative__; is positioned relative to its normal position.

* Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

# Position: fixed;
* An element with __position:fixed;__ is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

* A fixed element does not leave a gap in the page where it would normally have been located.

# Position: absolute;
* An element with __position: absolute;__  is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

* However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

* __Note__: _Absolute positioned elements are removed from the normal flow, and can overlap elements._

# Position: sticky;
* An element with __position: sticky__; is positioned based on the user's scroll position.

* A sticky element toggles between __relative__ and __fixed__, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).