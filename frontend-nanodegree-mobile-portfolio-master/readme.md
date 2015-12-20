#Website Performance Optimization Project

 

##How to perform Web Optimization

 

* Download the entire project 4, and open it in a browser.

 

##Page load speed optimization

* Image compression and resize: Images were compressed and rescaled for the final layout.

 

* Inline CSS: The critical styles needed to the style the above –the –fold content are inlined and applied to the document immediately.

 

* Alternative media query in CSS: CSS for printing is placed in different external CSS files, because three different HTML files were used it.

 

* Minified CSS and JS: All CSS and JS files were minified, but were not obfuscated. The original unformatted files are present in the respective directories along with the formatted files.

 

##Frame rate optimization

* Pulling out unnecessary JS operations out of for loops optimized the loops in views/js/main.js.

* Debouncing: scroll events were debounced to decouple the animations and only repaint when required.

###Framerate Timelines: 
  Saved JSON timelines and screenshots for pizza.html is located in framerateImages folder and dsiplayed below
* *Framerate for pizza.html*
![alt text](https://github.com/sonamsinha/front-enddev_udacity/blob/master/frontend-nanodegree-mobile-portfolio-master/frameRateImages/frameRate2.png)
* *Computational efficiency for pizza.html*
![alt text](https://github.com/sonamsinha/front-enddev_udacity/blob/master/frontend-nanodegree-mobile-portfolio-master/frameRateImages/frameRate1.png)

### Further areas of improvement
- Browser caching, configured server-side, could have reduced page loading time.
- Reduce the size of the above-the-fold content, to priortize the visible content.

### Resources
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
- [Leaner, Meaner, Faster Animations with requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations/)
