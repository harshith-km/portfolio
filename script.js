const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const nav = document.getElementById("nav");

function showMenu() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    nav.style.right = "5px";
}
/*styles for width of 1080px to 0px/ 1080px or lessthan 1080px*/
function closeMenu() {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    nav.style.right = "calc(100vw * -1)";
}

// for navgation styles
// sections
const Introduction = document.getElementById("Introduction");
const Skills = document.getElementById("Skills");
const Projects = document.getElementById("Projects");
const Education = document.getElementById("Education");
const contact = document.getElementById("contact");

const sections = [Introduction, Skills, Projects, Education, contact];
// nav elements
const intro = document.getElementById("intro");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const contactME = document.getElementById("contactME");

const anchors = [intro, skills, projects, education, contactME];

intro.className = "active";
function activate(val) {
    anchors.forEach((anchor) => {
        anchor.className = "";
    });
    anchors[val].className = "active";
    sections[val].scrollIntoView({ behavior: "smooth" });
    // anchor[val].scrollInto;
    if (window.innerWidth <= 1080) {
        closeMenu();
    }
}

// handling form submission
function handleSubmit(e) {
    // e.preventDefaults()
    const name = document.getElementById("name").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    const mail = `Name : ${name} \nPhone NO : ${phoneNo} \nEmail : ${email} \nDescription : ${description}`;

    console.log(mail);
}

function createSlider(leftArrow, rightArrow, frame, slider) {
    const imgWidth = slider.clientWidth;
    let sliderPos = 0;

    let autoSlideInterval;
    const autoSlide = () => {
        if (sliderPos > -(11 * imgWidth)) {
            sliderPos -= imgWidth;
            frame.style.transform = `translateX(${sliderPos}px)`;
        } else {
            sliderPos = 0;
            frame.style.transform = `translateX(${sliderPos}px)`;
        }
    };

    autoSlideInterval = setInterval(autoSlide, 3000);

    slider.addEventListener("mouseover", () => {
        clearInterval(autoSlideInterval);
    });

    slider.addEventListener("mouseout", () => {
        autoSlideInterval = setInterval(autoSlide, 3000);
    });

    rightArrow.addEventListener("click", () => {
        if (sliderPos > -(11 * imgWidth)) {
            sliderPos -= imgWidth;
            frame.style.transform = `translateX(${sliderPos}px)`;
        } else {
            sliderPos = 0;
            frame.style.transform = `translateX(${sliderPos}px)`;
        }
    });

    leftArrow.addEventListener("click", () => {
        if (sliderPos < 0) {
            sliderPos += imgWidth;
            frame.style.transform = `translateX(${sliderPos}px)`;
        } else {
            sliderPos = -11 * imgWidth;
            frame.style.transform = `translateX(${sliderPos}px)`;
        }
    });
}

// Get elements for the first slider (Water Wise)
const leftArrow1 = document.getElementById("left-w");
const rightArrow1 = document.getElementById("right-w");
const frame1 = document.getElementById("frame-w");
const slider1 = document.getElementById("slider-w");

// Create the first slider
createSlider(leftArrow1, rightArrow1, frame1, slider1);

// Get elements for the second slider (Content Nest)
const leftArrow2 = document.getElementById("left-c");
const rightArrow2 = document.getElementById("right-c");
const frame2 = document.getElementById("frame-c");
const slider2 = document.getElementById("slider-c");

// Create the second slider
createSlider(leftArrow2, rightArrow2, frame2, slider2);

//
