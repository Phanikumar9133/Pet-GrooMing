// form.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const email= document.getElementById("email").value;
        const time = document.querySelector("input[name='time']:checked")?.value;
        if (!name || !phone || !date || !time) {
            alert("Please fill in all fields.");
            return;
        }
        bookings.push({ name, phone, date, time , email });
        localStorage.setItem("bookings", JSON.stringify(bookings));
        form.reset();
        alert("Slot booked successfully!");
    });
  });