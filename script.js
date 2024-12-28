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
const intro = document.getElementById("intro");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contactME = document.getElementById("contactME");
const education = document.getElementById("education");
const anchors = [intro, skills, projects, education, contactME];

intro.className = "active";
function activate(val) {
    anchors.forEach((anchor) => {
        anchor.className = "";
    });
    anchors[val].className = "active";
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
