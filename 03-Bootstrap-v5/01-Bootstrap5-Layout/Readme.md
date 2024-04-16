# BS5 - Containers

## Table Of Contents

- [Further Reading]()
  - [MDB - Containers](https://mdbootstrap.com/docs/standard/layout/containers/)

* There are three different `containers` available in Bootstrap:

  1. `.container` which sets a `max-width` at each responsive breakpoint
  2. `.container-fluid`, which is `width: 100%` at all breakpoints
  3. `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint

* The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

  | .                | Extra Small (<576px) | Small (>=576px) | Medium (>=768px) | Large (>=992px) | X-Large (>=1200px) | XX-Large (>=1400px) |
  | ---------------- | -------------------- | --------------- | ---------------- | --------------- | ------------------ | ------------------- |
  | .container       | 100%                 | 540px           | 720px            | 960px           | 1140px             | 1320px              |
  | .container-sm    | 100%                 | 540px           | 720px            | 960px           | 1140px             | 1320px              |
  | .container-md    | 100%                 | 100%            | 720px            | 960px           | 1140px             | 1320px              |
  | .container-lg    | 100%                 | 100%            | 100%             | 960px           | 1140px             | 1320px              |
  | .container-xl    | 100%                 | 100%            | 100%             | 100%            | 1140px             | 1320px              |
  | .container-xxl   | 100%                 | 100%            | 100%             | 100%            | 100%               | 1320px              |
  | .container-fluid | 100%                 | 100%            | 100%             | 100%            | 100%               | 100%                |

# Default Container

- Our default **.container** class is a responsive, fixed-width container, meaning its **max-width** changes at each breakpoint.

# Responsive Containers

- Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply **max-width**s for each of the higher breakpoints. For example, **.container-sm** is 100% wide to start until the **sm** breakpoint is reached, where it will scale up with **md**, **lg**, **xl**, and **xxl**.

# Fluid containers

- Use **.container-fluid** to get a full width container that covers the entire width of the viewport.

# Resources
1. [getbootstrap.com/docs/5.0/layout/breakpoints/](https://getbootstrap.com/docs/5.0/layout/breakpoints/)