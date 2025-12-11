// MODAL SETUP
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const excerpts = {
    story1: {
        title: "The Window Between Worlds",
        text: "She pressed her palm against the cold glass, expecting only her own reflection. Instead, the window shimmered like disturbed water. On the other side, a girl who looked exactly like her—same eyes, same hair, same nervous bite of the lip—stood in a room that wasn’t hers. The girl smiled, hesitant but hopeful, as if she had been waiting for this moment far longer than she should have. And then, with a slow, deliberate motion, she reached toward the glass from her side, inviting her to step closer…"
    },
    story2: {
        title: "The Last Letter",
        text: "The envelope was yellowed, its edges soft from years of being handled and then forgotten. Her name—written in a handwriting she hadn’t seen since she was seventeen—pulled her breath tight in her chest. She hesitated before opening it, afraid of what memories might spill out. When she finally slid the letter free, a faint scent of old paper and lavender rose from it. The first line made her sit down. It wasn’t an apology. It wasn’t a confession. It was a promise—one that had never reached her until now…"
    },
    story3: {
        title: "Echoes in the Alley",
        text: "The whisper came again, threading through the darkness like a cold finger tracing the back of his neck. Detective Hale froze, listening. The alley was empty—no footsteps, no rustling trash, no shifting shadows. Yet the voice was unmistakable. It spoke his name this time, soft and urgent, as if calling from somewhere just out of sight. He stepped deeper into the alley, the beam of his flashlight trembling slightly. The whisper grew clearer, forming words he hadn’t heard in years… words only one person could have known."
    }
};

document.querySelectorAll(".read-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const storyKey = btn.dataset.story;
        modalTitle.textContent = excerpts[storyKey].title;
        modalText.textContent = excerpts[storyKey].text;
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

// ✅ SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
// SECTION SWITCHING (show one section at a time)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        const targetID = link.getAttribute("href");

        // Only handle internal section links
        if (targetID.startsWith("#")) {
            e.preventDefault();

            // Hide all sections
            document.querySelectorAll(".app-section").forEach(sec => {
                sec.classList.remove("active");
            });

            // Show the selected section
            const targetSection = document.querySelector(targetID);
            if (targetSection) {
                targetSection.classList.add("active");
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});
// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});