# Web Applications (`HTML5`, `CSS3`, `Bootstrap 5` & `JavaScript`)

## Table of Contents

1. [Project Requirements](#Project-Requirements)

# Project Requirements

## VS Code Extensions

1. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
   - Improve your code commenting by annotating with alert, informational, TODOs, and more!
2. [Error Lens]()
   - improves highlighting of error messages and warnings.
3. [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
   - Take beautiful screenshots of your code
   - To snap a shot of your code, use (`Ctrl+Shift+P` on Windows and Linux, `Cmd+Shift+P `on OS X) and search for `CodeSnap`. Then select the area of your code to screenshot, adjust the width, and click the shutter button. You can also take a snapshot by selecting code, right clicking, and selecting CodeSnap.
4. [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
   - Mark lines and jump to them
   - These lines are noted with a blue bookmark icon. Bookmarks can be organized and named to allow for quick reference.
5. [CodiumAI - Integrity Agent powered by GPT-3.5&4](https://marketplace.visualstudio.com/items?itemName=Codium.codium)
6. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
   - With GitLens, you can gain powerful insights into your repositories directly in VSCode. Annotations are integrated throughout the editor, displaying tons of Git information.
7. Icons Themes:
   - [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
   - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
   - [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons)
8. [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
   - colorful extension that you can use to make indentation comprehensible, aiding in maintaining well-organized and properly indented code.
   - Each indent is marked with a different color, alternating between 4 different colors.
   - This extension is particularly useful for languages that rely heavily on indentation such as YAML or Python.
9. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
   - file path productivity tool. It has intelligent auto-completion that dynamically suggests file paths and directory names as you type. It can minimize errors due to incomplete or wrong file paths.
10. [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
    - Subtly change the workspace color of your workspace. Ideal when you have multiple VS Code instances and you want to quickly identify which is which.
11. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - Code formatter using prettier
12. [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
    - is an free AI coding assistant. It can help to increase your productivity by providing real-time code completions.
13. [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
    - highlight TODOs, FIXMEs, and any keywords, annotations..

## Color Websites for Front-End Developers

1. [Color Hunt](https://colorhunt.co/)
2. [Grabient](https://www.grabient.com/)
3. [Gradient Hunt](https://gradienthunt.com/)
4. [ColorKit](https://colorkit.co/palette/809bce-95b8d1-b8e0d4-d6eadf-eac4d5/)
5. [Khroma](https://www.khroma.co/train)

## How to know which Frameworks Website is built on.

- [Wappalyzer](https://www.wappalyzer.com/) - Find out the technology stack of any website. Create lists of websites that use certain technologies, with company and contact details. Use our tools for lead generation, market analysis and competitor research.

- [BuiltWith - Web Technology Profiler](https://builtwith.com/): Enter the website there, frameworks, technologies, ad-platforms everything will be displayed.

# Web Performance Tracking Tools

1. **Google PageSpeed Insights** - measures the performance of your website on both mobile and desktop devices, and provides actionable recommendations for improving its speed and usability.

2. **[GTmetrix](https://gtmetrix.com/reports/nyangweso-rodgers.github.io/bJFwGcR0/)** - This tool analyzes your website's performance and provides a detailed report on its load time, page size, and other performance metrics. It also offers recommendations for optimizing your website's speed and performance.

3. **Pingdom** - This tool monitors your website's uptime and performance, and alerts you if there are any issues or downtime. It also provides detailed reports on your website's performance, including load time, page size, and more.

4. **WebPageTest** - This tool allows you to test your website's speed and performance from multiple locations around the world, and provides a detailed report on its performance, including load time, page size, and other metrics.

5. **Kinsta Page Speed** - This tool provides a detailed analysis of your website's speed and performance, including load time, page size, and other performance metrics. It also offers actionable recommendations for improving your website's speed and performance.

# Different Types of Websites

## 1. Static Website

- Made of HTML, CSS, and JavaScript.
- We have to upload HTML pages to CDN to host them on the web and whenever we request those pages in a browser it would return them to us.
- So for every new page, we made a new request to the server.

## 2. Single Page Applications (SPA) or Client Side Rendering (CSR)

- A **SPA** is an app that works inside a browser. **SPAs** are structured as a single `HTML` page that has no preloaded content.
- Typical React/ Vue applications come under this category.

- How **CSR** Works:

  - An `HTTP` request is made to the server.
  - The server receives the request, and responds by sending an empty `HTML` shell to the client along with a bunch of bundled `JavaScript`
  - The client receives the empty `HTML` shell, and proceeds to process all of the `JavaScript`.
  - The `JavaScript` modifies the `DOM` extensively, which renders the final `HTML` for the end user.

## 3. Server-Side Rendering (SSR)

- `HTML` pages are built on the server-side after every page request.
- Server gets the data from various sources like databases, aggregates them into template files, and then sends the resulting `HTML` file back to the browser.
- `PHP` or `Nodejs` with templating engines like `EJS`, `jade`, `hbs` comes under this category.

- How **SSR** Works

  - An `HTTP` request is made to the server.
  - The server receives the request, and processes all (or most of) the necessary code right then and there.
  - The end result is a fully formed and easily consumed HTML page that can be sent to the client’s browser via the server’s response.

- Techniques Used to Check for **SSR**:

  1. **Check the page source**:

     - If the `HTML` code is complete with all the content, including the `main` body, `images`, `text`, and so on, the site is likely using **SSR**.
     - On the other hand, if the `HTML` code is bare-bones, then it requires `JavaScript` to render the content. In this case, it's probably not using **SSR**.

  2. **Check Google Cache**:

     - An easy way to determine if your content is rendering server side is to check the Google Cache.
     - Simply type in the URL you want to inspect like this with the `site:` operator into Google.
     - Generally speaking, anything you can visually see is server side rendering. If it's rendering with Javascript, more than likely you won't be able to see it:

  3. **Disable `JavaScript`**:
     - You can also test if a site is using **SSR** by disabling `JavaScript` on your browser. If the website's content is still visible without `JavaScript`, it is likely using **SSR**. If the website appears blank, it is not using **SSR**.

- **Benefits of SSR**:
  - The main benefit of **SSR** is page load speed. Page load speed is an important metric for user experience, and subsequently an important aspect of technical SEO. Google wants to consume pages fast, too.
  - When a page is rendered into `HTML` on the server, all of the heavy-lifting is taken care of. For this reason, when the response makes it to the client’s browser, there isn’t much work left for the browser to display the page. It’s ready to go upon delivery.

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

# Web Design Rules and Tips

1. [Medium - 16 little UI design rules that make a big impact](https://uxplanet.org/16-ui-design-tips-ba2e7524d203)

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

# Free Hosting Sites for Web Applications

1. [Firebase](https://firebase.google.com/docs/hosting)
2. [Netlify](https://www.netlify.com/?attr=homepage-modal)
3. [Render](https://render.com/)
4. [Surge](https://surge.sh/)
5. [Vercel](https://vercel.com/)

# Icon Libraries

## 1. Font Awesome

- Font Awesome 5 has a PRO edition with 7842 icons, and a FREE edition with 1588 icons.
- To use the Free **Font Awesome 5** icons, you can choose to download the Font Awesome library, or you can sign up for an account at Font Awesome, and get a code (called **KIT CODE**) to use when you add Font Awesome to your web page.
- Using **Font Awesome 5**
  - New in **Font Awesome 5** is the `fas` prefix, **Font Awesome 4** uses `fa`. The `s` in `fas` stands for _solid_, and some icons also have a _regular_ mode, specified by using the prefix `far`
- Font Awesome CDN:
  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  />
  ```
- Usage:

  ```html
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title></title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <!-- Font Awesome -->
      <script
        src="https://kit.fontawesome.com/592084ced4.js"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <link rel="stylesheet" href="" />
    </head>
    <body>
      <i class="fas fa-clock"></i>
      <script src="" async defer></script>
    </body>
  </html>
  ```

## 2. Bootstrap-v5 Icons

- Bootstrap Icons are published to npm, but they can also be manually downloaded if needed.
- Installation Instructions: Package Manager

  - Install Bootstrap Icons—including SVGs, icon sprite, and icon fonts—with `npm`
    ```sh
        # install
        npm install bootstrap-icon
    ```

- Installation Instructions: CDN - Include the icon fonts stylesheet—in your website `<head>`
  ```html
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
  />
  ```

# Responsive Web Design (RWD)

- **RWD** is a method of creating websites that provide an optimal viewing experience across a wide range of devices, including desktop computers and mobile phones.,
- CSS Breakpoints:

  ```css
  /* Mobile */
  @media (max-width: 480px) {
    // styles
  }

  /* Extra small devices */
  @media (min-width: 481px) and (max-width: 767px) {
    // styles
  }

  /* small tablets */
  @media (min-width: 768px) and (max-width: 991px) {
    // styles
  }

  /* large tablets/laptops */
  @media (min-width: 992px) and (max-width: 1199px) {
    // styles
  }

  /* desktops */
  @media (min-width: 1200px) and (max-width: 1919px) {
    // styles
  }

  /* extra large screens */
  @media (min-width: 1920px) {
    // styles
  }
  ```

# CSS Tips for Making Responsive Designs

## CSS Tip 1: Use CSS Media Queries

- **Media queries** allow you to apply CSS rules based on specific conditions, like the device's screen width. Common examples of breakpoints include `480px`, `768px`, `1024px`, and `1280px`.

- Use them to adjust the layout, font sizes, and other elements for different screen sizes.

  ```css
  @media (max-width: 768px) {
    /* CSS Rules for screens smaller than 768px */
    .column {
      width: 100%;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    /* CSS rules for screens between 769px and 1024px */
    .column {
      width: 50%;
    }
  }

  @media (min-width: 1025px) {
    /* CSS riles for screens larger than 1025px */
    .column {
      width: 25%;
    }
  }
  ```

## CSS Tip 2: Use Fluid Layouts

- Instead of using `fixed-width` layouts, which can cause horizontal scrolling on smaller screens, use `percentage-based` widths to create fluid layouts that adapt to any screen size.

  ```css
  .container {
    width: 100%;
    max-width: 1200px; /* can be adjusted based on your design*/
    margin: 0 auto;
  }
  ```

## CSS Tip 2: Flexible Images

- Use CSS to ensure that images scale proportionally and don't overflow their containing elements.

  ```css
  img {
    max-width: 100%;
    height: auto;
  }
  ```

## CSS Tip 4: Use Flexible Typography

- Adjust font sizes for different screen sizes using media queries or relative units like em, rem, or vw / vh.

  ```css
  /* use relative units for font sizes */
  body {
    font-size: 16px;
  }
  h1 {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  ```

## CSS Tip 5: Mobile-First Approach

- Design your website for mobile devices first and then progressively enhance it for larger screens. This can make your CSS more efficient and easier to maintain.

  ```css
  /* default CSS rules for mobile devices */
  .menu {
    display: none;
  }
  /* Enhance layout for larger screens */
  @media (min-width: 768px) {
    .menu {
      display: block;
    }
  }
  ```

## CSS Tip 6: Use CSS Grid and Flexbox

- **CSS Grid** and **Flexbox** are modern layout techniques that can help you create responsive designs with less CSS code and greater flexibility.

  ```css
  /* Using Flexbox*/
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .column {
    flex: 1;
  }
  /* Using CSS Grid */
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
  }
  ```

## CSS Tip 7: Setting The Viewport

- You should include the following < meta > viewport element in all your web pages:

  ```css
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

- The **width=device-width** part sets the width of the page to follow the **screen-width** of the device (which will vary depending on the device).
- The **initial-scale=1.0** part sets the initial zoom level when the page is first loaded by the browser.

# Resources

1. [freeCodeCamp - Visual Studio Code Extensions to Boost Your Productivity in 2024](https://www.freecodecamp.org/news/best-vscode-extensions/#path-intellisense)
2. [freeCodeCamp - How to Build Responsive Websites – Best Practices for Developers](https://www.freecodecamp.org/news/responsive-design-best-practices/)
3. [dev community - Different Types of Websites](https://dev.to/anuradha9712/different-types-of-websites-4im1)
4. [freeCodeCamp - How Web Pages Get Rendered on the Browser – Different Methods Explained](https://www.freecodecamp.org/news/web-page-rendering-on-the-browser-different-methods/)
5. [freeCodeCamp - Server Side Rendering in JavaScript – SSR vs CSR Explained](https://www.freecodecamp.org/news/server-side-rendering-javascript/)
6. [Forbes - How Much Does A Website Cost? (2023 Guide)](https://www.forbes.com/advisor/business/software/how-much-does-a-website-cost/)
