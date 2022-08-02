const mainItems = document.querySelector(".main__items");
const subItems = document.querySelector(".sub__items");
const input = document.querySelector(".input__line");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  console.log(text);
  mainItems.appendChild(item);
  subItems.appendChild(item);
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item_name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML = '<i class="fa-solid fa-ban"></i>';
  deleteBtn.forEach(() => {
    deleteBtn.addEventListener("click", () => {
      mainItems.removeChild(itemRow);
      subItems.removeChild(itemRow);
    });
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}
const addBtn = document.querySelector(".footer__btn");
addBtn.forEach(() => {
  addBtn.addEventListener("click", () => {
    onAdd();
  });
});
