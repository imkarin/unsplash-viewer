# Unsplash viewer
ReactJS based website for searching and viewing Unsplash images, using the Unsplash API. 

View this project live [on Heroku](https://unsplash-viewer.herokuapp.com/). Read along to see the project [overview & progress ↓](#project-overview). View the [Figma prototype](https://www.figma.com/file/SMwb0DRlr8SyI1n2Div1Kv/Unsplash-viewer?node-id=0%3A1).

<br>

<img alt="Project preview screenshot" src="https://i.imgur.com/Iiq1SZk.png" />

## Project overview
This is a responsive website using ReactJS and the Unsplash API to view photography uploaded to Unsplash. The features it contains, are:
* **Search bar** to search for photos by subject
* **Sort functionality** to sort by user, likes and creation-date
* **Hover** over photos to see some details
* **Fully responsive**, the website looks great on mobile devices and large screens

<br>

## Progress
In total, I spent about 5.5 hours on this project — 4.5 of which coding. This is how I went about it:

### 🎨 14:30 Prototype
To start off the Unsplash photoviewer assignment, I made myself a quick [Figma prototype](https://www.figma.com/file/SMwb0DRlr8SyI1n2Div1Kv/Unsplash-viewer?node-id=0%3A1) to work with. The prototype contained the following functionalities:
* A searchbar
* The search results: “No photos searched yet” / A 4-column grid that contained the search results
* A sort-button that allows the user to sort between creation-date, likes and user
<br>

### 🔍 15:30 Reading Unsplash API docs & looking for useful packages
Now that I had a prototype to work with, I read through the Unsplash API to see how their endpoints work and what kind of data I'm working with. Then, I could start looking for npm packages to help me with developing the different functionalities of the site. I found the following:
*  **react-masonry-css** - to easily create a grid to place the photo thumbnails in. I specifically looked for a package that could handle the different image-sizes (heights) well. I also made sure this package included options for responsiveness (different # of columns for different breakpoints).
*  **array-sort** - for quickly sorting the array of search results.
* **styled-components** - I've recently started using styled-components, and I really like how quickly I can style my React components with it. Especially the ability to pass props/themes into the css is what speeds my development process up a lot, and helps me build consistent-looking designs.
<br>

### 💻 16:00 Code
Time for code! I've committed often, and given my commits clear messages on what I've added/changed on the project. Check my [commit history](https://github.com/imkarin/unsplash-viewer/commits/main) to see how I went about the code. 

<br>

### 🎉 20:00 Break time!
After 30 commits I was quite happy with the result I've delivered. An old friend is coming over and we're going to hang out for a while. But who knows, I might feel the urge to implement more functionalities later! 😏

<br> 

### ✨ 01:00 Code (Mobile styling)
As predicted, I couldn't keep my hands off the project. The fact that the layout wasn't working on mobile (the usual: elements overflowing on the right) bothered me very much, so I decided to add some styling to make the app look good on small screens. That's it, I promise I won't touch it anymore! 🤞🏻

<br>
