# Bootstrap 5 - images

* In Bootstrap 5, the `img-fluid` and `img-responsive` classes are no longer supported as they have been replaced with a single `img` class that provides both responsive and fluid behavior by default.

* In earlier versions of Bootstrap, the `img-fluid` and `img-responsive` classes were used to control the sizing of images.
  * `img-responsive`  class was used in earlier versions of Bootstrap and has been deprecated. This class also resizes the image proportionally to fit its container. However, it requires the use of additional CSS rules to set the maximum width of the image to prevent it from overflowing its parent container.
  
  * `img-fluid` class sets the width of the image to 100% of its parent container while maintaining its aspect ratio. This means that the image will scale proportionally to fit its container without distorting its aspect ratio. This class is typically used for images that need to be fluid and responsive in their container.

# Thumbnails
* Use `img-thumbnail` class to give an image a rounded `1px` border appearance.