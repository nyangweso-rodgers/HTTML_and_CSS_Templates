# `rem` (Root Em) css unit

# Description

- `rem` unit stands for "**root em**". It is a relative unit of measurement that is relative to the font size of the root element.
- `1rem` is equal to the font size of the root element. The root element defaults to `16px` in many browsers, so `1rem` = `16px`.

- Remarks:
  - `rem` is particularly useful for setting font sizes and overall layout proportions that adapt to different screen sizes. They provide a responsive design that adjusts to changes in the root font size.
  - Using `rem` or `em` for padding or margin also offers advantages in terms of providing a scalable and maintainable design. When you change the font size at the top level, all `rem` values automatically gets updated and adjusts according to the base front size. `rem` or `em` should be used for **margin** or **padding** depending on if you want the element to be relative to the root element or the parent.
