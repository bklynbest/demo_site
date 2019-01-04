const popular = "Popular"
const home = "Home"
const all = "All"
const random ="Random"
const users = "Users"
const programming = "I Love Programming"


const subReddit = [home, popular, all, random, users, "|", programming]


const container = document.querySelector('#subreddits');
subReddit.forEach(sub => {
  const item = document.createElement('li');
  const dash = document.createTextNode("-")
  item.innerHTML = sub;
  container.appendChild(dash);
  container.appendChild(item);
});