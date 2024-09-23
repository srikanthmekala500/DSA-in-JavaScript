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

- **Static Methods and Properties**
        -Static methods and properties are also inherited by the child class.
  
  -**render()**
  - **The render() method**returns the JSX (JavaScript XML) that describes the component’s layout. This JSX is then converted into actual HTML elements in the DOM.
  - The render() method is called whenever there is a **change in the component’s state or props**. This ensures that the UI is always **up-to-date with the latest data.**
  - **The render() method** must return a **single root element**. If you need to return multiple elements, you should wrap them in a **single container element like a <div> or use React fragments**.
  - **No Side Effects** :The render() method should be **pure, meaning it should not modify the component’s state or interact with the browser (e.g., making HTTP requests)**. It should only return the JSX representation of the component
  - React uses a virtual DOM to optimize rendering. **When the render() method is called, React updates the virtual DOM first and then efficiently updates the actual DOM to match the virtual DOM**
    
## What are Pure Components?
  - Pure Components are components that render the same output for the same state and props. **They are designed to optimize performance by preventing unnecessary re-renders. Here are some key points about Pure Components**
    
  - **Definition:** A Pure Component is a **component that does not re-render if the props and state have not changed**.
    This is achieved by implementing a shallow comparison of the current and next props and state.
    
  - **Class-Based Pure Components:** In class-based components, you can create a Pure Component by extending **React.PureComponent** instead of **React.Component**. This automatically implements the **shouldComponentUpdate lifecycle method** with a shallow comparison.
```javascript 
    import React from 'react';

class MyComponent extends React.PureComponent {
    render() {
        return <div>{this.props.value}</div>;
    }
}
```
- **Functional Pure Components:** For functional components, you can achieve similar behavior using **React.memo**. **This higher-order component memoizes the result and only re-renders if the props change**.
```javascript
    import React from 'react';

const MyComponent = React.memo((props) => {
    return <div>{props.value}</div>;
});
```
## What is Pure Functions? and What is imPure Functions?
**Pure Functions**
  - **Deterministic:** Given the **same inputs, a pure function will always return the same output**. This means the function’s output is entirely dependent on its input parameters and nothing else.
 - **No Side Effects:** Pure functions do not cause any side effects. **They do not modify any external state, such as global variables, or perform any I/O operations like logging to the console or making network requests**.
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
**imPure Functions**   
 - **Side Effects:** Impure functions cause side effects, meaning they can **modify external state or interact with the outside world**. This **includes changing global variables**, modifying objects or arrays passed by reference, performing I/O operations like logging to the console, or making network requests.

 - **Non-Deterministic:** Impure functions do not always return the same output for the same input. Their output can depend on external factors or the state of the system, making them unpredictable.
```javascript
let counter = 0;

function increment() {
    counter += 1;
    return counter;
}
```
## What is Props? In React, props (short for “properties”) 

  -  **Immutability:** Props are **read-only**. Once a parent component passes props to a child component, the **child component cannot modify them**. This ensures that **data flows in a single direction**, from **parent to child**.
   -  **Usage:** Props are used to **pass data and configuration settings to child components**. They allow components to be **dynamic and reusable by providing different data inputs**.
   - **Accessing Props:** In a functional component, **props are accessed directly as function arguments**. In a **class component, they are accessed via @this.props.**

**how to change props**

  - **props are immutable**, meaning they **cannot be changed directly by the child component**. However, you can achieve the desired **effect by updating the state in the parent component and passing the new state as props to the child component**.
    
 **Using Callbacks to Update Props**
 
  **Define a State in the Parent Component:**
    
     - The parent component holds the state that will be passed as props to the child component.
     
  **Pass a Callback Function to the Child Component:**
  
   -  This callback function will be used by the child component to request changes to the state in the parent component.

**Update the State in the Parent Component:**

   -  When the callback function is called, the parent component updates its state, which in turn updates the props passed to the child component.

**Parent Component**
```javascript
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [name, setName] = useState('Alice');

    const handleNameChange = (newName) => {
        setName(newName);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent name={name} onNameChange={handleNameChange} />
        </div>
    );
}

export default ParentComponent;
```
**Child Component**
```javascript
import React from 'react';

function ChildComponent(props) {
    const changeName = () => {
        props.onNameChange('Bob');
    };

    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {props.name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default ChildComponent;
```
## What Is ‘State’ in ReactJS?

 - **Definition:** State is a built-in object that allows components to create and manage their own data internally.
 - **Mutability:** State is mutable, meaning it can be changed within the component using the setState method (in class components) or 
     the useState hook (in functional components).
 - **Usage:** State is used to manage data that can change over time, typically in response to user actions or other events.

 In ReactJS, state is a built-in object that allows components to create and manage their own data internally. It is a fundamental concept for building dynamic and interactive user interfaces. Here are some key points about state:
 
 - **Dynamic Data Storage:** State is used to store data that can change over time. This data can be anything from user inputs, responses from an API, or any other dynamic data.

 -  **Component-Specific:** Unlike props, which are passed from parent to child components, state is local to the component where it is defined. Each component can have its own state.

 - **Triggers Re-Renders:** When the state of a component changes, React automatically re-renders the component to reflect the new state. This ensures that the UI is always in sync with the state.
```javascript
   import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
```
## What are inline conditional expressions?

**Ternary Operator**
     - The ternary operator is a concise way to include or exclude elements based on a condition
```javascript
const isLoggedIn = true;

return (
    <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
);
```
**Logical AND (&&) Operator**
  - The logical AND operator can be used to conditionally render an element only if the condition is true.
 
```javascript
const hasMessages = true;

return (
    <div>
        {hasMessages && <p>You have new messages.</p>}
    </div>
);
```
 **Inline If-Else with IIFE (Immediately Invoked Function Expression)**
     - For more complex conditions, you can use an IIFE to handle inline if-else logic.
```javascript

const userRole = 'admin';

return (
    <div>
        {(() => {
            if (userRole === 'admin') {
                return <p>Admin Dashboard</p>;
            } else if (userRole === 'user') {
                return <p>User Dashboard</p>;
            } else {
                return <p>Guest Dashboard</p>;
            }
        })()}
    </div>
);
```
## What is Prop Drilling? 
 -  Prop drilling occurs when you need to **pass a prop through several layers of nested components to reach a deeply nested child component** that actually needs the prop. Each intermediary component in the hierarchy has to pass the prop down, even if it doesn’t use the prop itself.
 -  **Prop drilling in react is the process of passing data from one component via several interconnected components to the component that needs it**.
 -  The name drilling refers to this process of forcing these components to take in **unnecessary data and pass it on to the following component**, which in **turn sends it on to the next component**, and so on until it reaches its intended destination. The reusability of components and app performance may suffer as a result in a significant way.
![image](https://github.com/user-attachments/assets/1d097f86-d1ea-46d3-949b-822d4e7704c3)

# ReactJS Lifecycle of Components ?
![image](https://github.com/user-attachments/assets/63c38d8f-a446-4299-bec4-16665515c9ed)

**Initialization**: This is the stage where the component is constructed with the given Props and default state. This is done in the **constructor of a Component Class**.

**Mounting**: The component is ready to mount in the browser DOM. 
 - This phase covers **initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount()** lifecycle methods.

**Updating**: In this phase, the component gets updated in two ways, **sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate()** and componentDidUpdate() lifecycle methods.

**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes **componentWillUnmount() lifecycle method**.  All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block.

- **Initialization**: In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. The following code snippet describes the initialization process.
```javascript
    class Clock extends React.Component { 
    constructor(props) { 
        // Calling the constructor of Parent Class React.Component 
        super(props); 
        
        // Setting the initial state 
        this.state = { date: new Date() }; 
    } 
}

```
**Lifecycle Methods in Initialization**

  - **constructor():** Initializes the component’s state and binds methods.

 - **getDerivedStateFromProps():** Can be used to update the state based on initial props, though it’s less commonly used in the initialization phase.

 - **class Clock extends React.Component:** This defines a new class **Clock** that **extends** **React.Component,** making it a React component.

 - **constructor(props):** The constructor method is called when an instance of the **class is created**.

 - **super(props):** This calls the constructor of the **parent class** (React.Component), allowing the component to access **this.props**.

 - **this.state = { date: new Date() }:** This sets the **initial state of the component** with the current date.
 - 
 - **render():** The only required method in a class component. It returns the JSX that **represents the component’s UI**.
   
**Mounting**

  **componentWillMount() Function:** As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e.**this function gets invoked once before the render() function is executed for the first time**.
  
 - The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server.
 
 - The componentWillMount() method allows us to **execute the React code synchronously** when the component **gets loaded or mounted in the DOM** (Document Object Model). This method is called during the mounting phase of the React Life-cycle.

- **ComponentWillMount()** is generally used to **show a loader when the component is being loaded or when the data from the server is being fetched**.
  
 **componentDidMount() Function:** Similarly to the previous one this function is invoked right after the component is mounted on the DOM i.e.**this function gets invoked once after the render() function is executed for the first time**
 
   -   The componentDidMount() method is used to **fetch data from an API**.
     
   -   The fetched data is then stored in the **component’s state, triggering a re-render to display the data**.

**Updation**

- **setState() Function:** This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the state of a component. 

**shouldComponentUpdate() Function:** By default, every state or props update re-renders the page but this may not always be the desired outcome, sometimes it is desired that updating the page will not be repainted. 
- The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or states are being received.

-  If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in the case of **forceUpdate().** The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

**componentWillUpdate() Function:** As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

**componentDidUpdate() Function:** Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.

 **Unmounting:**  : **This phase occurs when a component is being removed from the DOM**.

  - **componentWillUnmount():** Called right before the component is **unmounted and destroyed**. It’s a good place to clean up subscriptions or cancel network requests.
    
   -  This is the final phase of the lifecycle of the component which is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.

**componentWillUnmount() Function:** This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.

**what is Higher-Order Components (HOCs) ?**
      - An HOC is a **function that takes a component and returns a new component with additional functionality**.
- Higher-Order Components (HOCs) in React are functions that take a component and return a new component with additional features or functionality. This “wrapping” allows you to enhance the original component by **adding extra props, state, or behavior.**
- 
**Benefits of Using HOCs with Functional Components**

  - **Code Reusability:** HOCs allow you to reuse logic across multiple components, reducing code duplication.

  - **Separation of Concerns:** They help separate different concerns, making your components more focused and easier to maintain.

  - **Enhanced Composition:** HOCs can be composed together to build complex functionality from simple, reusable pieces
 
 ##  What are stateless and stateful  components?
 components can be classified into two main types: **stateless (or functional) components and stateful (or class) components**. Let’s explore the differences between them:

**Stateless Components**
 - **Definition**: Stateless components, also known as functional components, do not manage their own state. They simply receive data via props and render UI elements based on that data.

**Characteristics:**

 - **No State Management:** They do not have their own state.
   
 - **Simpler and More Readable:** They are usually simpler and easier to read and maintain.
   
 - **No Lifecycle Methods**: They do not have lifecycle methods like class components, but with the introduction of Hooks usestate ,useeffect, they can now use state and other React features.

**Stateful Components**
  -   **Definition**: Stateful components, traditionally class components, manage their own state. They keep track of changing data that affects the render output of the component.

**Characteristics:**

 - **State Management:** They have a state object that stores data and can update this state.
   
 - **Lifecycle Methods:** They have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
   
 - **More Complex:** They are usually more complex than stateless components due to state management and lifecycle methods.
```javascript

   class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```
## What is the purpose of render() in React. ?
**Purpose of render() in React**

  - **Returning JSX:** The primary purpose of the **render() method is to return JSX**, which **describes the structure of the component’s UI**. This JSX is then transformed into **actual HTML elements by React**.

  - **Updating the Virtual DOM:** The render() method updates the virtual DOM, which is a lightweight copy of the actual DOM. React uses this virtual DOM to determine what changes need to be made to the actual DOM, ensuring efficient updates.

     - When the state or props of a component change, the render() method is called to update the virtual DOM with the new UI structure1.
     - 
**Reactivity:** The render() method is called whenever there is a change in the component’s state or props. This ensures that the UI is always in sync with the current state and props
**Functional Components and render()**
  -  In functional components, **there is no explicit render() method**. Instead, the function itself **returns the JSX**, which serves the same purpose as the render() method in class components.
     
```javascript
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```
## What is the useState Hook?

   - The useState() hook works by **handling and managing state** in your applications.
 
  -  **UseState** is React Hook that allows you to **add state to a functional component**.

  -  It returns an array with two values: the **current state** and a **function to update it**.
    
  - The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. It can be used like this:
          ```javascript
             const [state, setState] = useState(initialValue);
          ```
    
   ![image](https://github.com/user-attachments/assets/c43e83c4-bc4e-4535-aa8f-c084c6973523)
   

  - Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component. The setState function can be used 
    to **update the state, triggering a re-render of your component**.
    
 -   In React, **each component can maintain its own state, and when this state changes, the component re-renders to reflect the updated data in the user interface**. This 
       is a core concept in React that makes it powerful for building dynamic and interactive UIs.

**How It Works**

-   **Component State:** Each React component can have its own state, which is managed using hooks like useState or useReducer.
  
-   **State Update:** When the state is updated using the state updater function (e.g., setState from useState), React schedules a re-render of the component.
  
-   **Re-rendering:** During the re-render, React compares the new state with the previous state and updates the DOM to reflect any changes. This process is called reconciliation.
 ```javascript
import React, { useState } from 'react';

function SignIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => setIsSignedIn(true);
  const handleSignOut = () => setIsSignedIn(false);

  return (
    <div>
      {isSignedIn ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <p>Welcome back!</p>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn}>Sign In</button>
          <p>Please sign in</p>
        </div>
      )}
    </div>
  );
}

export default SignIn;
```
 ```javascript
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```
