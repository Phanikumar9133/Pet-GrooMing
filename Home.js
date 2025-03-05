// count JS
// count JS
document.addEventListener("DOMContentLoaded", function () {
  function animateCounters() {
    const counters = document.querySelectorAll(".card-title");
    const duration = 2000; 

    counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute("data-target"), 10);
      let start = 0;
      let increment = target / (duration / 50); 
      let interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          counter.innerText = target; 
          clearInterval(interval);
        } else {
          counter.innerText = Math.floor(start); 
        }
      }, 50);
    });
  }

  
  function handleScroll() {
    const section = document.querySelector(".con4"); 
    if (section && section.getBoundingClientRect().top < window.innerHeight) {
      animateCounters();
      window.removeEventListener("scroll", handleScroll); 
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 


  // form booking

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

// dash board js
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

function loadPage(pageName) {
  // Use AJAX to fetch the content of the selected page
  const xhr = new XMLHttpRequest();
  xhr.open("GET", pageName, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Update the content area with the loaded HTML
      document.getElementById("content").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

sidbar = document.querySelector(".list-group").querySelectorAll("a");

sidbar.forEach((element) => {
  element.addEventListener("click", function () {
    sidbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

  //scroll animation

  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add 'show' class to trigger animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 } // Element must be 20% visible to trigger
  );

  elements.forEach((element) => observer.observe(element));
