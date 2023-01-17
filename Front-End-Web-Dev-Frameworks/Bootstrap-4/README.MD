# Bootstrap 4

## Table Of Contents
- [Further Reading]()
    - [Learn Bootstrap 4 in 5 minutes - A quick tutorial to get you started](https://www.freecodecamp.org/news/learn-bootstrap-4-in-5-minutes-da94728efe41/)

# Overview Of Bootstrap 4
* __Bootstrap 4__ was released in Jan 2018 after being in Alpha for two years.

# Important Changes in Bootstrap 4

# 1:Flutter buttons

# 2:The Media Queries are Better
* __Bootstrap v3__ had too few breakpoints for its grid, as the lowest one, __xs__, was at 768px. A lot of traffic usually comes from screens narrower than that, so this has been frustrating for many developers.

* New breakpoint, __x1__ has been added. This one takes the role __lg__ used to have, and pushes the rest of the breakpoints downwards, making the range go all the way down to __576 px__. This makes it easier for you to construct grids which work well across all screen sizes.

# 3:Flexbox support gives you more flexibility
* The famous Bootstrap grids are now created with Flexbox instead of floats. At first sight, this doesn’t make a huge difference for you as a developer, as most grid layouts work exactly the same. However, it does open up a few more possibilities.

* Previously, you had to define the width of each column (from 1 to 12). Now you can define the width of one column, and then let the other ones be automatically set by Flexbox.

# Flexbox classes
* __Bootstrap 4__ also comes with a bunch of classes you can apply to control both Flexbox containers and items. To turn an element into a Flexbox container, simply give it the class of __d-flex__.

    ```html
        <div class='d-flex'> Flexbox container</div>
    ```

# 4:Control spacing with classes
* This one is pretty cool. You can now control the __padding__ and __margins__ using the __p-*__ and __m-*__ classes. The range goes from 0.25 rem to 3 rem through applying the numbers from 0 to 5.

* For example, let’s give our Flexbox container a p-5 class, in order to create as much padding as possible:

    ```html
        <div class="d-flex p-5"></div>
    ```

* You can also add __t__, __b__, __r__ og __l__ if you want spacing on specific sides (top, bottom, right, left), like this:

# 5:From pixels to rems
* __Bootstrap 4__ has swapped out pixels with relative units of measurements (rems) in all places except media queries and grid behaviours. This means more flexibility and responsiveness, as rem units aren’t absolute, which pixels are.

* With __rems__ all font sizes are relative to the root element (the __html__ tag), and by default, __1rem__ equals __16px__. However, if you change the font-size to, say, 50% in the root element, then __1rem__ will equal __8px__ throughout the app.

* Note that this switch doesn’t mean that you need to use __rems__ when you’re applying your own styles on your website.

# 6:Cards replace panels, wells, and thumbnails
* __Bootstrap__ also comes with a whole new component called __cards__, which replace [panels](https://getbootstrap.com/docs/3.3/components/#panels), [wells](https://getbootstrap.com/docs/3.3/components/#wells), and [thumbnails](https://getbootstrap.com/docs/3.3/components/#thumbnails). A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colours, and powerful display options.

# 7:Goodbye IE9
* __Bootstrap v4__ has dropped support for IE8, IE9, and iOS 6. v4 is now only IE10+ and iOS 7+. For sites needing either of those, use v3.