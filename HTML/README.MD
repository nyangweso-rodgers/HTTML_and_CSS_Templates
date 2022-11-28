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

# Tags Sheet - Structural Elements
Index | Tag | Meaning | 
| ------------- | ------------------ | ---------------------- |
1 | < meta > | - Represent information about any other data. Not Displayed on the web page. Describe content of the page | 
2 | < !DOCTYPE html > | - Represent version of the HTML docs. - Represent version 5 of HTML. 
3 | < header > | Used to define __header__ of the __article__. Multiple __header__ can be used
4 | < main > | Represents main content of the page
5 | < nav > | Represents collection of links. All navigation are placed inside __nav__ tag
6 | < article > | Represent the self container. 
7 | < pre > | Represents the pre formatted text. Input is equal to output.
8 | < cite > | Represents identity of the of the content. Displayed in italic form
9 | < details > | A user can open and hide to see the elem. Defines the details of the < summary > tag
10 | < section > | Represents block of documents. Multiple section can be in a document
11 | < head > | Container of Meta data
12 | < abbr > | Defines the short form of an element. 
13 | < mark > | Used to highlight a text. Default background is yellow and text is white
14 | < address > | Defines content information of the owner like email, phone, name e.t.c.,
15 | < footer > | Defines footer of the page and contains information about the author or copyright
16 | < aside > | Indirect information about the main docs. Generally placed aside from the main content.
17 | < code > | Represents computer code
18 | < select > | Used to create a dropdown menu
19 | < summary > | Defines a summary for details content. This element kept inside the < details > tag. Used to create toggle in open and hide state.