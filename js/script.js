
const STORE = {
  whatsapp: "6287720826583",
  address: "Tiga Display Office (Kantor CV Tiga Display), Jalan Haji Domang, RT.8/RW.2, Kebon Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta"
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("storeAddress").textContent = STORE.address;

  const message = encodeURIComponent("Halo Tiga Display, saya ingin bertanya tentang produk box dan display perhiasan.");
  const waUrl = `https://wa.me/${STORE.whatsapp}?text=${message}`;
  ["ctaWhatsapp", "footerWhatsapp", "floatingWhatsapp"].forEach((id) => {
    const link = document.getElementById(id);
    if (link) link.href = waUrl;
  });

  const mapQuery = encodeURIComponent(STORE.address);
  document.getElementById("storeMap").src = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  document.getElementById("mapDirections").href = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  document.querySelectorAll("[data-gallery-image]").forEach((tile) => {
    tile.addEventListener("click", () => {
      document.getElementById("galleryModalImage").src = tile.dataset.galleryImage;
      document.getElementById("galleryModalCaption").textContent = tile.dataset.galleryCaption;
      bootstrap.Modal.getOrCreateInstance(document.getElementById("galleryModal")).show();
    });
  });

  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});

