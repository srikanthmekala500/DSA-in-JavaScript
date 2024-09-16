## What is ReactJS?
- React is a **front-end and open-source JavaScript library** which is useful in developing user interfaces specifically for applications with a **single page**. It is helpful in building complex and **reusable user interface(UI) components** of mobile and web applications as it follows the **component-based approach**.

**The important features of React are:**

- It supports **server-side rendering**.
- It will make use of the **virtual DOM rather than real DOM**(Data Object Model) as RealDOM manipulations are expensive.
- It follows **unidirectional data** binding or data flow.
- It uses **reusable or composable UI** components for developing the view.
  
## What are the advantages of using React?

**MVC is generally abbreviated as Model View Controller.**

- **Use of Virtual DOM to improve efficiency:**
- React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
 
- **Gentle learning curve:** React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.

- **SEO friendly:** React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
 
- **Reusable components:** React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
  
- **Huge ecosystem of libraries to choose from:** React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.
## What is JSX ?
- JSX stands for **JavaScript XML**. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like **appendChild( ) or createElement( ).**
  
 (or)
 
JSX stands for JavaScript XML. **JSX allows us to write HTML in React**. JSX makes it easier to write and add HTML in React.
```javascript
function App() {
    /////////////////////////////
    return (
        <div>
            { <p>This is a text</p> }
        </div>

    ); 
 ```
}
## What is the difference between Element and Component?
**Elements**
      **Definition:** Elements are the **smallest building blocks of React applications**. They are plain objects that describe **what you want to see on the screen.**
      
      **Creation:** Typically created using **JSX (JavaScript XML) or React.createElement()**.
      
      **Immutability:** Elements are immutable. Once created, you cannot change their properties or children.
           ```javascript 
            const element = <h1>Hello, React!</h1>;
          ```
**Components**
          **Definition:** Components are **reusable and composable building blocks that return React elements**. They can be thought of as JavaScript functions or classes that take in inputs (called “props”) and return elements.

**Types:** There are two types of components:

**Functional Components:** These are JavaScript functions that return elements.
      ```javascript 
      function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
      }
      ```
**Class Components:** These are ES6 classes that extend React.Component and have a render method.
   - **State and Lifecycle:** Components can have state and lifecycle methods, allowing them to manage dynamic data and respond to user interactions.
      ```javascript 
      class Greeting extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}!</h1>;
        }
      }
      ```
## What are the differences between functional and class components ? 

**functional Components**
  -  **Definition:** These are simple JavaScript functions that accept props as an argument and return React elements (JSX).
    
  -  **State and Lifecycle:** Initially, functional components were **stateless**and **did not have lifecycle methods**. However, with 
          the introduction of React Hooks **(e.g., useState, useEffect)**, functional components can now manage state and side effects.
-   **Hooks:** Hooks like **useState and useEffect allow functional components to handle state and lifecycle events**
 ```javascript 
        function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }
  /////////
  
  import React, { useState, useEffect } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          document.title = `You clicked ${count} times`;
        }, [count]);
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
 ```
  **Class Components**
    
   - **Definition:** These are ES6 classes that extend from React.Component and have a render method to return React elements.
     
  -   Class components in React are typically **stateful**, meaning they can **manage and maintain their own state**. This is one of the key  features that distinguishes them from stateless functional components .
  -   
**Stateful Components**
  -  **State Management:** Class components can hold and manage local state using **this.state and this.setState**.
  -  **Lifecycle Methods:** They have access to lifecycle methods like **componentDidMount, componentDidUpdate, and 
       componentWillUnmount**, which allow you to run code at specific points in the component’s lifecycle.
        -  **componentDidMount():** Called after the component is mounted.
        - **componentDidUpdate(prevProps, prevState):** Called after the component updates.
        - **componentWillUnmount():** Called before the component is unmounted and destroyed.
```javascript 
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```
**Defining a Constructor**
 -  The constructor method is defined within a class and is called automatically when a **new instance of the class is created**.
  - **Inside the constructor, the this keyword refers to the new object being created.** It is used to set properties on the object.
  - In a derived class (a class that extends another class), you must call **super() before using this in the constructor. This calls the parent class’s constructor.**
  - The super keyword is used to call the **constructor of the parent class and to access its methods**.
  - When you extend a class, you need to call the parent **class’s constructor using super() before you can use this in the derived class.**
  - **Props**
      **Props are passed to class components in the same way as functional components**. They are accessed using **this.props.**
 - The **extends keyword**is a powerful feature in JavaScript that enhances object-oriented programming by allowing classes to inherit from other classes
 - 
- **Static Methods and Properties**
        -Static methods and properties are also inherited by the child class.
  -**render()**
  - **The render() method**returns the JSX (JavaScript XML) that describes the component’s layout. This JSX is then converted into actual HTML elements in the DOM.
  - The render() method is called whenever there is a **change in the component’s state or props**. This ensures that the UI is always **up-to-date with the latest data.**
  - **The render() method** must return a **single root element**. If you need to return multiple elements, you should wrap them in a **single container element like a <div> or use React fragments**.
  - **No Side Effects** :The render() method should be **pure, meaning it should not modify the component’s state or interact with the browser (e.g., making HTTP requests)**. It should only return the JSX representation of the component
  - React uses a virtual DOM to optimize rendering. **When the render() method is called, React updates the virtual DOM first and then efficiently updates the actual DOM to match the virtual DOM**
