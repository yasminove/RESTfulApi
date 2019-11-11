



# RESTful API Workshop

## Contents
1. [Learning Outcomes](#learning-outcomes)
2. [Introduction](#introduction)
3. [What is REST](#what-is-REST-and-how-does-it-work)
4. [Workshop](#workshop)

## Learning Outcomes
* To understand the principles of REST and how it works.
* To build a RESTful API from scratch.

## Introduction
You may have heard of RESTful API's a lot and you may know what an API is. But
what does REST mean? How does it work? And how to build a RESTful API from scratch




## What is REST and how does it work?


Before heading into RESTful API's, we need to know what an API is.

API stands for Application Program Interface(API) and it is a set of subroutine
 definitions, protocols, and tools for building application software. In general
  terms, it is a set of clearly defined methods of communication between various
  software components.

API's are characterized by:

- A Structured request and response.
- API's are a contract provided by one piece of software to another.

What is REST :
- It stands for  **RE**presentational **S**tate **T**ransfer (REST).
- It is an architecture style for designing networked communications.
- Relies on a client-server protocol, always HTTP.
- It treats server objects as resources that can be updated or destroyed.
  - Example- A blog-post on a database:
      We can create, update and delete the post with a POST,UPDATE, DELETE request
- What makes REST awesome is that uses HTTP and some kind of standard like JSON.
 Thus, it can be used by any programming language.

 - What is RESTful:
   - It means conforming to the REST restrictions.


* HTTP Methods:

Since REST uses HTTP, we need to have a look at HTTP method:
   - GET: used to retrieve data from a specified resource.
   - POST: Used to submit data to be processed by a specified resource.
   - PUT: Update a specified resource, usually by sending a request to a uri with an id for that
 specific resource.
   - DELETE: Deletes a resource.
   - HEAD: Same as GET, but it doesn't return a body. It just returns the head information.
   - OPTIONS : Can be used to see the supported methods of a server.
   - PATCH: Used to update partial resources.

-Authentication:
- Some API's require authentication to use their service.
API's which allow us to access services without knowing who we are, are Public API's.

- But sometimes we have to authenticate before using them. We can register our app with the provider's website and sometimes we have to pay for it.

- How to authenticate:
There are many ways in which this authentication can be implemented
 - OAuth: Getting an access token and submitting it along with the request. If you tend to make a request without the acces token, you will get an unauthorized error.

 - Curl: A tool that we can use to transfer data using multiple resources.


- Tools to make requests to our API's:
    - Postman       - RESTeasy

- What is request limit:
  You can make requests to an api without authentication. Other API's, however, require authentication for certain amount of requests. So, to keep using an application, we have to register it with the provider's website.
  For expample, to register your app with Github API. go to:

  ```
  github.com > settings > applications > new


 After we register the application, it gives us a Client ID and a Client Secret
 and we can use them. We can include them within our application code or we
 can insert them right within the url we're requesting.

## Workshop:
### Initial Setup

The starting file that is provided with this repo has a few things set up for you ready to go. (Instructuons given below as a reminder). The modelling is done in postgreSQL. Before going forward there are a few items to point out:
* Please make sure you have a database set up so you can use it here.
* The config.env file is not included. This is where that private database info will be stored. The steps to add the relevant pieces of information will be outlined in the workshop.
* The database model methods will be explained below.
* A basic server has been set up for you.

1. Clone this repo
```git
git clone git@github.com:yasminhillis/RESTfulApi.git
```
2. Run ```npm install```.


## Set up config file and start up server up
1. The npm install would have added ```env2```.  We need to now create a ```config.env``` file in the root directory.
3.	To test the server with nodemon, use **npm run start**
4.  Navigate to your text editor. The ```app.js``` is the file which will start the basic server.

## Build the database
**Note**: Here are some quick instructions to remind you how to set up a database:

In terminal type psql, or pgcli if installed. Within psql/pcli enter the following commands each followed by a return. Things in square brackets are for your desired values. Note that password is a string inside '' (NOT double quotes ""):
```
CREATE DATABASE [db_name];
CREATE USER [user_name] WITH SUPERUSER PASSWORD ['password'];
ALTER DATABASE [db_name] OWNER TO [user_name];
```

1. We need  to add the database URL in the following format, adding your database's details:
```js
DATABASE_URL = postgres://[username]:[password]@localhost:5432/[database]
```
2. Build the database with:
```js
node models/build.js
```





## Now Your turn
 - There are other HTTP methods that you can try out. Try the UPDATE AND DELETE methods. This is a chance to get to know how RESTful API's work.



I hope you find this tutorial helpful and informative. If you spot any issues or have questions please let me know :D!

Yasmin
@yasminhillis
