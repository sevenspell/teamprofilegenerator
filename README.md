# week10-assignment - Team Profile Generator

GIF link
https://github.com/sevenspell/week9-assignment/blob/master/week9homeworkx1000x5frames.gif

## Description 

This project allows users aka managers to quickly generate team profiles via Node.js - almost like an org chart.

It uses NPM package Inquirer to prompt questions to collect user information. The series of questions are designed to guide the manager entering the information to create their own team profile webpage. 

Once all the information for employees are entered, it then reads HTML code from a different Javascript file and feeds user data into the HTML template in order to generate an HTML page containing the information entered. This includes categorization (and color-coding) according to Managers, Engineers, and Interns. 

Managers' cards would display their name, designation, employee ID, email and office number. 
Engineers' cards would display their name, designation, employee ID, email and Github profile link. 
Interns' cards would display their name, designation, employee ID, email and their school.


## Usage 

1. Open up Gitbash for the root folder where app.js is.
2. Enter 'node app.js' in the command line and press 'Enter'.
3. Enter answers to the questions prompted according to the team members you want to input.
4. When there are no more team members to be selected, choose the 3rd option that says 'I do not have any more employees to add' and it will end the input process.
5. A 'team.html' file will be generated. Go to the /output folder to look for 'team.html' and double click. You'll see the team members you added organized by 'Managers', 'Engineers' then 'Interns' and color-coded accordingly.

See GIF for animated steps.

https://github.com/sevenspell/week9-assignment/blob/master/week9homeworkx1000x5frames.gif


## Credits

I had help from Sandesh and Harshpreet, as well as some guidance from Dhani (https://github.com/pozengineer).

Screen recording for making into a GIF was done via Screen-o-matic (https://screencast-o-matic.com/screen-recorder).
GIF making was done via https://hnet.com/video-to-gif/.






