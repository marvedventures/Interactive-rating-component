# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![127 0 0 1_56380_(iPhone 11 Pro Max')](https://user-images.githubusercontent.com/108392678/200736599-6444a50e-7f88-4e02-8eb7-051efcfc6757.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with
- JavaScript DOM  
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Styled Components](https://tailwindcss.com/) - For styles

### What I learned

Using TailwindCSS and JavaScript to change state of an app.

Here is a code snippet: 

```html
<div class="thank-you container hidden items-center text-center">
  <img
    src="./images/illustration-thank-you.svg"
    class="w-40"
    alt="thank you"
   />
   <div class="rounded-2xl bg-dark-blue px-4 py-2 text-sm text-orange">
   You selected <span class="rate">5</span> out of 5
   <!-- Add rating here -->
   </div>
```

```js
btn.addEventListener('click', () => {
  ratingContainer.classList.add('hidden');
  thanksContainer.classList.remove('hidden');
  thanksContainer.classList.add('active');
});

circle.forEach(btn =>
  btn.addEventListener('click', () => {
    // rate set to the clicked score
    rate.innerHTML = btn.innerHTML;
    console.log(rate.innerHTML);
  })
);
```

### Useful resources

- [TailwindCSS Docs](https://tailwindcss.com/docs/installation) - This helped me for all the neccessary css styles. I really liked their documentation and will use it going forward.
- [MDN Documentation on Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) - This is an amazing article which helped me finally understand the use of .innerHTML. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)

