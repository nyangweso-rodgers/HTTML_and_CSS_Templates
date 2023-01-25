# Bootstrap Grids

* __Bootstrap's__ grid system allows up to 12 columns across the page. If you do not want to use all 12 columns individually, you can group the columns together to create wider columns:

* Bootstrap's grid system is responsive, and the columns will re-arrange automatically depending on the screen size.

# Grid Classes
* The Bootstrap grid system has four classes:
    1. __xs__ (for phones - screens less than 768px wide)
    2. __sm__ (for tablets - screens equal to or greater than 768px wide)
    3. __md__ (for small laptops - screens equal to or greater than 992px wide)
    4. __lg__ (for laptops and desktops - screens equal to or greater than 1200px wide)

* The classes above can be combined to create more dynamic and flexible layouts.

# Basic Structure of a Bootstrap Grid
```html
    <div class="row">
        <div class="col-*-*"></div>
        <div class="col-*-*"></div>
    </div>
    <div class="row">
        <div class="col-*-*"></div>
        <div class="col-*-*"></div>
        <div class="col-*-*"></div>
    </div>
    <div class="row">
        ...
    </div>
```

* First; create a row (< div class="row" >). Then, add the desired number of columns (tags with appropriate .col-*-* classes). Note that numbers in .col-*-* should always add up to 12 for each row.