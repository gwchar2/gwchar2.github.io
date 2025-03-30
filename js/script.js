if (window.innerWidth > 700) {
    // Desktop: Vanta on both sides
    VANTA.NET({
      el: "#vanta-left",
      color: 0x666666,
      backgroundColor: 0xffffff,
      mouseControls: true,
      touchControls: true,
      scale: 1.0,
      scaleMobile: 1.0
    });
  
    VANTA.NET({
      el: "#vanta-right",
      color: 0x666666,
      backgroundColor: 0x000000,
      mouseControls: true,
      touchControls: true,
      scale: 1.0,
      scaleMobile: 1.0
    });
    
    const menuToggle = document.getElementById("menu-toggle");
    const navWrapper = document.querySelector(".nav-wrapper");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    menuToggle.addEventListener("click", () => {
      navWrapper.classList.toggle("open");
    });

    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        navWrapper.classList.remove("open");
      });
    });
  } else {
    // Mobile/small: Vanta only on left side, both sides white
    VANTA.NET({
      el: "#vanta-left",
      color: 0x000000,
      backgroundColor: 0xffffff,
      mouseControls: true,
      touchControls: true,
      scale: 1.0,
      scaleMobile: 1.0
    });
  }