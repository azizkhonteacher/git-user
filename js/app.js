// dark vs light hodisasi

const html = document.querySelector("html");
const darcLightBtn = document.getElementById("t-b");
const darcLightBtnSpan = document.getElementById("t-b-p");

darcLightBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if ((darcLightBtnSpan.textContent = "dark")) {
    darcLightBtnSpan.textContent = "light";
  } else if ((darcLightBtnSpan.textContent = "light")) {
    darcLightBtnSpan.textContent = "dark";
  }
});

// defold chiquvchi user
const userAvatar = document.getElementById("user__info-avatar-img");
const userName = document.querySelector(".user__name");
const userDate = document.querySelector(".user__date");
const userLogin = document.querySelector(".user__email");
const userBio = document.querySelector(".user__bio");
const userRepos = document.querySelector(".user__post-repos-number")
const userFollowers = document.querySelector(".user__post-followers-number")
const userFollowing = document.querySelector(".user__post-following-number")

const userLocation = document.querySelector(".location__text user__info-desc-link-text")
const userTwitter = document.querySelector(".twitter__text user__info-desc-link-text")
const userURL = document.querySelector(".url__text user__info-desc-link-text")
const userOffice = document.querySelector(".office-builder__text user__info-desc-link-text")


fetch(`https://api.github.com/users/octocat`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    userAvatar.innerHTML = `<img src="${data.avatar_url}"  alt="user__info-avatar">`;
    userName.textContent = data.name;
    userDate.textContent = data.created_at;
    userLogin.textContent = "@" + data.login;

    if(!(data.bio = "null" || (data.bio = ""))){
      userBio.textContent = data.bio;
    }else{
      userBio.textContent = "This profile has no bio";
    }

    userRepos.textContent = data.public_repos;
    userFollowers.textContent = data.followers;
    userFollowing.textContent = data.following;

    userLocation.textContent = data.location;

    if(!(data.twitter_username = "Null" || (data.twitter_username = ""))){
      userTwitter.textContent = "Not Available";
      console.log("salom");
    }else{
      userTwitter.textContent = data.twitter_username;
    }

  })
  .catch((err) => {
    console.log(err);
  });
