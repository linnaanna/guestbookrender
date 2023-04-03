# guestbookrender
GUESTBOOK APP

routes.js is a web server created with Node.js and Express. There are four routes (well six, if you count the status messages)

The / -route displays the front or home page of the site. It has pictures and text and has been formatted using Bootstrap.
It also has navigation buttons that lead to the site’s other pages.

The /guestbook -route loads a json file and parses it on the page as a formatted table. Formatting done using Bootstrap.

The /newmessage -route has an input form on the page. The form has fields for username, country, and messages and a submit button.
Empty fields are not allowed. Formatted using Bootstrap.
Pressing the submit button shows the /success -page if the post was successful and the /fail -page if not.
When the form is submitted the form data is saved as json to the data file.

The /ajaxmessage -route also shows an input form, but the data is collected and sent to the server as an Ajax call.
Empty fields are not allowed.
All the messages are returned as a response and rendered under the form. Formatted using Bootstrap.

FIles are uploaded to GitHub and the app is published via Render.
