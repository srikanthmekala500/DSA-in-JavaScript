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

- You can target both **<h3> and <h2> elements with the same styling by grouping them in the CSS selector:**

