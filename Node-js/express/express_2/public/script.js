document.addEventListener("DOMContentLoaded", () => {
  const shoppingList = document.getElementById("shoppingList");

  const addItemToList = (item) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${item.name}:</b> $${item.price.toFixed(2)} 
                    <button class="deleteButton" data-id="${
                      item.id
                    }">Eliminar</button>`;
    shoppingList.appendChild(li);
  };

  const addNewItem = () => {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);

    if (name && !isNaN(price)) {
      const newItem = {
        name: name,
        price: price,
      };

      fetch("/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((item) => {
          addItemToList(item);
          document.getElementById("name").value = "";
          document.getElementById("price").value = "";
        });
    }
  };

  const deleteItem = (id) => {
    fetch(`/items/${id}`, {
      method: "DELETE",
    }).then(() => {
      const itemElement = document.querySelector(`li[data-id="${id}"]`);
      if (itemElement) {
        itemElement.remove();
      }
    });
  };

  fetch("/items")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => addItemToList(item));
    });

  const form = document.getElementById("addItemForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewItem();
  });

  shoppingList.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
      const id = event.target.dataset.id;
      deleteItem(id);
    }
  });
});
