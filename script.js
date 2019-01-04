const popular = "Popular"
const home = "Home"
const all = "All"
const random ="Random"
const users = "Users"


const subReddit = [home, popular, all, random, users]


const container = document.querySelector('#subreddits');
subReddit.forEach(sub => {
  const item = document.createElement('li');
  const dash = document.createTextNode("-")
  item.innerHTML = sub;
  container.appendChild(item);
  container.appendChild(dash);
});