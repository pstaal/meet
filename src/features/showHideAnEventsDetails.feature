
Feature: SHOW/HIDE AN EVENT'S DETAILS

Scenario: An event element is collapsed by default
Given the main page is open
When user looks at all the events
Then the events should be collapsed by default

Scenario: User can expand an event to see its details
Given the user is on a particular collapsed event
When user clicks on a link to expand the event
Then the event will expand to show all the details

Scenario: User can collapse an event to hide its details
Given the user is on a particular expanded event
When user clicks on a link to collapse the event
Then the event will collapse to hide all the details