// table data show
function addData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let des = document.getElementById('des').value;

    if (name && email ||phone && des ) {
        let data = JSON.parse(localStorage.getItem('tableData')) || [];
        data.push({ name: name, email: email,phone:phone, des:des });
        localStorage.setItem('tableData', JSON.stringify(data));

        document.getElementById('dataForm').reset();
        alert('Data added successfully!');
    }
}

function redirectToTablePage() {
    window.location.href = 'table.html';
}

// form validation code

function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    
    const correctUserId = "BC2004007347";
    const correctPassword = "Sajid!786";

    const userId = prompt("Enter your user ID:");
    const password = prompt("Enter your password:");
    if (!userId) {
alert("User ID cannot be empty.");
} else if (!password) {
alert("Password cannot be empty.");
} else if (userId === correctUserId && password === correctPassword) {
alert("Login successful!");
// Redirect to the next page
window.location.href = "nextPage.html";
} else {
alert("Incorrect user ID or password.");
}
}



//  @@@@@@@@@@@@@@@@@@@   image move code 

document.addEventListener("DOMContentLoaded", function() {
const image = document.getElementById("hoverImage");
const images = [ "image2.jpg"]; // Add paths to the images you want to cycle through
let currentIndex = 0;

image.addEventListener("transitionend", function() {
if (image.style.transform === "rotateY(180deg)") {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
    image.style.transform = "rotateY(0deg)";
    image.style.opacity = "1";
}
});

image.addEventListener("mouseover", function() {
image.style.transform = "rotateY(180deg)";
image.style.opacity = "0.5";
});
});

// index page code end 

// table.html


document.addEventListener('DOMContentLoaded', function() {
    let data = JSON.parse(localStorage.getItem('tableData')) || [];
    let tableBody = document.getElementById('tableBody');

    data.forEach(item => {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        let emailCell = document.createElement('td');
        let phoneCell = document.createElement('td');
        let desCell = document.createElement('td');

        nameCell.textContent = item.name;
        emailCell.textContent = item.email;
        phoneCell.textContent = item.phone;
        desCell.textContent = item.des;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        row.appendChild(desCell);
        tableBody.appendChild(row);
    });
});

function redirectToFormPage() {
    window.location.href = 'index.html';
}



// Table reset code 
function resetTable() {
const table = document.getElementById('myTable');
const rowCount = table.rows.length;

// Remove rows starting from the last row to the first row
for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
}
}



// image move code 

$(document).ready(function(){
    function changeImage(imageId, newSrc) {
        setTimeout(function(){
            $(imageId).attr("src", newSrc);
        }, 1000);
    }

    $('#image1').hover(
        function(){
            changeImage('#image1', './images/t4.jpg');
        }, 
        function(){
            changeImage('#image1', './images/t-1.jpg');
        }
    );

    $('#image2').hover(
        function(){
            changeImage('#image2', './images/t5.jpg');
        }, 
        function(){
            changeImage('#image2', './images/t-2.jpg');
        }
    );

    $('#image3').hover(
        function(){
            changeImage('#image3', './images/t6.jpg');
        }, 
        function(){
            changeImage('#image3', './images/t-3.jpg');
        }
    );
});

