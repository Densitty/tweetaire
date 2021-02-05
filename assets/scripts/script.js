const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const feedsPage = document.querySelector(".feeds-page");
const loginBtn = document.querySelector(".btn-top");
const loginFormBtn = document.querySelector(".login-form .login-form-btn");
const loginError = document.querySelector(".login-modal");
const postBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const postTweet = document.querySelector(".modal-header button");
const addTweet = document.querySelector(".modal-icons span");
const feedInput = document.querySelector(".modal-input");

// Target either the signup or login button
const middleContent = document.querySelector(".middle-content");

/**
 * To activate/show the login page
 */

const goToLoginPage = () => {
  // hide the main-page
  mainPage.style.display = "none";
  // show the login-page
  loginPage.style.display = "grid";
};

// listen for the click event on any of the buttons inside the middleContent on homepage
middleContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("main-btn")) {
    goToLoginPage();
  }
});

// target the login button on the main-page

loginBtn.addEventListener("click", () => {
  const username = document.querySelector(".user-info");
  const password = document.querySelector(".password");
  // const loginError = document.querySelector(".login-modal");

  if (username.value !== "" && password.value !== "") {
    mainPage.style.display = "none";
    feedsPage.style.display = "grid";
  } else {
    goToLoginPage();
    loginError.classList.add("active");
  }
});

// target the login btn on the login-page
loginFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector(".login-user-info");
  const password = document.querySelector(".login-user-password");
  // const loginError = document.querySelector(".login-modal");

  activateLoginValidator(username, password);
});

loginError.addEventListener("click", (e) => {
  if (e.target.tagName === "svg") {
    e.currentTarget.classList.remove("active");
    console.log(e.currentTarget);
  }
});

postBtn.addEventListener("click", () => {
  modalWrapper.classList.add("modal-wrapper-active");
  modal.classList.add("modal-active");
});

/* remove the modal-wrapper from the screen upon clicking of x */
document.querySelector(".modal-header").addEventListener("click", (e) => {
  if (e.target.tagName === "path") {
    modalWrapper.classList.remove("modal-wrapper-active");
    modal.classList.remove("modal-active");
    // clear everything inside the input
    feedInput.value = "";
    // decrease the opacity of the modal post buttons again
    changeOpacity(0.5);
  }
});

/* activate the post btn or + icon when the input element is focused on and the length of the value is more than 1 */

feedInput.addEventListener("keyup", makeOpacityChanges);

// feedInput.addEventListener("blur", makeOpacityChanges);

function makeOpacityChanges(e) {
  const tweet = e.target.value;
  if (tweet.length > 0) {
    changeOpacity(1);
  } else {
    changeOpacity(0.5);
  }
}

function changeOpacity(x) {
  postTweet.style.opacity = x;
  addTweet.style.opacity = x;
}

function activateLoginValidator(username, password) {
  if (username.value !== "" && password.value !== "") {
    loginPage.style.display = "none";
    // mainPage.style.display = "none";
    feedsPage.style.display = "grid";
  } else {
    loginPage.style.display = "grid";
    loginError.classList.add("active");
  }
}
