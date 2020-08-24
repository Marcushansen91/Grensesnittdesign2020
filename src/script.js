import {getPostes} from '../data/posts.js';

let container = document.getElementById('container');
const posts = getPostes(); //Gets postes from data

//Creates a H2 with text
const createTitle = (title) => {
    let header = document.createElement("H2");
    const text = document.createTextNode(title);
    header.appendChild(text);
    return header;
}

//Prints one by one post
posts.forEach(post => {
    const header = createTitle(post.title);
    container.appendChild(header);
});