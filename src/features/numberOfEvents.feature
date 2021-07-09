Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 2 (32 in live production) is the default number
Given the user is on the events page
When the user has not selected a number of events to show
Then the page will show 2 (32 in live production) events by default

Scenario: User can change the number of events they want to see
Given the user is on the events page
When the user selects the number of events to display
Then the page will show the number of events that the user selected