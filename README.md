# Movie-Sagas

This app gives you a list of movies with a Title, Movie Photo, and a Description of the movie. Whe you click on the poster it will route you to the Details Page where you will have the option of editing the movie. Clicking the edit button routes you to the Edit Page with two unput fields for a 'Movie Title' and 'Description'. After you input the new data and click 'save', the new data is rendered to DOM and also updates the database. 


## Built With

- React
- Javascript
- CSS
- SQL



### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [postgresSQL](https://www.postgresql.org)


### Installing

1. Download this project.
2. `npm install`
3. `npm run server`
4. `npm run client`

## Screen Shot


![Movie List] (movieList.jpg)
![Selcected Movie] (movieList2.jpg)
![Edit Movie] (movieList3.jpg)


## Completed Features

 ### Movie List Page

 - [x]

Displays all of the movies from the movie database. When a movie poster is clicked, the user is directed to the Details Page.

### Details Page

- [x]

Displays all movie details includeing Title, Movie Poster, Description, and Genre for the selected movie.

The Details Page has two buttons:

- `Back to List` button, which brings the user back to the Movie List Page.
- `Edit` button, which brings the user to the Edit Page.

### Edit Page

- [x]

Displays two input fields:

- an input field for changing the Movie Title, for the selected movie.
- an input field for changing the Movie Description.

The Edit Page has two buttons:

- `Cancel` button, which brings the user to the Details Page.
- `Save` button, which updates the Title and Description in the database and brings the user to the Movie List Page.


### Next Steps

- [ ] Display the current values in the Title and Description inputs on the Edit Page.
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.

## Deployment


## Authors

* Danielle Martain


## Acknowledgments

* Playfair Cohort for being so helpful and awesome!