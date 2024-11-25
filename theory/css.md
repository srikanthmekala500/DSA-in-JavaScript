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
