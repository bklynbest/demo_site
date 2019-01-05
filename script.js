const popular = "Popular"
const home = "Home"
const all = "All"
const random = "Random"
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




const hot = "Hot"
const news = "News"
const rising = "Rising"
const controversial = "Controversial"
const tops = "Top"
const gilded = "Gilded"
const wiki = "Wiki"

const nav = [hot, news, rising, controversial, tops, gilded, wiki]

const navbarContainer = document.querySelector('#topics');
nav.forEach(newNav => {
  const item = document.createElement('li');
  item.innerHTML = newNav;
  navbarContainer.appendChild(item);
});

const profile = ["Britannia", "(100,000)", "<strong>Preferences</strong>", "logout"]

const profileContainer = document.querySelector('#profile');
profile.forEach(myProfile => {
  const item = document.createElement('li');
  item.innerHTML = myProfile;
  profileContainer.appendChild(item);
});
