# Bootstrap 5

## Table Of Contents

# Introduction to Bootstrap 5

- [Bootstrap 5](https://www.w3schools.com/bootstrap5/index.php) (released in 2021) is the newest version of [Bootstrap](https://www.w3schools.com/bootstrap/default.asp) (released in 2013); with new components, faster stylesheets, more responsiveness etc. It supports the latest, stable releases of all major browsers and platforms. However, Internet Explorer 11 and down is not supported.

- The main differences between Bootstrap 5 and Bootstrap 3 & 4, is that Bootstrap 5 has switched to **JavaScript** instead of **jQuery**git.

# Available breakpoints

- Bootstrap includes six default breakpoints, sometimes referred to as grid tiers, for building responsively.

  | Breakpoint        | Class infix | Dimensions |
  | ----------------- | ----------- | ---------- |
  | X-Small           | None        | 0 -576px   |
  | Small             | sm          | >= 576px   |
  | Medium            | md          | >= 768px   |
  | Large             | lg          | >= 992px   |
  | Extra Large       | xl          | >= 1200px  |
  | Extra extra large | xxl         | >= 1400px  |

- Each breakpoint size was chosen to be a multiple of 12 and to be representative of a subset of common device sizes and viewport dimensions. They don’t specifically target every use case or device, but the provide ranges provide a strong and consistent foundation to build on for nearly any device.

# Bootstrap 5 CDN

```html
<!-- Latest compiled and minified CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
```

# HTML5 with Bootstrap 5 Boilerplate

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title></title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Google Fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Sofia|Trirong|Actor"
    />
    <!-- Font Awesome -->
    <script
      src="https://kit.fontawesome.com/592084ced4.js"
      crossorigin="anonymous"
    ></script>

    <!-- Bootstrap icons -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />

    <!-- Latest compiled and minified CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container">
          <span class="navbar-brand">Bootstrap 5 Boilerplate</span>
        </div>
      </nav>
    </header>
    <main>
      <section class=""></section>
      <section class=""></section>
    </main>
    <footer class=""></footer>

    <script src="script.js" async defer></script>
  </body>
</html>
```

## CSS Template

```css
body {
  font-family: "Trirong", serif;
}
section {
  border: 2px dotted #ff004d;
  padding: 40px 0;
}
```

# Bootstrap 5 Icons

# Resources

1. [MDB - Bootstrap 5](https://mdbootstrap.com/docs/standard/layout/grid/)
