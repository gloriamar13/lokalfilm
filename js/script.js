// Menambahkan event listener setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Validasi sederhana untuk formulir newsletter
    const newsletterForm = document.querySelector("form");
    const emailInput = newsletterForm.querySelector("input[type='email']");

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        const email = emailInput.value.trim();

        if (email === "") {
            alert("Harap masukkan email Anda.");
        } else if (!validateEmail(email)) {
            alert("Harap masukkan email yang valid.");
        } else {
            alert("Terima kasih telah berlangganan!");
            emailInput.value = ""; // Reset input email
        }
    });

    // Fungsi validasi email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Event handler untuk navigasi scroll halus
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Sesuaikan offset jika ada header tetap
                    behavior: "smooth"
                });
            }
        });
    });
});
