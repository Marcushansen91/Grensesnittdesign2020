import { getPostes } from '../data/posts.js';

const posts = getPostes(); //Gets postes from data

//DOM connections
let container = document.getElementById('container');

//Creates a H2 with text
const createTitle = (title) => {
    let header = document.createElement("H2");
    const text = document.createTextNode(title);
    header.className = "title"
    header.appendChild(text);
    return header;
}

//TODO: Create a img function to present an image

//TODO: Create a description child node

/* TODO: 
Maby make a card View that is combining all 
the other functions and creates a nice representation 
of each item in the database */

//Prints one by one post
posts.forEach(post => {
    const header = createTitle(post.title);
    container.appendChild(header);
});