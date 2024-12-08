# CSS - Usefull tips

### Reset.css

The first steps of a project concerning the CSS should be to add a reset.css file.
This will reset all the default styling of browsers. So you begin with a completely clean set up. 

Here an example : https://piccalil.li/blog/a-more-modern-css-reset/

---

### Zoom - DeZoom

To test the responsiveness of a page, it's common to use the dev tools and it's great. But an another test you should use is the zoom and dezoom of your browser. 

---

### Containers

Many ways of doing it. But trust me the simpler and most handy one is :

```css
.container {
  max-width: 1110px;
  padding: 0 10px;
  margin: 0 auto;
}
```

(The values here are arbitrary).

This container can be just a block, or you can make it a flex container (for navbars for example) or even a grid.

---

### Images

- Include on your reset :

```css
img {
  width: 100%;
}
```

The explanation is simple. An img will always try to be the actual size of the image file. By giving all images a width of 100%, you'll force them to adequate itself to its container parent. Now it's up to you to give the right measures to their container.

- Streched images :

Have you tried to set a width and a height to an image just to realize the image is streched ? Use this handy declaration :

```css
object-fit: cover; // or contain
```

Try for yourself !

---

### Position relative

When you set an element in relative, it will be displayed in front of the others elements. 

If you want that the following elements go in front of this relative element, set the following element in relative too. 