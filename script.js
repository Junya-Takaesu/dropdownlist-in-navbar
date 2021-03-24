const toggleDropdown = () => {
  document.querySelector("#myDropdown").classList.toggle("show");
}

document.querySelector("#dropbtn").addEventListener("click", toggleDropdown);

window.addEventListener("click", (e) =>{
  if(!e.target.matches('#dropbtn')) {
    let myDropdown = document.querySelector("#myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
});
