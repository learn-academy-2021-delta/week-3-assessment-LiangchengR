# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: The key word `this` in JavaScript is used to identify what we're pointing to. It is commonly used in objects to point to or reference what we're currently in.

  Researched answer: `this` is a keyword in JavaScript. It is used to reference the object of a property or method. It's return changes whenever the mode of the invocation of a function changes. Normally, `this` inside a function that is invoked will have the value of the global object but if the function is running in "strict mode", it will return undefined. 


2. What is React? Why would you use it?

  Your answer: React is a front end JavaScript library with component building blocks. You would use it to help remove some of the repetition in building user interfaces. It is used with Twitter and Facebook.

  Researched answer: React is an open source library for JavaScript that is used to build single page applications UIs. It's selling point is the reusable components that are built around a single HTML element often referred to as a root node(element). In addition, it allows for re-rendering of only specific components so the user does need to refresh the whole page each time something is changed. This is due to to React's use of states.



3. Which lifecycle method is required in a React class component?

  Your answer: A required lifecycle method in a React class component is render() which will render the web page using JSX.

  Researched answer: The render() method is the only required method in class components. It should not modify the component state, it should return the same result each time, and it should directly interact with the browser.



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is JavaScript XML which is the code we use in the render() method within react. It is sort of like HTML.

  Researched answer: As above, JSX refers to JavaScript XML. It is a syntax extension of JavaScript which allows us to write HTML directly into React but still gives us the same powers of JavaScript. It allows us to combine logic and markup in one file.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: yarn stands for "yet another resource negotiator". the command yarn will update your node modules folder to what is needed for the project.

  Researched answer: yarn is a new package manager. It updates our node modules folder so that we may avoid rewritting basic component, libraries, or frameworks of our own. It manages code dependencies. It was created to replace the already existing package manager npm. It differs in that it can handle multiple packages at once but npm can only do one by one. yarn is considered more reliable, faster, and more secure than npm.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An arrow function is inherently considered an anonymous function. It is one that technically does not have a name.

  Researched answer: As stated above, an anonymous function is one without a name where arrow function expressions are considered anonymous functions. An anonymous function is not accessible after creation. They are seen as harder to debug and have no self referencing. It seems that the main benefit of an arrow function is it's relationship with `this`. Specifically, it seems that arrow functions are lexically bound, meaning that when they use `this` it immediately figures out what `this` refers to by going up a scope where the arrow function was initialized.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering refers to the rendering of some components depending on the state of your application or some condition.

2. Props: Props stands for properties. It is used as a parameter in an object and allows us to pass data amd methods between components. Props (mostly) come from state and are considered a snapshot of said state.

3. JavaScript Events: An event is something that occurs in your web browser which will be fed back to the user so that they can respond. An event handler or listener is usually used to then respond to that event by executing some block of code.  

4. Object oriented programming: OOP is a programming model that relies on the concept of classes and objects. It is mainly used to handle large and complex software systems. The pros are that it allows developers to create reusable classes, it is easier to maintain, and it allows for development between different developers simultaneously. Some cons include that it can be inefficient, it may create unecessary code, and can lead to duplication in code since it is so easy to set up. 

5. Ruby: Rudy is an open source and OOP language. It is dynamic, symplistic, and is considered easy to read and write. It is a server side scripting language.
