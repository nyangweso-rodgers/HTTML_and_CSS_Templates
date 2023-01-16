# CSS Media Queries

## Table Of Contents
- [Introduction to CSS3 Media Queries](#Introduction-to-CSS3-Media-Queries)
- [Further Reading]()
    - [CSS Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)

# Introduction to CSS3 Media Queries
* __Media queries__ can be used to check many things, such as:
    - width and height of the viewport
    - width and height of the device
    - orientation (is the tablet/phone in landscape or portrait mode?)
    - resolution

* Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

# Media Query Syntax
```css
    @media not|only mediatype and (expression) {
        css code;
    }
```

* The result of the query is true if the specified media type matches the type of device the document is being displayed on and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules.

* Unless you use the not or only operators, the media type is optional and the all type will be implied.

* You can also have different stylesheets for different media:

    ```html
        <link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
    ```

# CSS3 Media Types
| Value | Decsription
| --------- | ---------|
all | Used for all media type devices
print | Used for printers
screen | Used for computer screens, tablets, smart-phones etc.
speech | Used for screenreaders that "reads" the page out loud