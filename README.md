# fcc-local-weather-app
Free Code Camp's challenge on creating an application that displays the user's local weather with the click of a button.  

Purpose  
---
The goal of this project was to learn about making an API called to a server with the XMLHttpRequest (XHR) object. Additionally, I used the Geolocation API in combination with a Free weather API to serve up the local weather which included temperature, weather conditions. I used the materialized.css framework to easily style the frontend. In addition, I gained working knowledge of using the DOM to manipulate HTML elements. Overall this was an eye opening experience in learning more and more about web development.  

Challenges  
---
So the API (https://fcc-weather-api.glitch.me/) that I used required coordinates of the user in order to make the API call. This presented my first probelm. How am I going to get the information required to make this call? I learned about using the Geolocation API in order to prompt the user for permission to get their location. In the object that is returned when the user allows the browser to get the location, I was able to navigate through the JSON and get the coordinates I needed in order to construct the URL that I need to make the get request to the API.  

Another challenge I faced was how to does one even make an API call to get information from a 3rd party server. I knew FCC suggested using JQuery but I wanted to learn how to do it without a framework. I was able to learn how to make a basic call by creating a new instance of the XMLHttpRequest. From this whole process I was able to learn basic information about response codes like 200 and 400.  

The next challenge that I faced how do I display the data from the API call. I was able to learn enough about the DOM in order to inject the data into specific html tags.  
