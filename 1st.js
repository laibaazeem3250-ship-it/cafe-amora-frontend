document.addEventListener("DOMContentLoaded", () => {

  /* ================= HERO TEXT ANIMATION ================= */
  const heroTitle = document.querySelector(".hero h1");
  const heroText = document.querySelector(".hero p");

  if (heroTitle && heroText) {   
    setTimeout(() => {
      heroTitle.style.opacity = "1";
      heroTitle.style.transform = "translateY(0)";
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 400);
  }


  /* ================= MENU PAGE : ORDER BUTTON ================= */
  const menuItems = document.querySelectorAll(".menu-item");

  if (menuItems.length > 0) {
    menuItems.forEach(item => {

      // Avoid adding button twice
      if (!item.querySelector("button")) {
        const orderBtn = document.createElement("button");
        orderBtn.textContent = "Order Now";
        orderBtn.style.marginTop = "15px";
        orderBtn.style.padding = "8px 14px";
        orderBtn.style.border = "none";
        orderBtn.style.backgroundColor = "#D4A373";
        orderBtn.style.color = "#fff";
        orderBtn.style.borderRadius = "4px";
        orderBtn.style.cursor = "pointer";

        orderBtn.addEventListener("click", () => {
          alert("Thank you for your order!");
        });

        item.appendChild(orderBtn);
      }
    });
  }


  /* ================= GALLERY IMAGE POPUP ================= */
  const galleryImages = document.querySelectorAll(".gallery img");

  if (galleryImages.length > 0) {
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.85)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "pointer";

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth = "85%";
        bigImg.style.maxHeight = "85%";
        bigImg.style.borderRadius = "12px";
        bigImg.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => overlay.remove());
      });
    });
  }


  /* ================= CONTACT FORM VALIDATION ================= */
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting!");
        return;
      }

      alert(`Thank you for contacting us, ${name}!`);
      form.reset();
    });
  }
                  

  /* ================= STICKY NAVBAR SHADOW ================= */
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", () => {
      header.style.boxShadow =
        window.scrollY > 50
          ? "0 4px 10px rgba(0,0,0,0.2)"
          : "none";
    });
  }


  /* ================= DYNAMIC FOOTER YEAR ================= */
  document.querySelectorAll("footer p").forEach(p => {
    p.innerHTML = p.innerHTML.replace(
      "2025",
      new Date().getFullYear()
    );
  });

});
         