# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/interactive-card-details-form-screenshot.png)

### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- JQuery
- JQuery Inputmask
- Mobile-first workflow


### What I learned

I learnt about the <strong>JQuery</strong> JavaScript Library. It made writing javascript code very simple and easy.<br>
I learnt about <strong>Javascript Input validation</strong>,<strong>Events</strong> and <strong>Event Handlers</strong>.<br>
I used the <strong>JQuery Inputmask</strong> to create the input mask for the input fields. Paticularily for the card number input field.this code created the inputmask and then applied to the card number input field.
```js
  const cnum_im = new Inputmask({
    mask:"**** **** **** ****",
    placeholder:" ",
  });
  cnum_im.mask(cnum);
```


### Useful resources

- [Input validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me know about different methods to vaidate the input fields for corrent format.
- [JQuery Inputmask Docs](https://github.com/RobinHerbots/Inputmask) - Inputmask is an amazing JavaScript library that helped me create input mask for any input fields.


## Author

- Frontend Mentor - [@anugcodes](https://www.frontendmentor.io/profile/anugcodes)
- Github - [@anugcodes](https://github.com/anugcodes)
- Twitter - [@anuragbswl](https://twitter.com/anuragbswl)

