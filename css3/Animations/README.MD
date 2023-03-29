# CSS Animations

# What are CSS Animations?
* An animation lets an element gradually change from one style to another.
* To use CSS animation, you must first specify some keyframes for the animation.
* Keyframes hold what styles the element will have at certain times.

# The @keyframes Rule
* When you specify CSS styles inside the __@keyframes__ rule, the animation will gradually change from the current style to the new style at certain times.
* To get an animation to work, you must bind the animation to an element.

* __Note__: _The __animation-duration__ property defines how long an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds)._

# Delay an Animation
* The __animation-delay__ property specifies a delay for the start of an animation.
* Negative values are also allowed. If using negative values, the animation will start as if it had already been playing for N seconds.

# Set How Many Times an Animation Should Run
* The __animation-iteration-count__ property specifies the number of times an animation should run.

# Run Animation in Reverse Direction or Alternate Cycles
* The __animation-direction__ property specifies whether an animation should be played forwards, backwards or in alternate cycles. It can have the following values:
    - __normal__ - The animation is played as normal (forwards). This is default
    - __reverse__ - The animation is played in reverse direction (backwards)
    - __alternate__ - The animation is played forwards first, then backwards
    - __alternate-reverse__ - The animation is played backwards first, then forwards

# Specify the Speed Curve of the Animation
* The __animation-timing-function__ property specifies the speed curve of the animation. The values include:
    - __ease__ - Specifies an animation with a slow start, then fast, then end slowly (this is default)
    - __linear__ - Specifies an animation with the same speed from start to end
    - __ease-in__ - Specifies an animation with a slow start
    - __ease-out__ - Specifies an animation with a slow end
    - __ease-in-out__ - Specifies an animation with a slow start and end
    - __cubic-bezier(n,n,n,n)__ - Lets you define your own values in a cubic-bezier function