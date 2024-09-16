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
 
