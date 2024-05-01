const html = document.querySelector("html");
const changeMode = document.querySelector(".site__nav-btn");
const changeModeP = document.querySelector(".site__nav-btn p");

// DARK & LIGHT EVENT
let dark = JSON.parse(localStorage.getItem("mode")) ? true : false;

if (dark) {
  html.classList.add("dark");
  changeModeP.textContent = "light";
} else {
  html.classList.remove("dark");
  changeModeP.textContent = "dark";
}

changeMode.addEventListener("click", () => {
  if (JSON.parse(localStorage.getItem("mode"))) {
    html.classList.remove("dark");
    localStorage.setItem("mode", false);
    changeModeP.textContent = "dark";
  } else {
    html.classList.add("dark");
    localStorage.setItem("mode", true);
    changeModeP.textContent = "light";
  }
});

function userHTML(data) {
  console.log(data);
  const siteUser = document.querySelector(".site__user");

  siteUser.innerHTML = `
  <div class="container">
  <div class="card">
    <div class="site__user-avatar">
      <img src="${data.avatar_url}" alt="site__user-avatar" />
    </div>

    <div class="site__user-info">
      <div class="site__user-info-hero">
        <div class="site__user-avatar">
          <img
            src="${data.avatar_url}"
            alt="site__user-avatar"
          />
        </div>

        <div class="site__user-info-hero-user">
          <div class="w">
            <h2 class="user__name">${data.name}</h2>
            <p class="user__created_at">${data.created_at}</p>
          </div>
          <p class="user__login">@${data.login}</p>
        </div>
      </div>
      <p class="user__bio">${data.bio = "null" ? "This profile has no bio" : data.bio}</p>

      <div class="site__user-info-subscription">
        <ul>
          <li class="subs-title">Repos</li>
          <li class="subs-num" id="user-repos">${data.public_repos}</li>
        </ul>
        <ul>
          <li class="subs-title">Followers</li>
          <li class="subs-num" id="user-followers">${data.followers}</li>
        </ul>
        <ul>
          <li class="subs-title">Following</li>
          <li class="subs-num" id="user-following">${data.following}</li>
        </ul>
      </div>

      <div class="site__user-info-links">
        <ul>
          <li>
            <span class="link-icon location"></span>
            <p class="link-text" id="location">${data.location}</p>
          </li>
          <li>
            <span class="link-icon url"></span>
            <a href="#" class="link-text" id="url"
              >${data.blog = "null" ? "Not Available" : data.blog}</a
            >
          </li>
        </ul>
        <ul>
          <li>
            <span class="link-icon twitter"></span>
            <a href="#" class="link-text" id="twitter">${data.twitter_username = "null" ? "Not Available" : data.twitter_username}</a>
          </li>
          <li>
            <span class="link-icon office"></span>
            <a href="#" class="link-text" id="office">${data.company = "null" ? "Not Available" : data.company}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `
}

// defolt OCTOCAT

fetch("https://api.github.com/users/azizkhonteacher")
  .then((res) => res.json())
  .then((data) => userHTML(data))
  .catch((err) => console.log(err));
