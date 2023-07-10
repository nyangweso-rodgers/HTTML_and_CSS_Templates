# Web Applications (`HTML5`, `CSS3`, `Bootstrap 5` & `JavaScript`)
## Table of Contents
- [Different Types of Websites](#Different-Types-of-Websites)
  - Type 1 - Static Website
  - Type 2 - Single Page Applications
  - Type 3 - Server - Side Rendering

- [css3](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3)
    1. [css Selectors](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Selectors)
    2. [css Fonts](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Fonts)
    3. [css Display](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/css3/css-Display)
       1. css Flexbox
       2. css Grid


- [Bootstrap 5](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Bootstrap-v5)
    1. [Bootstrap 5 Layout](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Bootstrap-v5/bs5-layout)
    2. [Bootstrap 5 Components](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Bootstrap-v5/bs5-components)


- [Web Applications]()
    1. [Coming Soon Web App](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Web-Apps/Coming-Soon-Web-App)
    2. [Digital Time App](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Web-Apps/Digital-Time-Display-App)
    3. [Survey Apps](https://github.com/nyangweso-rodgers/Web-Applications/tree/main/Web-Apps/Survey-App)

- [Static Web App Templates]()
    1. [Web Page Layout]()

- [Further Reading]()
  1. [dev community - Different Types of Websites](https://dev.to/anuradha9712/different-types-of-websites-4im1)
  2. [freeCodeCamp - How Web Pages Get Rendered on the Browser – Different Methods Explained](https://www.freecodecamp.org/news/web-page-rendering-on-the-browser-different-methods/)
  3. [freeCodeCamp - Server Side Rendering in JavaScript – SSR vs CSR Explained](https://www.freecodecamp.org/news/server-side-rendering-javascript/)

# Different Types of Websites
# Type 1: Static Website
* Made of HTML, CSS, and JavaScript.
* We have to upload HTML pages to CDN to host them on the web and whenever we request those pages in a browser it would return them to us.
* So for every new page, we made a new request to the server.

# Type 2: Single Page Applications (SPA) or Client Side Rendering (CSR)
* A __SPA__ is an app that works inside a browser. __SPAs__ are structured as a single `HTML` page that has no preloaded content.
* Typical React/ Vue applications come under this category.

# How CSR Works
1. An `HTTP` request is made to the server.
2. The server receives the request, and responds by sending an empty `HTML` shell to the client along with a bunch of bundled `JavaScript`.
3. The client receives the empty `HTML` shell, and proceeds to process all of the `JavaScript`.
4. The `JavaScript` modifies the `DOM` extensively, which renders the final `HTML` for the end user.

# Type 3: Server-Side Rendering (SSR)
* `HTML` pages are built on the server-side after every page request.
* Server gets the data from various sources like databases, aggregates them into template files, and then sends the resulting `HTML` file back to the browser.
* `PHP` or `Nodejs` with templating engines like `EJS`, `jade`, `hbs` comes under this category.

# How SSR Works
1. An `HTTP` request is made to the server.
2. The server receives the request, and processes all (or most of) the necessary code right then and there.
3. The end result is a fully formed and easily consumed HTML page that can be sent to the client’s browser via the server’s response.

# Techniques Used to Check for SSR
1. __Check the page source__: 
    - If the `HTML` code is complete with all the content, including the `main` body, `images`, `text`, and so on, the site is likely using __SSR__.
    - On the other hand, if the `HTML` code is bare-bones, then it requires `JavaScript` to render the content. In this case, it's probably not using __SSR__.

2. __Check Google Cache__:
    - An easy way to determine if your content is rendering server side is to check the Google Cache.
    - Simply type in the URL you want to inspect like this with the `site:` operator into Google.
    - Generally speaking, anything you can visually see is server side rendering. If it's rendering with Javascript, more than likely you won't be able to see it:

3. __Disable `JavaScript`__:
    - You can also test if a site is using __SSR__ by disabling `JavaScript` on your browser. If the website's content is still visible without `JavaScript`, it is likely using __SSR__. If the website appears blank, it is not using __SSR__.

# Benefits of SSR
1. The main benefit of __SSR__ is page load speed. Page load speed is an important metric for user experience, and subsequently an important aspect of technical SEO. Google wants to consume pages fast, too.

2. When a page is rendered into `HTML` on the server, all of the heavy-lifting is taken care of. For this reason, when the response makes it to the client’s browser, there isn’t much work left for the browser to display the page. It’s ready to go upon delivery.

# Best Color Websites for Front-End Developers
1. [Color Hunt](https://colorhunt.co/)
2. [Grabient](https://www.grabient.com/)
3. [Gradient Hunt](https://gradienthunt.com/)
4. [ColorKit](https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/)
5. [Khroma](https://www.khroma.co/train)

# Platforms Used to Know Frameworks Webiste is built on
* [Wappalyzer](https://www.wappalyzer.com/) - Find out the technology stack of any website. Create lists of websites that use certain technologies, with company and contact details. Use our tools for lead generation, market analysis and competitor research.

* [BuiltWith - Web Technology Profiler](https://builtwith.com/): Enter the website there, frameworks, technologies, ad-platforms everything will be displayed.

# Web Performance Tracking Tools
1. __Google PageSpeed Insights__ - measures the performance of your website on both mobile and desktop devices, and provides actionable recommendations for improving its speed and usability.

2. __GTmetrix__ - This tool analyzes your website's performance and provides a detailed report on its load time, page size, and other performance metrics. It also offers recommendations for optimizing your website's speed and performance.


3. __Pingdom__ - This tool monitors your website's uptime and performance, and alerts you if there are any issues or downtime. It also provides detailed reports on your website's performance, including load time, page size, and more.


4. __WebPageTest__ - This tool allows you to test your website's speed and performance from multiple locations around the world, and provides a detailed report on its performance, including load time, page size, and other metrics.


5. __Kinsta Page Speed__ - This tool provides a detailed analysis of your website's speed and performance, including load time, page size, and other performance metrics. It also offers actionable recommendations for improving your website's speed and performance.
# Websites to Improve on Frontend Skills
1. [Dribble](https://dribbble.com/)
    - Discover new techniques, practice recreating designs, and stay up-to-date with the latest trends.

2. [Dev Challenges](https://devchallenges.io/)
3. [JavaScript30](https://javascript30.com/)
4. [Frontend Practice](https://t.co/QHDie8gGzH)
5. [Codepen Challenges](https://codepen.io/challenges)
6. [CSSBattle](https://cssbattle.dev/)
7. [Codewell](https://www.codewell.cc/challenges)

# Websites for Designing Logo
1. [Logojoy](https://t.co/RNFiu8F7ao)
2. [LogoMkr](https://logomakr.com/)
3. [DesignEvo](https://www.designevo.com/)
4. [FreeLogoDesign](https://t.co/jBLnwmg1wd)
5. [Ucraft](https://www.ucraft.com/)
6. [Looka](https://looka.com/)

# Free Sites to Download Images For a Website
1. [unsplash.com](https://unsplash.com/)
2. [pexels.com](https://www.pexels.com/)
3. [pixabay.com](https://pixabay.com/)
4. [StockSnap.io](https://stocksnap.io/)
5. [freeimages.com](https://www.freeimages.com/)

# Content Management Systems For Website Hosting
1. [SQUARESPACE](https://www.squarespace.com/?clickid=XpqyI%3A0ZtxyPTg%3AV9Mwcc0e-UkFxWCVr1Xd3VI0&irgwc=1&utm_medium=pp&utm_source=CLICKDEALER%20ASIA%20PTE.%20LTD.&utm_campaign=CLICKDEALER%20ASIA%20PTE.%20LTD.&channel=pp&subchannel=1934383&source=CLICKDEALER%20ASIA%20PTE.%20LTD.)

# VS Code Extensions for Web Applications
1. [JavaScript Code Snippet](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - contains code snippets for JavaScript in ES6 syntax for Vs Code editor (supports both JavaScript and TypeScript).
2. [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode) - screenshot for the code
3. [All Autocomplete](https://marketplace.visualstudio.com/items?itemName=Atishay-Jain.All-Autocomplete)
4. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
5. [Auto Import - ES6, TS, JSX, TSX](https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import) - Automatically finds, parses and provides code actions and code completion for all available imports. Works with JavaScript (ES6) and TypeScript (TS)
6. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically rename HTML tags.
7. [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
8. [Google Fonts](https://marketplace.visualstudio.com/items?itemName=lior-chamla.google-fonts) - Browse google fonts from VSCode and also get the CSS import instantly.
9. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
10. [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)