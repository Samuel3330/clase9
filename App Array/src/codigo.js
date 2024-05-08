let ul = document.getElementById("cont");
let btnAddUser = document.getElementById("username");
let label = `
    
`;

function viewNames(names) {
  for (let i = 0; i < names.length; i++) {
    label = label + `<li>${names[i]}</li>`;
  }
}
function addName() {
  let names = [];
  names.push(prompt("Digita la palabra"));
  viewNames(names);
  ul.innerHTML = label;
}

btnAddUser.addEventListener("click", () => {
  addName();
});

console.log(cont);
