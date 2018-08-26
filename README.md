# Ginetta Home Assignment

### What do you like about your solution?
I like the fact that my solution works the way it should. I also like that the files structure is very clear. I'm also happy that I managed to implement the solution with life cycle methods so that everything gets updated when it should.


### What do you dislike about your solution?
I dislike the amount of requests my solution makes to the Github API. In this implementation a GET request is fired after every time the input field changes. This often leads to 403 errors. I'm also not happy with the arrow key functionality. I didn't manage to properly set the boundaries for the down arrow. I think that if I'd taken a little bit more time to figure it out, it wouldn't be a problem.


### If you had a full day more to work on this, what would you improve?
First of all, I would find a way to minimize the GET request sent. For example, I could only fire a request every second. I think, by doing this, I would avoid the problem of making too many requests per minute and also allow for a better user experience. I think this would be beneficial because a lot of people type more than one character per second. This way some characters could accumulate before the request is sent to the API.
Another thing I would be improve is the error handling. Right now, if there has been an error, I only display a little message underneath that lets the user know that an error occurred. If I had more time I would display the precise error message to the user.
One more thing I would make better, would be mobile optimization. Right now, the CSS supports two different screen widths. But there are definitely many more improvements in terms of responsiveness that could be implemented.


### If you would start from scratch now, what would you do differently?
If I were to start from scratch I would probably not use Redux for this assigment. I had a tough time deciding whether to use Redux or not. The application is rather small and I believe I could attain the same results without Redux. And, I would hope that since less dependencies would be installed without Redux that it would preform a bit better. I chose to use Redux for this project because I knew it would clean up the component and because if I were to scale the project, it would be easier with Redux already set up and properly configured.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
