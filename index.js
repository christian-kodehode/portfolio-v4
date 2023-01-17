// COLORS
const black = "#202028";
const darkblue = "#08033b";
const blue = "#5684e7";
const gray = "#b9b5cb";
const white = "#f1f2ff";

// FONTS
const cabin = "Cabin, arial, sans-serif";
const cutive = "Cutive, 'Times New Roman', serif";
const exo = "Exo, arial, sans-serif";
const fjalla = "'Fjalla One', arial, sans-serif";
const gurajada = "gurajada, arial, sans-serif";
const sofia = "'Sofia Sans Extra Condensed', arial, sans-serif";
const courierNew = "'Courier New', arial, sans-serif";

// IMAGE LINKS
const logoIMG = "./pics/logo.jpg";
const linkedinIcon = "./pics/linkedin.jpg";
const githubIcon = "./pics/github.jpg";
const facebookIcon = "./pics/facebook.jpg";
const instagramIcon = "./pics/instagram.jpg";
const twitterIcon = "./pics/twitter.jpg";
const profilePic = "./pics/profilepic.jpg";

// SIZES, WIDTHS AND HEIGHTS
const headerHeigth = "80px";
const fullSiteWidth = "100vw";
const fitSizeWidth = "84vw";
const fullSiteHeight = "97vh";
const topHeigth = `${window.innerHeight - 80}px`;
const halfSite = 38;
const halfSiteWidth = halfSite + "vw";
const picHeigth = halfSite / 1.8 + "vw";

// PITCH & CONTACT FORM HEIGHT

let screenHeight = window.innerHeight;
const xHeight = screenHeight - 80;
let pitch = document.getElementById("pitch");
let contactForm = document.getElementById("contact-form");
pitch.style.height = xHeight;
contactForm.style.minHeight = xHeight;

console.log(pitch.style.height);
console.log(xHeight);
