let fruit = ["Apple", "Mango", "Banana"];
let errorMessage = document.getElementById("error-message");
let buttonToAddFruit = document.getElementById("add-fruit");
let userEnteredFruit = document.getElementById("user-entered-fruit");
buttonToAddFruit.addEventListener("click", () => {
    if (userEnteredFruit.value.trim().length == 0) {
        errorMessage.innerHTML = "** text-field can-not be empty**";
    } else {
        fruit.push(userEnteredFruit.value);
        errorMessage.innerHTML = "";
        // console.log(userEnteredFruit.value);
        let li = document.createElement("li");
        li.innerHTML = userEnteredFruit.value;
        userEnteredFruit.value = "";
        ul.append(li);
    }
});
let selected = document.getElementById("Selected-fruit");
let output_ = document.getElementById("output");
let ul = document.createElement("ul");
ul.addEventListener("click", (Event) => {
    selected.innerHTML = "You have selected " + Event.target.innerHTML;

    // selected.appendChild(sel);
});

function create() {
    fruit.map((a) => {
        let li = document.createElement("li");
        console.log(a);
        li.innerHTML = a;
        ul.append(li);
    });
    output_.appendChild(ul);
}

create();