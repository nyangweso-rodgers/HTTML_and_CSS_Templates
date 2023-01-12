# Responsive Web Design (RWD)

## Table Of Contents

# Responsive Web Design - The Viewport
* The __viewport__ is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

# Setting The Viewport
* You should include the following < meta > viewport element in all your web pages:
    ```css
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

* The __width=device-width__ part sets the width of the page to follow the __screen-width__ of the device (which will vary depending on the device).
* The __initial-scale=1.0__ part sets the initial zoom level when the page is first loaded by the browser.