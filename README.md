# Thermostat

Build the business logic to model a simple thermostat, and learn to hook it up to a dynamic visual interface using jQuery - all within the browser. Finally, you'll use JavaScript to fetch data from external sources and display that on the page - again, all right from the page. Underpinning all this will be a new testing framework to help you test-drive your JavaScript code - Jasmine.

## Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

### Additional features
* be able to search for the city you are in and get the temperature (defaults to London)

## Instructions

* Open `index.html` in a browser

If you want to be able to save the state of the thermostat you can run a server to host an api

* install the ruby gems `bundle install`
* run the server for the api `rackup -p 3111`
