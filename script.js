// Select elements
const addButton = document.getElementById("addButton");
const newItemInput = document.getElementById("newItem");
const itemList = document.getElementById("itemList");

// Add a new item
addButton.addEventListener("click", () => {
  const newItem = newItemInput.value.trim();
  if (newItem) {
    addItem(newItem);
    newItemInput.value = ""; // Clear input
  }
});

// Function to add item
function addItem(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button onclick="deleteItem(this)">Delete</button>
  `;
  itemList.appendChild(li);
}

// Function to delete item
function deleteItem(button) {
  const li = button.parentElement;
  itemList.removeChild(li);
}
