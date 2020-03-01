
# Learning server-side programming 

This is my 4th assignment for the Dynamic Web Development class in ITP, NYU. The course focuses on the fundamentals of building "full stack" web applications. For this week I should design my API on paper, develop and deploy it on glitch.com. 

Since creating API is a compllicated task for the beginner like me, I decided to hold to the following plan:

1. Work on the challenges that we've been exploring in class as the part of the studio, modifying them a little bit. 
2. Where things in the class workbook are getting more confusing and overwhelming (specifically, starting with Postman) — try to understand it as much as I can, list all the questions.
3. Describe my future API (a few of them, actually, because I have a bunch of ideas) as thorougly as I can for now. 
4. Hopefully develop one of these as part of my final project.

## Working on the 'payed skills generator' and the 'colorQuote generator'

First of all, of my code for this part of the assignment lives [in this repository](https://github.com/eglazkova/DWD_A4_my_server_1-7).

In class, in order to practice node.js basics, npm and its core libraries, we made a 'Metal band name' and worked a lot with pizzaToppings.json — for example, to create the topping generator. I begun on modifying this to build something like my own personal ideal 'payed skills generator'. So that I could get something very inspiring in my terminal. Hopefully, the voice from my future:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/KXdmHT8/Screenshot-2020-02-29-at-16-20-20.png" alt="Screenshot-2020-02-29-at-16-20-20" border="0"></a>

Then I looked up other npm libraries to build something else, and found two that seemed fine using for such occasion and 'mixing'. 

<a href="https://ibb.co/Tr1KVT3"><img src="https://i.ibb.co/25S8D64/Screenshot-2020-02-29-at-17-02-12.png" alt="Screenshot-2020-02-29-at-17-02-12" border="0"></a>
<a href="https://ibb.co/pLGCsnD"><img src="https://i.ibb.co/d51n379/Screenshot-2020-02-29-at-16-41-42.png" alt="Screenshot-2020-02-29-at-16-41-42" border="0"></a>


[randomColor](https://www.npmjs.com/package/randomcolor) and [quotesy](https://www.npmjs.com/package/quotesy) libraries are simple to use, since both of them have a very clear readable documentation. On the screenshot below there is the random color and random quote from both of them in my terminal window.


<a href="https://imgbb.com/"><img src="https://i.ibb.co/fNCFqrF/Screenshot-2020-02-29-at-17-25-22.png" alt="Screenshot-2020-02-29-at-17-25-22" border="0"></a>

What I couldn't achieve for now, however, was creating the function getColorQuote, for it would always return random color (that's okay) and 'Object object' for quote.

## Working with express static server, serving HTML on a specific route and returning JSON from a route

Code for this part of the assignment lives [in this repository](https://github.com/eglazkova/DWD_A4_server_7_9). Here I had finally (hopefully) managed to get the 'git init - git status - git add .- git commit -m "" - git push origin' process done! Anyway, this repository looks closer to what it should in this terms.

![demo](https://github.com/eglazkova/DWD_A4_server_7_9/blob/master/site_demo.gif)

### Deployment

This part of the assignment is [deployed](https://glitch.com/~eglazkova-dwd-a4-server-7-9) on Glitch.

## Working with Postman

Here I have more questions than answers, for now. Because I got here:

<a href="https://ibb.co/N7mLTRj"><img src="https://i.ibb.co/yVY842y/Screenshot-2020-02-29-at-22-48-29.png" alt="Screenshot-2020-02-29-at-22-48-29" border="0"></a>

But never got there:

<a href="https://ibb.co/YDF3Lpt"><img src="https://i.ibb.co/gvL3RzD/11-postman-POST-toppings-1.png" alt="11-postman-POST-toppings-1" border="0"></a>

And I felt like I should add additional topping to this function (below) but didn't find any clue about it in the solutions.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/8xnYm4R/Screenshot-2020-02-29-at-23-14-34.png" alt="Screenshot-2020-02-29-at-23-14-34" border="0"></a>

## Built with

* [VS Code](https://code.visualstudio.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Glitch](https://glitch.com/)

## Challenges, Struggles & Questions

* As I mentioned above, I was totally lost on the Challenge 11 on the workbook, and didn't get where did we actually add the Octopus topping?
* I would appreciate the help to figure out how I should have written function below to get both random color and random quote in return. I only managed to get them separately, or only random color and [Object object] instead of the author and the quote.

<a href="https://ibb.co/37GqpXF"><img src="https://i.ibb.co/zrjYXc2/Screenshot-2020-03-01-at-15-46-54.png" alt="Screenshot-2020-03-01-at-15-46-54" border="0"></a>

* I couldn't answer the question below, because for me nothing changed 😳

<a href="https://ibb.co/FXk62pK"><img src="https://i.ibb.co/W0NnZC6/Screenshot-2020-02-29-at-21-50-39.png" alt="Screenshot-2020-02-29-at-21-50-39" border="0"></a>

* Since last class and still, I am not sure I am getting what 'nodeman' does but I feel like I can maybe get it in a while, so it's more like a note to me.

## Designing my API

Ideas of what I could build with the data that I have on my computer.

### API as the portfolio

This is pretty vague for now. Since job and internsips search is on my mind, I was thinking of gathering the data about myself into one folder on my computer, structuring it carefully, and building API that would at the same time give access to my skills, create an image of 'professional face', and demonstrate that I ... well, am capable of creating an API!

### Surreal stories API

This one I love much better. I am a big fan of computer generated literature and have background in screenwriting. Screenwriting is all about structure, just as the language. Besides, as a writer (well, let's pretend I am the one) I often got stuck into my own mind while creating characters, conflicts, settings, situations. This is quite common challenge for the fiction writers of any kind — just to get out of their head and stop describing what they know except for what they feel. At the same time, drama, characters, conflicts all follow the patterns and archetypes that could be programmed and then randomized. Besides, generative literature has an inimitable vibe of surreality and nonsense in it that could be that funny and wild that it almost becomes art. 

So, it all sounds pretty ambitious for the final project, considering I don't have any scalable array of data that could be used to generate something really great. However, I have some data, and could have thought on generating stories based on either all the texts I have on my laptop, OR 'one year in ITP' text project (randomizing my notes), OR something that analyzes all of my countless chats in different messengers to create something like my absurd-wordish-communication-portrait. I mean it more or less like something funny and demonstrative of my skills, once again, or a prototype for a bigger idea.

#### Execution 

Since this week was dedicated to understanding HOW to build an API, I need to try to describe how I would do it.
However, once I start thinking about what user actually requests and gets from my API, things get trickier. I could write the endpoint function for getting titles of all the ‘stories’ (messages, content pieces) as a list. I could also let user add something to the folder or manipulate the files otherwise.
So, I probably should get rid of the idea to use only MY texts in favour of gathering some array of random texts on my server side, writing the program that would manipulate this array, then give user on the other side opportunity to add something there and get the generated text in return. 

## Resourses that I couldn't absorb this week but will have to, eventually

Except for Coding train and readings on the syllabus.

* Dev Ed. [Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc)
* Steve Griffith. [The Basics of Using Postman for API Testing](https://www.youtube.com/watch?v=t5n07Ybz7yI)
* [Wordpress REST API Handbook](https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/)

