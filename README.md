# Gif Service

Simple GIF sharing app

## Getting Started

To deploy the application on a local machine, 
enter your server url data in src/app/const/connect.ts.

### Prerequisites

Make sure you have NodeJS, @angular-cli and npm installed before starting the program.


### Installing

After you prepare your connect.ts you can start installing dependencies on the server with the command below

    npm install

After installing you can start server:
    
    ng serve

## Running the tests

Unit tests are run by the command below:
    
    ng test
    
## Deployment

Deploy instruction:

1. Change your connect.ts consts to your server data(server url and name of heroku server project)
2. create new Heroku project
    
        heroku container:login
        heroku create 
       
3. Since we have configured our project, we can push our docker image to the heroku server and release it

        heroku container:push web -a <name-of-your-heroku-project>
        heroku container:release web -a <name-of-your-heroku-project>
        heroku open        

        
