# CSS Tip - Use Media Query

# CSS Tip 3: Use CSS Media Queries
* __Media queries__ allow you to apply CSS rules based on specific conditions, like the device's screen width. Common examples of breakpoints include `480px`, `768px`, `1024px`, and `1280px`.

* Use them to adjust the layout, font sizes, and other elements for different screen sizes.

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