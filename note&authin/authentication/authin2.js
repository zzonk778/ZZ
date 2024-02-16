function setCookie(name, value, dtl) {
    const date = new Date();
    date.setTime(date.getTime() + dtl * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=.`;
  }
  


function getCookie(name) {
    const decodiedcookie= decodeURIComponent(document.cookie);
    console.log(decodiedcookie);
    const cookiearray =decodiedcookie.split(";");
    let result =null;
    cookiearray.forEach((cookie) => {
        if (cookie.indexOf(name) === 0) {
          result = cookie.substring(name.length + 1);
        }
      });
}

function deleteCookie(name){
  setCookie(name, null, null);
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "zeyad" && password === "123456") {
    setCookie("loggedInUser", username, 3);
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("user").textContent = username;
    document.getElementById("loginForm").style.display = "none";
  } else {
    alert("enter valid name !!!!");
  }
}

function logout() {
    deleteCookie("loggedInUser");
    document.getElementById("loginForm").style.display = "flex";
    document.getElementById("loggedIn").style.display = "none";
  }

  window.onload = function () {
    const loggedInAdmin = getCookie("loggedInUser");
    if (loggedInAdmin) {
      document.getElementById("loggedIn").style.display = "block";
      document.getElementById("user").textContent = loggedInAdmin;
      document.getElementById("loginForm").style.display = "none";
    }
  };
  