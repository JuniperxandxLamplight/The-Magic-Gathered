# The Magic: Gathered

#### _'Team Week' Angular Project, Epicodus Homework, 4/11/19_
##### _by Aurora Shido-Wagenet, David Monarrez, Kim McConnell, & Slater Smith_

### Description

A web application for organizing, searching, sorting, and deck-building with cards from the popular card game _Magic: The Gathering_. This application was built for practice using Angular, working with APIs, building UI wireframes, using services, version control in Git, team-based web development, and data storage & deployment in Firebase. This project's user interface is currently only built out for phone viewport size, and current functionality includes ability to search and store cards based on color, type, name, and supertype; manipulating data gathered from the ScryFall API to filter and display card information to the user.

View this project live through Firebase at {{ **URL PENDING** }}

Learn about 'Magic: The Gathering' here: https://magic.wizards.com/en

Learn about the ScryFall API here: https://scryfall.com/docs/api

### Existing UI behavior specifications:
###### CARD SEARCHES:
| BEHAVIOR | INPUT |OUTPUT |
| ------------------- | ----------------------- | ----------------------- |
| If a user clicks on the search button, the page will populate with various cards| User clicks on the "Search" button| Page populates with a list of info bars representing different cards, styled to reflect card color and type and listing card name|
| If a user searches for a term, the page will populate with cards including that term based on name or supertype (whichever the user selects)| User leaves 'by card name' selected, and searches the words 'Nicol Bolas, God-Pharo'| Page populates only with cards including this term |
| If a user selects color and card type and clicks 'search', the page only populates with cards including these parameters| User leaves search bar blank, and clicks the 'green', 'blue', and 'creature' buttons (the creature button designated by an icon depicting three claw marks)| Page populates wit _only_h cards that include green, blue, and creature parameters |
| If a user selects color and card type and searches for a particular term the page only populates with cards including these parameters| User types and searches the words 'Nicol Bolas, God-Pharo', clicking the 'blue', and 'planeswalker' buttons (the 'planeswalker' button designated by an icon resembling an eye)| Page populates wit _only_h cards that include green, blue, and creature parameters |
| If a user selects color and card type and searches for a particular term the page only populates with cards including these parameters| User types and searches the words 'Nicol Bolas, God-Pharo', clicking the 'blue', and 'planeswalker' buttons (the 'planeswalker' button designated by an icon resembling an eye)| Page populates wit _only_h cards that include green, blue, and creature parameters |

###### CARD DETAIL DISPLAY:
| BEHAVIOR | INPUT |OUTPUT |
| ------------------- | ----------------------- | ----------------------- |
| Upon clicking on a card info bar, a detail page showing in-depth statistical information will appear| User searches for, and then clicks on the 'Nicol Bolas, God-Pharo' card info bar | Detail page appears |
| User can exit out of detail display | presses "back" | User is redirected to previous view |

### Future/Planned UI Behavior Specifications:

###### LIBRARY STORAGE:
| BEHAVIOR | INPUT |OUTPUT |
| ------------------- | ----------------------- | ----------------------- |
| User can navigate to "Cards" window by toggling the "Cards" button at the bottom of the main page, where the user can then search for any _Magic_ card| User clicks "Cards", then searches for 'Nicol Bolas, God-Pharo' | 'Nicol Bolas, God-Pharo' card appears|
| After searching for a card, user can enter a card's detail display, then click "add to library". Then, after the user toggles "Library" button, the card will appear in the Library view. | User clicks on the 'Nicol Bolas, God-Pharo' card and clicks "add to library." The user then toggles to library view by clicking the "Library" button at the bottom of the screen | User is redirected to the "Library view" and the 'Nicol Bolas, God-Pharo' card info bar appears |


###### LOGIN:
| BEHAVIOR | INPUT |OUTPUT |
| ------------------- | ----------------------- | ----------------------- |
| Upon opening the program, the user will be prompted to create an account and log into their account.| User starts program | User prompted to create account and log into account |
| Upon login, user is redirected to user interface | User logs in| User is directed to cards window |



## Setup Instructions

View this project live through Firebase at {{ **URL PENDING** }}

If you would like to instead host this project on your local machine, you will need to clone this project from GitHub, create your own unique Firebase database, and then rebuild elements of the project manually to connect it to Firebase. To do so, follow the instructions listed:

1. Clone this repository to your desktop at https://github.com/JuniperxandxLamplight/The-Magic-Gathered
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. If typscript is not yet installed on your machine, run "$ npm install typescript -g" in your terminal.
6. To install the correct version of angular on your machine, run "$ npm install -g @angular/cli@1.6.5" in your terminal
7. If you receive the error "npm ERR! cb() never called!", you may need to update node with the command "$ brew upgrade node"
8. In your terminal, navigate from your desktop to your newly cloned directory by running the command "$ cd nyt-clone" in your terminal.
9. In the nyt-clone directory, run "$ npm install", then "$ ng build --prod" and then "$ ng serve" in your terminal.

**Resolving API Firebase Error**

10. At this juncture you should receive an error in your terminal "Module not found: Error: Can't resolve './api-keys'...". To resolve this error, first cancel your local server by pressing 'Ctrl + c' in your terminal, then run "$ touch src/app/api-keys.ts"
11. Open this new api-keys.ts file in your preferred code editor. https://atom.io is a great option.
12. In your new api-keys.ts file, you will need to supply API information for a personal firebase account for storage. For Firebase setup instructions and troubleshooting documentation, visit https://firebase.google.com/docs/web/setup
13. When your firebase account is set up and active, you may enter your personal account information into your api-keys.ts file and save it with the following code guidelines, replacing the guide code with your personal IDs and API:
![image](src/assets/images/readme_code_screenshot.png)
14. Once again in your terminal, run "$ ng build --prod" and then "$ ng serve" in your terminal. If you continue to receive errors, refer back to firebase documentation https://firebase.google.com/docs/web/setup
15. If your project compiles without, navigate to the URL "localhost:4200" in your web browser (Chrome preferred), and you will have successfully set up this project on your local machine.

### Technologies and Resources

* Angular
* npm & Node
* ScryFall API
* Firebase data storage & live url deployment

### License

*This software is licensed under the MIT license*
Copyright (c) 2019 **_Aurora Shido-Wagenet, David Monarrez, Kim McConnell, & Slater Smith_**
