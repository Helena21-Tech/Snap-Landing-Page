const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const navEl = document.querySelector("#nav");

const companyEl = document.querySelector("#Company");
const openIcon = document.querySelector("#openCompany");
const closeIcon = document.querySelector("#closeCompany");
const featuresEl = document.querySelector("#Features");
const openIcon1 = document.querySelector("#openFeatures");
const closeIcon1 = document.querySelector("#closeFeatures");


openMenu.addEventListener("click", ()=>{
navEl.style.display = "block";
openMenu.style.display = "none";
closeMenu.style.display = "inline";
})
closeMenu.addEventListener("click", ()=>{
  navEl.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "inline";
})
openIcon.addEventListener("click", ()=>{
  companyEl.style.display = "block";
  openIcon.style.display = "none";
  closeIcon.style.display = "inline"
})
closeIcon.addEventListener("click", () => {
  companyEl.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "inline";
});
openIcon1.addEventListener("click", () => {
  featuresEl.style.display = "block";
  openIcon1.style.display = "none";
  closeIcon1.style.display = "inline";
});
closeIcon1.addEventListener("click", () => {
  featuresEl.style.display = "none";
  closeIcon1.style.display = "none";
  openIcon1.style.display = "inline";
});