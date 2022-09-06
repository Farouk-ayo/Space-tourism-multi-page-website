# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

I worked on frontendMentor challenge, the challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![desktopMode](images/Screenshot%202022-09-06%20at%2021-36-53%20Frontend%20Mentor%20Space%20tourism%20website.png)

### Links

- Solution URL: [FrontendMentor-Space-tourism](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3/hub/css-propertiesflexbox-sass-html-and-javascript-R-ez_KcsCH)
- Live Site URL: [Space-tourism](space-tourism-frk.netlify.app)

## My process

-I created a new final-code directory to with all startup codes and images.
-Created all my Sass files and install all dependencies.
-Work on the html format and style up all pages.
-Build up the responsiveness for all devices.
-Deployment and github hosting

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Sass](https://www.npmjs.com/package/node-sass) - For styles

### What I learned

```how picture Tag works well when dealing with responsiveness of images.
  <picture class="img-con">
            <source
              class="tech--img"
              media="(min-width:68.75em)"
              srcset="image-launch-vehicle-portrait.jpg"
            />
            <source
              class="tech--img"
              media="(max-width:68.75em)"
              srcset="image-launch-vehicle-landscape.jpg"
            />
            <img
              class="tech--img"
              src="image-launch-vehicle-portrait.jpg"
              alt="tech"
            />
          </picture>
```

```js
const SomethingTrickyIdiscovered = window.location.href;
const str = SomethingTrickyIdiscovered.split("/");
const knowStr = str[str.length - 1] + "#";
```

### Continued development

On my JavaScript skills

## Author

- Website - [Farouk](https://www.your-site.com)
- Frontend Mentor - [@Faroukayo](https://www.frontendmentor.io/profile/eff-r-k)
- Twitter - [@Faroukayo](https://www.twitter.com/eff_r_k)
