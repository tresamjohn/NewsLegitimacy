Feature: Smoke Suite

Scenario: Open Guardians News Web application and get the news to be verified.
Given a web browser is at the Guardian's News Application's homepage
When the user 'accept' the cookies - Guardian consent message
Then get the first news in the list


Scenario: Verify that news displayed in Guardian website is valid or not via Google News.
Given a web browser is at the Google News application's page
When user enter news title and search the news
Then verify that news is legitimate


Scenario: Verify that Guardian news is valid or not via Google News by applying Date Posted Filter.
Given a web browser is at the Google News application's page
When user enter news title and search the news
Then apply Advance Search Filter as posted with in "Past 24 hours" time
And verify that news is legitimate

