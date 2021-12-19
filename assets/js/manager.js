// Event listener to prevent employees from accessing manager page
window.addEventListener('load', verifyToken('Employee'));

// Logout and manager name selectors
const logoutEl = document.querySelector("#logoutEl");
const nameEl = document.querySelector('#managerName');

// Add name to element
nameEl.textContent = getName();


// Get all reimbursements 
const url = `http://127.0.0.1:5000/reimbursements/all`
fetch(url).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(error));


// Logout event listener
logoutEl.addEventListener("click", logout);