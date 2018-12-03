# ELEMENTS

## Approach
I had a lot of fun doing this project! The most challenging part for me, was figuring out how to parse the html correctly. I decided to split the html string into an array, splitting it at the '<' character, which indicates a tag.

From there, I was able to wrap the element and tag name in separate divs. This allowed me to color the tag names, but also have the element linked to their corresponding tag name via a classname so that when a user clicks on a tag name, the entire element also gets highlighted.

If I had more time, I would have liked to do more testing and improve my html parsing function - there are a lot of source pages that have miscellaneous characters next to '<' characters, so my html parsing function is not perfect. I also would have liked to improve the speed of my app by implementing a batch rendering method, and add a feature that allows a user to see the page source rendered alongside the page source code.

## Deployed App
https://ancient-shore-20539.herokuapp.com/

## Setup
To run this app locally:
1. npm install
2. npm run start-dev

## Testing
1. npm test


