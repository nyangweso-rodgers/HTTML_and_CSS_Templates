# Bootstrap 5 css grid


# How it works
* __Replace instances of__ `.row` with `.grid`. The `.grid` class sets `display: grid` and creates a `grid-template` that you build on with your HTML.
* __Replace__ `.col-*` classes with `.g-col-*` classes. This is because our CSS Grid columns use the `grid-column` property instead of `width`.

# Compared to the default grid system
* __Gaps__ replaces __gutters__. The gap property replaces the horizontal `padding` from our default grid system and functions more like `margin`.

# Examples
# Example 1: Three columns
* Three equal-width columns across all viewports and devices can be created by using the `.g-col-4` classes. 