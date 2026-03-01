/* Open menu */
function openMenu(){
    document.getElementById("sideMenu").style.right = "0";
}

/* Close menu */
function closeMenu(){
    document.getElementById("sideMenu").style.right = "-250px";
}

/* Show Home */
function showHome(){
    document.getElementById("home").style.display="block";
    closeMenu();
}


// scroll to section
function goToSection(sectionId)
{
   var section = document.getElementById(sectionId);
   
   section.scrollIntoView({
      behavior: "smooth"
   });
   
   
  
}
