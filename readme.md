1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

answer: the difference between getElementById, getElementsByClassName, and querySelector and querySelectorAll is,

\*getElementById: select only one elements by unique id.

\*getElementsByClassName: select all elements with given class and return HTML Collection.

\*querySelector: select the first element that matched css selector.

\*querySelectorAll: select all elements that matched css selector

2. How do you **create and insert a new element into the DOM**?

answer: first of all we create a new element. then added content and finally append it into dom.

3. What is **Event Bubbling** and how does it work?

answer: the event bubbling is when we click a child element then it through it's parent. then the parents parent and so on.

4. What is **Event Delegation** in JavaScript? Why is it useful?

answer: Event Delegation is javascript pattern that instead of adding event listeners to multiple child elements. we add a single listener to a parent element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

answer: the difference between preventDefault() and stopPropagation() is:

\*preventDefault(): don't do the browser default action for this event

\*stopPropagation(): stop this event from traveling any further in the bubbling phase.
