# `em` css unit

# Description

- Similar to `rem`, `em` is a relative unit of measurement. But unlike `rem`, `em` is relative to the font size of the parent element or the font-size of the nearest parent with a defined font size.

- Remarks:

  - If you need to scale an element to be consistent with the parent, then `em` is the right direction to go in. `em` is good for creating scalable and responsive designs.
  - It is recommended to use `em` for setting `margin` and `padding`. When you use em for `margin` and `padding`, they adjust according to the font size of the parent element. This creates a consistent design, especially when users adjust their browser's default font size. When you set `margin` or `padding` with `em`, the layouts also become more flexible and adaptable, and elements can scale in proportion.
  - `em` is also important for media queries to enhance responsiveness and adaptability.
