## The project

This is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## Starting up

The project was built using create-react-app boiler plate code. Use npm run start, to run the project on localhost: 3000

## Features and requirements

#### Key Features

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city

#### User Stories

###### SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

1. **Given** user hasn’t searched for any city
2. **When** the user opens the app
3. **Then** the user should see a list of all upcoming events

###### SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

1. **Given** the main page is open
2. **When** user starts typing in the city textbox
3. **Then** the user should see a list of cities (suggestions) that match what they’ve typed

###### SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

1. **Given** the user was typing “Berlin” in the city textbox
   And the list of suggested cities is showing
2. **When** the user selects a city (e.g., “Berlin, Germany”) from the list
3. **Then** their city should be changed to that city (i.e., “Berlin, Germany”)
   And the user should receive a list of upcoming events in that city

###### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

_Scenario 1: An event element is collapsed by default_

1. **Given** the main page is open
2. **When**user looks at all the events
3. **Then** the events should be collapsed by default
   _Scenario 2: User can expand an event to see its details_
4. **Given** the user is on a particular collapsed event
5. **When** user clicks on a link to expand the event
6. **Then** the event will expand to show all the details
   _Scenario 3: User can collapse an event to hide its details_
7. **Given** the user is on a particular expanded event
8. **When** user clicks on a link to collapse the event
9. **Then** the event will collapse to hide all the details

###### FEATURE 3: SPECIFY NUMBER OF EVENTS

_Scenario 1: When user hasn’t specified a number, 32 is the default number_

1. **Given** the user is on the events page
2. **When** the user has not selected a number of events to show
3. **Then** the page will show 32 events by default
   _Scenario 2: User can change the number of events they want to see_
4. **Given** the user is on the events page
5. **When** the user selects the number of events to display
6. **Then** the page will show the number of events that the user selected

###### FEATURE 4: USE THE APP WHEN OFFLINE

_Scenario 1: Show cached data when there’s no internet connection_

1. **Given** there is no internet connection
2. **When** the user visits the meet app
3. **Then** the page will show the cached data of the app
   _Scenario 2: Show error when user changes the settings (city, time range)_
4. **Given** there is no internet connection
5. **When** the user changes the settings (city, time range)
6. **Then** the page will display an error

###### FEATURE 5: DATA VISUALIZATION

_Scenario 1: Show a chart with the number of upcoming events in each city_

1. **Given** the page is open
2. **When** the user visits that page
3. **Then** the page will display a chart with the number of upcoming events in each city

#### Technical requirements

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization
  server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
  as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of
  1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service
  worker.
- Users may be able to install the app on desktop and add the app to their home screen
  on mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to
  the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%.
- The app must be monitored using an online monitoring tool.
