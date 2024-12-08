// Mendapatkan elemen-elemen yang diperlukan
let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
const contactSection = document.getElementById("Contact");

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // Mengatur gaya elemen berdasarkan scroll
  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";

  document.addEventListener("scroll", function () {
    const contactUs = document.querySelector("section.contact"); // Ganti sesuai ID/Kelas bagian Contact Us
    const contactUsBottom = contactUs.getBoundingClientRect().bottom;

    if (contactUsBottom <= window.innerHeight) {
      document.body.style.overflow = "hidden"; // Hentikan scroll
    } else {
      document.body.style.overflow = "auto"; // Scroll kembali jika belum sampai ke Contact Us
    }
  });
});
