const open_passwords = document.querySelector(".arrowbtn");
const close_passwords = document.getElementById("close")
const my_passwords = document.querySelector(".passwords");

const delete_password = document.querySelectorAll(".fa-trash");
const tbody = document.querySelector('tbody');

const savebtn = document.getElementById("btn");

let savedPasswords = JSON.parse(localStorage.getItem("passwords") || "[]");
savedPasswords.forEach(item => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash');
    icon.style.color = "#292323";
    td1.appendChild(icon);

    const td2 = document.createElement('td');
    td2.textContent = item.name;

    const td3 = document.createElement('td');
    td3.textContent = item.username;

    const td4 = document.createElement('td');
    td4.textContent = item.password;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);

    icon.addEventListener("click", (e) => {
        const row = e.target.closest('tr');
        if (row) {
            row.remove();
            let index = Array.from(tbody.children).indexOf(row);
            savedPasswords.splice(index, 1);
            localStorage.setItem("passwords", JSON.stringify(savedPasswords));
        }
    });
});

open_passwords.addEventListener("click", () => {
    my_passwords.classList.add("view_passwords");
})

close_passwords.addEventListener("click", () => {
    my_passwords.classList.remove("view_passwords");
})


function verify(name, username, password) {

    if (name.trim() === "") {
        document.getElementById("websitename_error").innerText = "Enter a website name"
        return false;
    }
    if (name.trim() !== "") {
        document.getElementById("websitename_error").innerText = "";
    }
    if (username.trim() === "") {
        document.getElementById("username_error").innerText = "Enter a username"
        return false;
    }
    if (username.trim() !== "") {
        document.getElementById("username_error").innerText = "";
    }
    if (password.trim() === "") {
        document.getElementById("password_error").innerText = "Enter a password";
        return false;
    }
    if (password.trim() !== "") {
        document.getElementById("password_error").innerText = "";
    }

    return true;

}







savebtn.addEventListener("click", (e) => {
    let website_name = document.getElementById("name").value;
    let website_username = document.getElementById("username").value;
    let website_password = document.getElementById("password").value;

    e.preventDefault();

    if (verify(website_name, website_username, website_password)) {

        savedPasswords.push({
            name: website_name,
            username: website_username,
            password: website_password
        });
        localStorage.setItem("passwords", JSON.stringify(savedPasswords));

        // Create a new row
        const tr = document.createElement('tr');

        // First cell with trash icon
        const td1 = document.createElement('td');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-trash');
        icon.style.color = "#292323";
        td1.appendChild(icon);

        // Second cell
        const td2 = document.createElement('td');
        td2.textContent = website_name;

        // Third cell
        const td3 = document.createElement('td');
        td3.textContent = website_username;

        // Fourth cell
        const td4 = document.createElement('td');
        td4.textContent = website_password;

        // Append all cells to the row
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        // Append the row to the tbody
        tbody.appendChild(tr);


        icon.addEventListener("click", (e) => {
            const row = e.target.closest('tr');
            if (row) {
                row.remove();
                let index = Array.from(tbody.children).indexOf(row);
                savedPasswords.splice(index, 1);
                localStorage.setItem("passwords", JSON.stringify(savedPasswords));
            }
        });

        savebtn.innerText = "Saved";
        savebtn.style.background = "green"

        setTimeout(() => {
            document.getElementById("name").value = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            savebtn.innerText = "Save";
            savebtn.style.background = "black"

        }, 1000);



    }
})

