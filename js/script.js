// =======================
// TYPING ANIMATION
// =======================

const roles = [
    "SAP HCM SuccessFactors Expert",
    "IT System Specialist",
    "Web Developer",
    "HRIS Global IT",
    "Technical Support"
];

const typing = document.getElementById("typing");

if (typing) {

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const current = roles[roleIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;
            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }
            }
        }

        setTimeout(type, deleting ? 40 : 90);
    }

    type();
}


// =======================
// COPY EMAIL
// =======================

const copyBtn = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

if (copyBtn && copyMessage) {

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText("charleswgarcia09@gmail.com");

        copyMessage.classList.add("show");

        setTimeout(() => {
            copyMessage.classList.remove("show");
        }, 2000);

    });

}


// =======================
// NAVBAR SCROLL EFFECT
// =======================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


// =======================
// ACTIVE NAVIGATION
// =======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            current &&
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// =======================
// CONTACT FORM EMAILJS
// =======================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Sending...";
        }

        emailjs.sendForm(
            "service_lhyq4rh",
            "template_5ghq1tq",
            this
        )

        .then(() => {

            alert("✅ Your message has been sent successfully!");

            contactForm.reset();

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send Message";
            }

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send Message";
            }

        });

    });

}


// =======================
// PROJECT IMAGE LIGHTBOX
// =======================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

const projectImages = document.querySelectorAll(".project-image img");

if (lightbox && lightboxImg && closeBtn) {

    projectImages.forEach((img) => {

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

            lightboxImg.style.display = "block";
            lightbox.style.display = "flex";

        });

    });


    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

        lightboxImg.src = "";
        lightboxImg.style.display = "none";

    });


    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


// =======================
// BACK TO TOP
// =======================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    function toggleBackToTop() {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", toggleBackToTop);

    toggleBackToTop();


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}