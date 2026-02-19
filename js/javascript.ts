// 1. Dynamic Year in Footer (Additional Interaction)
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Musanze Transport Fare Estimator
function calculateFare() {
    const distance = document.getElementById('distance').value;
    const resultDisplay = document.getElementById('calc-result');
    
    // Logic: Base fare 500 RWF + 200 RWF per KM
    if (distance > 0) {
        const fare = 500 + (distance * 200);
        resultDisplay.textContent = `Estimated Fare: ${fare} RWF`;
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.textContent = "Please enter a valid distance.";
        resultDisplay.style.color = "red";
    }
}

// 3. Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name === "" || email === "") {
        alert("Please fill in all required fields!");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset();
    }
});