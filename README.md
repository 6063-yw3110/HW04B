**1**
*Since this is the first time I've written a code that has its own different design, I'm a little clueless. After trying to search for some examples online on the first day, I seem to have some ideas*

![example1](https://imgpile.com/images/DP0zvG.jpg)
![example2](https://imgpile.com/images/DP0VUa.jpg)

*So I started with the size of the canvas I wanted to make, considered the background color I wanted to use and what kind of pattern and color I wanted to generate with mouse control*

[![idea sketch.jpg](https://imgpile.com/images/DPBdES.jpg)]

My final idea is a 1000*1700 canvas with a beige background, every time the mouse clicks on the screen, rectangles of different sizes and colors with no stroke will appear,as every time a rectangle appears, a thin line of a certain thickness will be drawn randomly from the top to the end of the canvas

![first version](https://imgpile.com/images/DPBcb4.png)

I think the black lines are ugly, I'm going to switch to white and would like to adjust the thickness. And I'd like to set the rgb color range a bit instead of 0-255, but I set it to nostroke itself, I don't know why the rect() I drew still has stroke, so I'll change this one too

**2**
It's really amazing, I just wanted to try a random range of colors but I didn't expect the results to come out that I'm particularly happy with!So my second attempt become my final version！
but I thought 1000*1700 shows too long so I changed the canvas.