const logo = document.getElementById('logo');
    const slices = document.querySelectorAll('.slice');

    logo.addEventListener('click', () => {
      slices.forEach(slice => slice.classList.add('animate'));
      setTimeout(() => {
        document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    });





  const btnNormal = document.getElementById('btn-normal');
const btnVip = document.getElementById('btn-vip');
const btnLainnya = document.getElementById('btn-lainnya'); // pastikan ID-nya sesuai

const normalSection = document.getElementById('normal-section');
const vipSection = document.getElementById('vip-section');
const lainnyaSection = document.getElementById('lainnya-section'); // pastikan ID-nya sesuai

function showSection(activeBtn, sectionToShow) {
  // Semua tombol dan section
  const buttons = [btnNormal, btnVip, btnLainnya];
  const sections = [normalSection, vipSection, lainnyaSection];

  // Sembunyikan semua section dan reset tombol
  buttons.forEach(btn => {
    btn.classList.remove('bg-gray-800', 'text-white');
    btn.classList.add('bg-gray-300', 'text-gray-800');
  });

  sections.forEach(section => section.classList.add('hidden'));

  // Tampilkan yang aktif
  activeBtn.classList.add('bg-gray-800', 'text-white');
  activeBtn.classList.remove('bg-gray-300', 'text-gray-800');
  sectionToShow.classList.remove('hidden');
}

// Event listeners
btnNormal.addEventListener('click', () => showSection(btnNormal, normalSection));
btnVip.addEventListener('click', () => showSection(btnVip, vipSection));
btnLainnya.addEventListener('click', () => showSection(btnLainnya, lainnyaSection));



  // Navbar Show/Hide on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const homeSectionHeight = document.getElementById('home').offsetHeight;

  if (window.scrollY > homeSectionHeight - 80) {
    // Setelah melewati section home, tampilkan navbar
    navbar.classList.remove('opacity-0', 'pointer-events-none');
    navbar.classList.add('opacity-100', 'pointer-events-auto');
  } else {
    // Saat di home, sembunyikan navbar
    navbar.classList.add('opacity-0', 'pointer-events-none');
    navbar.classList.remove('opacity-100', 'pointer-events-auto');
  }
});

const backToTopBtn = document.getElementById('backToTop');
// Tampilkan tombol ketika scroll ke bawah
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});

// Fungsi scroll ke atas saat tombol diklik
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});