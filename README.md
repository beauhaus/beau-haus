# beau-haus
portfolio site

## Feature-set

|<h3>Feature</h3>|<h3>Notes</h3>|<h3>Status</h3>|
|:-----------|:-------|:-------|
|**React**|16.0.0|***√***|
|**Responsivity**|2 breakpoints|*pending*|
|**Normalization**|normalize.css|***√***|
|**Layout**|CSS Grid|*pending*|
|**CSS Variables**|in :root{} of stylesheet|***√***|
|**Tooling**|Webpack|***√***|
|**babel-core**|env,react|***√***|
|**Animations**|CSS & SVG GSAP library|***√***|
|**Routes**|React-Router)|*pending*|
|**TabIndex Attrs**|a-tags and btns|*Pending*|

-----------------
![Desktop Wireframe draft](./readmeImg/deskwiredraft.png "desktop wireframe draft") 

### LoFi Landing Wireframe Desktop


![LoFi Landing](./readmeImg/lofilanding.png "Lofi Landing page desk")

### Wireframe Draft

![iPad Wireframe draft](./readmeImg/ipadwiredraft.png "iPad wireframe draft")

### iPad Wireframe draft


![LandingPage Draft](./readmeImg/landingDraft1.png "Early landing page draft")

##### Landing Page draft with wake, but no waves, yet.

![waves Draft](./readmeImg/wavesDraft.png "Waves draft")

### Waves Draft
- perspective needs adjusting.
- intention is to fade in and out each randomly.
- randomised timing, randomized duration

### Landing Page Draft II with white-caps. (decided to nix the dark waves & kept the white-caps in the distance)

![waves DraftII](./readmeImg/draft2.jpg "Waves II draft")
- timing is now random for whitecaps.
- slight y-axis displacement to simulate incoming surf.
- BONUS: proper use of refs with GSAP!🎉 -woohoo!


## Pass props thru link
![pass props thru <Link/>](https://github.com/BEAUHAUS/barebones-animated-route-transitions/blob/master/refImg/propsThruLink.png?raw=true "Pass Props Thru Link")



## In pursuit of water reflection effect employing a filtered mask where the integrity of the image is informed by the lightness or darkness of the greyscale waves beneath the image.

--For now, the css-grid is set.

![Work on grid for collection view](https://raw.githubusercontent.com/BEAUHAUS/beau-haus/master/refImg/reflectionwip.png "work on grid for collection view")

TODO: make certain every page banner has desaturation .lo-fi class or     filter: url(#lo-saturation);



## "Please Hire Me" in morse code

https://en.wikipedia.org/wiki/Morse_code


P · − − · /10111011101   (11)

000




L · − · · /101110101    (9)


000

E · /1

000

A · −  / 10111 (5)

000

S · · · /10101 (5)

000

E ·   /1

0000000

*"Please" is 55 (including rest after the word)









*************************************************


H · · · ·  /1010101 (7) 

000

I · · /101 (3)

000

R · − · /1011101 (7)

000

E · /1

0000000 

*"Hire" is  28 (including rest after word)

opacity: 1;
opacity: 1;
opacity: 1;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 1;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 1;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
 
*"Me" is 16 (including rest after the word)







https://en.wikipedia.org/wiki/Morse_code



0 = space between each dot or dash
000 = space between letters
0000000 = space between words

(in time) "-" = 000 (three dots)

example: "start message: "   − · − · − 
Is 15 units

1
1
1
0
1
0
1
1
1
0
1
0
1
1
1
0000000 *rest*

(15 + 7= 22 total)






The duration of a dash is three times the duration of a dot. 

Each dot or dash is followed by a short silence, equal to the dot duration.


The letters of a word are separated by a space equal to three dots (one dash), 

and the words are separated by a space equal to seven dots.

