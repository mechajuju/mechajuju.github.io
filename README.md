# [DJBPM - Web Client](mechajuju.github.io)

**This is a web-based version of [djbpm](https://github.com/mechajuju/djbpm).**

DJBPM is a tool for DJs - it simplifies 3/4 loop transitions from a slower bpm to a faster bpm.  
This can be useful if you are transitioning from one genre to another (*e.g. from House to Drum and Bass*)

If you'd like to know how to perform the 3/4 loop transition technique,  
please reference this [Youtube video by DJ Carlo.](https://youtu.be/UUyqNDDdNn0)

## Usage
![Screenshot of DJBPM web tool](https://i.imgur.com/E5fUhrf.png)  
Referencing the screenshot above, you will enter your current BPM in the 'Known BPM' box.   
You will get two outputs: a Start/Loop BPM and an End BPM.

**'Start/Loop' Example**   
*You want to transition to 168 BPM, but don't know what the starting BPM should be.*
1. You enter '168' into the Known BPM field.
2. Look only at Start/Loop BPM - the result is 126.0
3. In this case, you will set your starting track to 126BPM, create a 3/4 loop, and end up at 168 BPM.

**'End' Example** (pictured in the screenshot above)   
*You're starting at 130 BPM. You need to know what the resulting BPM will be after your 3/4 loop has been made.* 
1. You enter '130' into the Known BPM field
3. Look only at End BPM - the result is 173.33
4. In this case, you are transitioning from a track at 130 BPM to another track at 173.33 BPM. 

I opted to display two decimal places for those that prefer to be hyper-precise,  
but feel free to round (*i.e. 173 BPM instead of 173.33 BPM*)
