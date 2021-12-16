const login = (data) => {
  const errorEl = document.querySelector("#hideErrorMessage");

  // send data retrieve from database to localStorage
  localStorage.setItem("pseudoToken", JSON.stringify(data));

  // redirect user base the role property in data
  const expr = data.companyRole;
  switch (expr) {
    case "Employee":
      window.location.assign("/employee.html");
      break;
    case "Manager":
      window.location.assign("/manager.html");
      break;
    default:
      errorEl.setAttribute("id", "errorMessage");
      errorEl.textContent = "Opps, something went...refresh and try again!";
  }
};

const validateCredentials = async (e) => {
  e.preventDefault();

  const errorEl = document.querySelector("#hideErrorMessage");

  let userName = document.querySelector("#userName").value;
  let userPassword = document.querySelector("#password").value;
  let role = document.querySelector("#role").value;

  let url = `http://127.0.0.1:5000/${role}`;

  let loginData = {
    userName,
    userPassword,
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (response.status === 200) {
    let content = await response.json();
    login(content);
  } else {
    let content = await response.json();
    console.log(content.message);
    errorEl.setAttribute("id", "errorMessage");
    errorEl.textContent = content.message;
  }
};
