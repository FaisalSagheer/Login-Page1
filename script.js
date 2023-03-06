submit.addEventListener("click", (e) => {
  e.preventDefault();
  let username1 = username.value;
  let email1 = email.value;
  let password1 = password.value;

  localStorage.setItem("login", JSON.stringify([username1, email1, password1]));
  console.log(e);

  username.value = "";
  email.value = "";
  password.value = "";
});
