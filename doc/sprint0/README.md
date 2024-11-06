GameScoutHub
===


# Motivation

## What is it ?
A MERN project that helps gamers find games based on personal preference by answering a list of questions. This website recommends game that matches your gaming taste

## What problem(s) does it solve ?
Are you sick of browsing endlessly in search of the ideal game that fulfills your requirements? Or perhaps you're having trouble finding a trustworthy gaming partner who can help you reach the top of the scoreboard and share your objectives. We get it—whether you're a casual gamer seeking fun or a competitive player aiming for the win, finding the right game or gaming partner can be frustrating  
That's why we created **GameScoutHub**, a website designed to take the guesswork out of finding the games and companions that match your unique preferences.


## Why it exists ?
Regardless of your preference for strategy, adventure, or fierce multiplayer combat, we make it simple to explore and choose games that fit your style. Furthermore, we facilitate the connection between you and other players who share your interests, ensuring that you never have to face challenges alone. Are you prepared to simplify and enhance gaming?

# Installation
First, check if you system has NodeJs installed. It requires   
* NodeJs >= V18.0
* Npm >= V10.0  

You can check by running the following commands
```python
#NodeJs Version
node -v 

#NPM Version
npm -v
```

Installation Step:  
1. Clone this project (by HTTPS or SSH)
2. Go to the project folder
3. Running the following commands  
```python
#Install packages
npm i

#Install modules for client and server
npm run setup #This command create node_modules in client and server folder
```
4. Before running the project, we need to create .env files in the server and client directories  
The content of the .env is (Update regularly)
```
PORT = 
DATABASE_URL = 
```
5. Start the project
```python
#After installation, start the project
npm run dev 
```
# Contribution
* Do you use git flow?   
As of Nov 6th 2024, we do not use git flow
* What do you name your branches?  
For the contributors, please name your branch as following: [Con]-<Feature you contributed>  
(i.e. [Con]- Better recommendation algorithm)
* Do you use GitHub issues or another ticketing website?  
Yes, we use GitHub issues to describe the task needed to implement. The issue will be named as following: [GSH-<issue no>] <Feature>
* Do you use pull requests?   
Any feature must use pull requests before merging to the main branch. It will be reviewed and accepted by the project manager. 
## License

[MIT](https://choosealicense.com/licenses/mit/)