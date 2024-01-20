# HTML5

## Table of Contents

- [Overview of HTML](#Overview-of-HTML)

# Overview of HTML

## HTML5 Boilerplate

```html
<!DOCTYPE html>
<!--doctype tells the browser what version of HTML the page is written in.-->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!--UTF-8 is the standard character encoding-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--specifies the document mode for Internet Explorer. IE=edge is the highest supported mode.
        -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--This tag renders the width of the page to the width of the device's screen size.-->
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

# Definition of Terms

## HTML Elements

- are written using a start tag and an end tag and with content in between.**HTML documents** consists of HTML nested elements. in HTML, most elements are defined as **block-level** or **inline elements**.
- **Block Elements**
  - always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). e.g.,
    - div
    - h1 - h6
    - p
    - form
    - header
    - footer
    - section
- **Inline Elements**

  - are normally displayed without line breaks.e.g.,
    - a
    - strong
    - em
    - q
    - abbr
    - small
    - span

- **HTML Attributes**: provide additional information (modifies the tag), about an element or a tag, while also modifying them. most attributes have a value; the value modifies the attributez. e.g., width, align, src.

## Semantic HTML

- **Semantic HTML** adds essential meaning to the web page rather than just presentation. This lets web browsers, search engines, screen readers, RSS readers, and ultimately users understand it in a better way. i.e., used to define different parts of a webpage.
- Benefits include:
  - _Improve site's SEO position_: search engine crawlers need to distinguish between different types of data. Semantic tags tell what type of information is on a web page. Meaningful content in a logical hierarchy can easily rank your page higher.
  - _Help your site more accessible_: there are many users who depend upon a screen reader software to access the internet. Using a proper semantic tags would help them in easier navigation through these screen readers. This way, the site would be more accessible
  - _Closer to natural language_: though semantic tags won't change the way text is displayed, but they are closer to natural language. When a project grows, more pages are added. Having semantic tags, it's easier to maintain and orient new developers.

# HTML Best Practices

## 1. The `loading=lazy` attribute

- Performance tip. You can use the `loading=lazy` attribute to defer the loading of the image until the user scrolls to them.
  ```html
  <img src="image.jpg" loading="lazy" alt="Alternative Text" />
  ```

## 2. Window.opener

- Pages opened with `target="_blank"` allow the new page to access the original’s `window.opener`. This can have security and performance implications. Include `rel="noopener"` or `rel="noreferrer"` to prevent this.
  ```html
  <a href="https://markodenic.com/" target="_blank" rel="noopener">
    Marko's website
  </a>
  ```

## 3. Use `spellcheck` attribute
- Use the `spellcheck` attribute to define whether the element may be checked for spelling errors.

# Resources
1. 