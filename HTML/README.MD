# HTML

## Table of Contents
- [Overview of HTML](#Overview-of-HTML)
- [Inline Elements](#Inline-Elements)
- [Semantic HTML](#Semantic-HTML)
    - [Benefits of using Semantic HTML](#Benefits-of-using-Semantic-HTML)

# Overview of HTML
```html
    <!DOCTYPE html> <!--doctype tells the browser what version of HTML the page is written in.-->
    <html lang="en">
    <head>
        <meta charset="UTF-8"> <!--UTF-8 is the standard character encoding-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--specifies the document mode for Internet Explorer. IE=edge is the highest supported mode.
        -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--This tag renders the width of the page to the width of the device's screen size.-->
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <script src="index.js"></script>
    </body>
    </html>
```
# Block Elements
always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can. __Examples__ include:
* div
* h1 - h6
* p
* form
* header
* footer
* section

# Textual Elements
* p
* ul
* ol
* li
* blockquote

# Inline Elements
are normally displayed without line breaks.e.g.,
* a
* strong
* em
* q
* abbr
* small
* span

# Semantic HTML
* __Semantic HTML__ adds essential meaning to the web page rather than just presentation. This lets web browsers, search engines, screen readers, RSS readers, and ultimately users understand it in a better way. i.e., used to define different parts of a webpage.

# Benefits of using Semantic HTML
* _Improve site's SEO position_:  search engine crawlers need to distinguish between different types of data. Semantic tags tell what type of information is on a web page. Meaningful content in a logical hierarchy can easily rank your page higher.
* _Help your site more accessible_: there are many users who depend upon a screen reader software to access the internet. Using a proper semantic tags would help them in easier navigation through these screen readers. This way, the site would be more accessible
* _Closer to natural language_: though semantic tags won't change the way text is displayed, but they are closer to natural language. When a project grows, more pages are added. Having semantic tags, it's easier to maintain and orient new developers.

# Structural Elements
* __article__: specifies independent, self-contained content. used in:
* __aside__: defines some content aside from the content it is placed in (like a sidebar).
* details
* figcaption
* figure
* footer
* __header__: represents a container for introductory content or a set of navigational links. typically contains:
    - h1 to h6
    - logo or icon
    - authorship information
* main
* mark
* __nav__: defines a set of navigation links.
* __section__: defines the section of a document: e.g.,
    - chapters
    - introduction
    - new items
    - contact information
* summary
* __time__: defines a date/time