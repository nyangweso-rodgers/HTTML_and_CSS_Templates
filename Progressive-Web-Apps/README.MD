# Progressive Web Apps (PWA)

## Table of Contents
- [Further Information]()
  - [dev community - Progressive Web Apps (PWA)](https://dev.to/anuradha9712/progressive-web-apps-1dd9)
  - [web.dev - Progressive Web Apps (PWA)](https://web.dev/progressive-web-apps/)

# Overview Of PWAs
* PWAs are alternatives to creating a native mobile app. It is a web application that is designed to provide an app-like experience to users on their mobile devices or desktop browsers, without the need to download and install a native app from an app store.

* Using __PWAs__ we can create a mobile app with vanilla javascript that runs inside a browser just like a normal website does but which could also consist of the features of native mobile apps so that when we run that web app on a mobile it could do things that a native app could do as well like:
  * Be installed onto the home screen of the mobile
  * Access the application when offline
  * Get push notifications

# Advantages of PWA
* Can be made using vanilla JS, HTML & CSS
* Accessed via a web address and not the app store
* Can be installed on the mobile home screen
* Runs in the browser but with access to device features
* Can be used offline
* Can use web push notifications

# Technical components of PWA
1. The Web App Manifest
2. Application Shell
3. Service Workers

# Component 1 - Web App Manifest
* Single JSON file which provides information to the app, like:
  * name of the application
  * home screen icon for the mobile
  * colour theme
  * start URL

* By providing the above information, the browser would know how to display our app properly on a mobile when it's installed onto it.

* By using the Web App Manifest, PWAs can be easily installed on a user's device and provide a more native-like experience, even when accessed through a browser.
* On the root of the project, create a file called `manifest.json` with the following:
    * `name` - the name of your app, this is going to be shown when you click on the application on the splash screen while the application loads in the mobile.
    * `short_name`: the name that displays underneath the icon on the home screen when someone installs your application.
    * `start_url`: the URL of the page that actually opens up when the user taps on the icon when we install it onto the home screen.
    * `display`: it specifies the developers' preferred display mode for the website. By selecting "standalone" it's not going to show the other browser things like the address bar at the top.
    * `icons`: An array of objects and each object represents a different icon. Depending on the device we are installing the app on, it's going to use a different-sized icon.

* Don't forget to include this `manifest.json` file inside your all HTML files like this:

    ```html
        <link rel="manifest" href="/manifest.json" />
    ```

# Component 2 - Application Shell
* The app shell is the minimum HTML, CSS, and javascript that is required to power the user interface of PWAs. It represents the static parts of the app that remain consistent across different views or pages. This includes components like the header, footer, navigation menu, and other UI elements that are visible on every page.

* By caching the App Shell in the service worker, PWAs can load instantly and provide a smooth user experience even in offline or low connectivity scenarios.

* The App Shell provides a consistent UI and navigation experience throughout the app, making it feel more like a native application.