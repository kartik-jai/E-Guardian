document.addEventListener("DOMContentLoaded", () => {
    const borrowForm = document.getElementById("borrow-form");
    const donateForm = document.getElementById("donate-form");

    borrowForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const seed = document.getElementById("borrow-seed").value;
        const quantity = document.getElementById("borrow-quantity").value;

        document.getElementById("borrow-feedback").textContent = 
            `You have borrowed ${quantity} units of ${seed}. Happy planting!`;
    });

    donateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const seed = document.getElementById("donate-seed").value;
        const quantity = document.getElementById("donate-quantity").value;

        document.getElementById("donate-feedback").textContent = 
            `Thank you for donating ${quantity} units of ${seed}!`;
    });
});
