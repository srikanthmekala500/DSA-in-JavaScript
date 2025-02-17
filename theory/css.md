## What is a Sprite

- Sprites are two-dimensional images which are made up of combining small images into one larger image at defined X and Y coordinates.

- To display a single image from the combined image, you could use the CSS **background-position property**, defining the exact position of the image to be displayed.

**Advantage of Using CSS Image Sprite**

- A web page with many images, particularly many small images, such as icons, buttons, etc. can take a long time to load and generates multiple server requests.

- Using the image sprites instead of separate images will significantly reduce the number of HTTP requests a browser makes to the server, which can be very effective for improving the loading time of web pages and overall site performance.

- A sprite represents a visual object in a 2D game, such as a character, enemy, or item. It's an image or set of images used to depict these elements and can include animations by cycling through frames.

**For example:**
A character walking in a game is displayed using multiple images (frames) of the sprite in different walking poses. 

**Access a particular element of the sprite using the CSS background-position property**

Once the sprite sheet is ready, the developer then has to use CSS attributes to access different parts of the sheet.

  width: Width of the sprite
  
  height: Height of the sprite
  
  background: Reference to the sprite sheet
  
  Background-position: Offset values (in pixels) to access only the required part of the sprite sheet
```.css
background: url('img_sprites.png');
background-position:-128px 0px;
width: 125px;
height: 125px;
```
## What is viewport height/viewport width in CSS?
- Viewport Height (vh) and Viewport Width (vw) are CSS units used to define sizes relative to the dimensions of the viewport (the visible part of a webpage in the browser).
  
- The measure VH is 1/100 of the height of the viewport. If the height of browser is equal to 1000px, 1vh is  10px. and if the width is 1000px, 1 vw is 10px
 
**Viewport Height (vh)**

- 1vh equals 1% of the height of the viewport.
- The total height of the viewport is considered as 100vh.

Example: If the viewport height is 800px:

- 1vh = 8px
- 100vh = 800px
  
**Viewport Width (vw)**
- 1vw equals 1% of the width of the viewport.
- The total width of the viewport is considered as 100vw.

Example: If the viewport width is 1200px:

- 1vw = 12px
- 100vw = 1200px
  
**Related Units:**

**vmin**: Represents the smaller of **vw or vh.**

- Useful when you want an element to adapt to the smallest dimension of the viewport.
- Example: 10vmin = 10% of the smaller viewport dimension.
  
**vmax:** Represents the larger of **vw or vh**.

- Example: 10vmax = 10% of the larger viewport dimension.
- 
## Define gradients in CSS. ?
  - Gradients in CSS are a way to **create smooth transitions between two or more colors**. They are often used for backgrounds, buttons, and other elements to create visually appealing effects.
  -CSS provides two main types of gradients: **linear gradients and radial gradients**, along with a third, less commonly used type, **conic gradients**.

**Types:**
**Linear Gradient:** Transitions along a line
```.css
background: linear-gradient(to right, red, blue);
```
**Radial Gradient:** Colors radiate outward from a center
```.css
background: radial-gradient(circle, red, yellow);;
```
**Conic Gradient:** Colors rotate around a central point.
```.css
background: conic-gradient(red, yellow, green, blue);

```
imp : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## What are the properties of flexbox?

 -  Flexbox (Flexible Box Layout) is a CSS layout model that provides properties for arranging items efficiently within a container. It is ideal for creating responsive and aligned designs. The properties of flexbox are categorized into container properties and item properties.
**Flex Container Propertie**
- **display**: Defines a flex container. (flex, inline-flex)

- **flex-direction**: Sets the direction of items. (row, column, etc.)

- **flex-wrap:** Controls wrapping of items. (nowrap, wrap)

- **justify-content:** Aligns items along the main axis. (center, space-between)

- **align-items:** Aligns items along the cross axis. (center, stretch)

- **align-content**: Aligns rows in a multi-line container. (space-around, center)

- **gap:** Adds space between items.

**Flex Item Properties**

- **order**: Changes the order of an item.

- **flex-grow**: Defines how much an item grows.

- **flex-shrink:** Defines how much an item shrinks.

- **flex-basis**: Sets the initial size of an item.

- **align-self:** Overrides align-items for a specific item.
![image](https://github.com/user-attachments/assets/bc58d233-4bc5-413a-918f-8e0abefe222c)

 ## What are the position states in CSS?

- In CSS, the position property determines how an element is positioned in the document. There are five main position states: 

In CSS, the position property determines how an element is placed:

- **static:** Default, placed in normal flow. No offset applied.
 
- **relative:** Positioned relative to its original position (offsets applied).
  
- **absolute:** Positioned relative to the nearest positioned ancestor (removed from flow).
  
- **fixed:** Positioned relative to the viewport (stays in place when scrolling).
  
- **sticky:** Acts like relative until a scroll threshold is reached, then becomes fixed.
  
## What is cascading in CSS?
 - Cascading in CSS refers to the process by which the browser determines **which CSS styles to apply when multiple rules target the same element.**
 - The term "cascade" comes from the way CSS rules are applied in a layered manner, based on their **specificity, importance, and order in the stylesheet.**
 - !**important**: Highest priority, overrides other rules.
- **Specificity**: More specific selectors (e.g., IDs > classes > elements) take precedence.
- **Source Order:** If two rules have the same specificity, the one that appears last is applied.
- **Inheritance:** Some properties are inherited from parent elements
   
**Overriding Styles with !important**
```.css
/* Default button style */
button {
  background-color: blue;
  color: white;
}

/* More specific button style */
button.primary {
  background-color: red !important;
  color: black;
}
```
**Specificity vs Order**
```.css
/* General style for paragraphs */
p {
  color: green;
}

/* More specific style for paragraphs in a container */
.container p {
  color: blue;
}

/* Paragraph color defined in a later style */
p {
  color: yellow;
}
```
**Inherited Styles:**
```.css
body { font-family: Arial; color: black; }
h1 { font-size: 2em; }  /* Inherits font-family and color */

```
# What are the limitations of CSS?

-  CSS cannot always assure compatibility with every browser; you need to be cautious while choosing the style selector.
 
-  The parent selector tag is not available, thus you can’t select the parent selector tag.

-  Some selectors can lead to cross-browser issues due to their less browser-friendly behavior.

-  We cannot request a webpage through CSS.
 
## How can you use CSS to control image repetition?
  You can control image repetition in CSS using the background-repeat property:

**repeat:** Repeats both horizontally and vertically (default).

**repeat-x:** Repeats horizontally (left to right).

**repeat-y:** Repeats vertically (top to bottom).

**no-repeat:** No repetition, shows one instance of the image.

**space:** Repeats with space between images.

**round:** Repeats and resizes to fit the space without stretching.
```.css
div {
  background-image: url('image.jpg');
  background-repeat: no-repeat; /* No repetition */
}
```
## How can you target h3 and h2 with the same styling?

- You can target both <h3> and <h2> elements with the same styling by grouping them in the CSS selector.
```.css
  h2, h3 {
  font-family: Arial, sans-serif;
  color: blue;
}
```
## Tell us about the use of the ruleset.

- A ruleset in CSS consists of a **selector and a declaration block**. It defines how specific HTML elements should be styled.
  
 **Selector:** Targets HTML elements (e.g., h1, .class, #id).
 
**Declaration block:** Contains one or more property-value pairs that define the styles for the selected elements.
```.css
h1 {
  color: red;        /* Property: value */
  font-size: 24px;   /* Property: value */
}
```
## What is meant by RGB stream?

- RGB represents colors in CSS. The three streams are namely **Red, Green, and Blue**. The intensity of colors is represented using **numbers 0 to 256**. This allows CSS to have a **spectrum of visible colors**.
- 
## What is CSS?

- CSS stands for Cascading Style Sheet. It’s a style sheet language that determines how the elements/contents in the page are looked/shown. CSS is used to develop a consistent look and feel for all the pages.
- 
## What is the CSS Box Model? short ?

- The CSS Box Model defines the structure of an element on a webpage, consisting of four areas:

**Content**: The actual content of the element (e.g., text or images).

**Padding**: The space between the content and the border, inside the element.

**Border**: A line surrounding the padding (optional).

**Margin**: The space outside the border, separating the element from others.

## What are the advantages of using CSS? 

**Separation of Content and Design:** CSS separates the structure (HTML) from the styling (CSS), making maintenance easier.

**Consistency:** A single CSS file can style multiple pages, ensuring a consistent look across the website.

**Faster Load Times:** External CSS files are cached by browsers, reducing page load times on subsequent visits.

**Flexibility and Control:** CSS offers precise control over layout, colors, fonts, and responsiveness.

**Improved Accessibility**: CSS allows for better control over the visual presentation, making it easier to design for different 
devices.

**Easier Maintenance:** Changes in design can be made in one place (the CSS file), updating the entire site automatically.

## How to include CSS in the webpage?

There are 4 main ways to include CSS in a webpage:

**Inline CSS:** Directly within an HTML element using the style attribute.
```.css
<h1 style="color: blue; font-size: 24px;">Hello World</h1>
```
**Internal CSS:** Within a <style> tag in the <head> section of the HTML document.

```.css
<head>
  <style>
    h1 {
      color: blue;
      font-size: 24px;
    }
  </style>
</head>

 ```
**External CSS:** Linking to an external CSS file using the <link> tag in the <head> section.

```.css
<head>
  <link rel="stylesheet" href="styles.css">
</head>

 ```
**Import a stylesheet** file (An external file imported into another CSS file): Another way to add CSS is by using the @import rule. This is to add a new CSS file within CSS itself.

 @import "path/to/style.css"
 
 ## What is a CSS selector?  
- A CSS selector is a pattern used to target HTML elements in order to apply styles to them. It defines which elements the CSS rules will affect.
  
**Types of CSS Selectors:**
**Element Selector:** Targets HTML elements (e.g., h1, p).
```.css
p { color: red; }
```
**Class Selector:** Targets elements with a specific class (e.g., .class-name).
```.css
.my-class { font-size: 16px; }
```
**ID Selector:** Targets an element with a specific ID (e.g., #id-name).
```.css
#header { background-color: blue; }
```
**Attribute Selector:** Targets elements with a specific attribute (e.g., [type="text"]).
```.css 
input[type="text"] { border: 1px solid gray; }
```
**Universal Selector:** Targets all elements (*).
 ```.css 
 * { margin: 0; padding: 0; }
```
![image](https://github.com/user-attachments/assets/21ae3bb9-4792-465f-a2db-5df49edb7f5e)

## Absolute Unitsa and Relative Units?

**Absolute Units**

- Absolute units are fixed and do not change based on the device or screen size. They are defined in a specific, fixed measurement.
Examples:

- **px (pixels):** A fixed unit, usually used for precise control over element dimensions.
  
- **pt (points):** Typically used in print media, where 1 pt = 1/72 inch.

- **in (inches):** Measures in physical inches.

- **cm (centimeters):** Measures in physical centimeters.

- **mm (millimeters):** Measures in physical millimeters.

**Relative Units:**

- Relative units adjust based on the parent element or the viewport, making them more flexible for responsive designs.

**Examples:**

- **em:** Relative to the font-size of the parent element. Used mainly for text sizes.

- **rem (root em):** Relative to the font-size of the root element (<html>).

- **% (percentage):** Relative to the parent element’s size (e.g., width, height).

- **vw (viewport width):** 1% of the viewport’s width.

- **vh (viewport height):** 1% of the viewport’s height.
![image](https://github.com/user-attachments/assets/f7e8b3af-8c7f-438a-8825-14377bda0da5)

## What is the difference between inline, inline-block, and block?

 -  The terms inline, inline-block, and block refer to different types of display behaviors in CSS. Here's a breakdown of the differences:
 
**Block Element:** The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are <div>, <p>.

**Inline Elements:** Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags. 

 **Inline-block elements** behave like inline elements in that they do not break the line, but they still respect the width and height properties, like block elements.
 
 - They can be placed next to other inline or inline-block elements, but you can also set the width, height, padding, and margin.
   
**Behavior:**

- Inline-block elements appear in the same line, but you can control their size. They won't take up the whole width of the parent container and can be sized and spaced like block elements.
```.css   
<div>This is an inline-block element</div>
<span>This is another inline-block element</span>
```
## Pseudo-elements vs Pseudo-classes ?

**Pseudo-elements (::)**

- Pseudo-elements style specific parts of an element or insert content before or after the element.

**Syntax: ::pseudo-element**
**Common examples:**

**::before:** Inserts content before an element’s content.

**::after:** Inserts content after an element’s content.

**::first-letter:** Targets the first letter of an element.

**::first-line:** Targets the first line of text in a block element.

**Pseudo-classes (:)**

- Pseudo-classes apply styles based on the state or interaction of an element, like when it is hovered, focused, or active.

**Syntax: :pseudo-class**
**Common examples:**

**:hover:** Applies when the element is hovered over.

**:active:** Applies when the element is being clicked.

**:focus:** Applies when the element is focused (like a form input).

**:nth-child():** Targets elements based on their position in a parent element.

![image](https://github.com/user-attachments/assets/6827f84f-8b20-4743-9510-8d280353d581)

## What property is used for changing the font face?

- This chapter teaches you how to set fonts of a content, available in an HTML element. You can set following font properties of an element −

- The **font-family** property is used to change the face of a font.

- Th e**font-style** property is used to make a font italic or oblique.

- The **font-variant** property is used to create a small-caps effect.

- The **font-weigh**t property is used to increase or decrease how bold or light a font appears.

- The **font-size** property is used to increase or decrease the size of a font.

- The **font property** is used as shorthand to specify a number of other font properties.
  
## How is border-box different from content-box?

**content-box (default)**

- The width and height you set apply only to the **content area** of the element.
  
- Padding and border are **added** to the width and height, increasing the overall size of the element.
  
**border-box**

- The width and height you set include the **content, padding, and border**.

- This means the total size of the element will remain **exactly as specified, without adding padding or border to the width/height**.
- 
  ![image](https://github.com/user-attachments/assets/cba6c7e6-19a6-4923-bf15-7bcfef02ad29)

**Key Difference:**

- **content-box:** Width/height applies to content only, padding and border are outside.

- **border-box:** Width/height includes content, padding, and border. The total size stays as set.
  
 ##  How is opacity specified in CSS3?

- The opacity property sets the opacity level for an element. The opacity-level describes the transparency-level, where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent.

##  What is a z-index, how does it function?

- The z-index property in CSS controls the **stacking order** of elements that overlap. It determines **which element appears on top when elements are positioned in the same space**.
  ![image](https://github.com/user-attachments/assets/be4cbbd5-96d3-41cf-9218-e65fdfa5bb80)
  
  -  An element with a higher z-index value will appear in front of an element with a lower z-index value.
   
 **Scenario:** A Modal Window Overlapping Content
Imagine you have a webpage with a button that, when clicked, opens a modal window. The modal needs to appear on top of the page content.

 ![image](https://github.com/user-attachments/assets/38748fd4-7342-41c1-9bf3-e7294880f1d2)

![image](https://github.com/user-attachments/assets/5531f838-a77a-4854-b2ee-543ce05ebb41)

## What is CSS Flexbox?

- **CSS Flexbox** is a layout model that makes it easier to design responsive and dynamic web layouts. It allows items within a container to be aligned and distributed based on available space.
  
- **display**: flex: Defines a flex container.
  
- **flex-direction:** Defines the direction of items inside the container (row or column).
  
- **justify-content:** Aligns items horizontally (main axis).
  
- **align-items:** Aligns items vertically (cross axis).
  
- **flex:** Shorthand to control how items grow and shrink.
  
- **flex-wrap:** Allows items to wrap onto multiple lines when necessary.
  

**justify-content values**

- flex-start (default)
- flex-end
- center
- space-between
- space-around
- space-evenly

  **Align Items**
Align-items property define the behavior of how flex item laid out across horizontal axis. By-default, the value is stretch.

**Values of align-items**
- stretch
- flex-start
- flex-end
- center
- baseline
- 
## Difference between display:none and visiblity: hidden

- **visibility:** hidden hides the element, but it still takes up space in the layout.

- **display:** none removes the element from the document. It does not take up any space.

- **display:** none turns off the layout of the elements, so they are not rendered

- **visibility:** hidden hides the elements without changing their layouts

- **opacity:0** causes the elements to be very transparent but users can still interact with them.
  
