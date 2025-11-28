const imgEl = document.getElementById("img");
const titleEl = document.querySelector("#isi1 h1");
const descEl = document.querySelector("#isi1 p");
const box2 = document.getElementById("box2");

const buttons = document.querySelectorAll(".btn");

const slides = [
    {
        img: "Content/tanah lot.png",
        bg: "Content/tanah lot.png",
        title: "Tanah Lot",
        desc: "Tanah Lot adalah salah satu ikon wisata Bali berupa pura yang berdiri di atas batu karang besar di tepi laut. Tempat ini terkenal karena pemandangan matahari terbenamnya yang indah, ombak yang menghantam tebing, serta suasana sakral dari Pura Tanah Lot yang masih aktif digunakan untuk upacara keagamaan."
    },
    {
        img: "Content/Uluwatu.jpg",
        bg: "Content/Uluwatu.jpg",
        title: "Pura Uluwatu",
        desc: "Pura Uluwatu adalah salah satu pura terpenting di Bali yang berdiri di atas tebing tinggi sekitar 70 meter di atas laut. Pura ini terkenal karena pemandangan matahari terbenamnya yang sangat indah serta pertunjukan Tari Kecak yang biasanya digelar setiap sore. Selain sebagai tempat ibadah, Pura Uluwatu juga menjadi ikon wisata karena lokasinya yang dramatis di tebing dan keberadaan monyet-monyet liar di sekitarnya."
    },
    {
        img: "Content/kuta.webp",
        bg: "Content/kuta.webp",
        title: "Pantai Kuta",
        desc: "Kuta Beach adalah salah satu pantai paling populer di Bali, terkenal dengan pasir putih yang panjang, ombak yang cocok untuk surfing pemula hingga menengah, dan suasana yang selalu ramai. Pantai ini juga jadi tempat favorit untuk menikmati sunset karena garis pantainya yang menghadap barat. Di sekitarnya banyak hotel, restoran, dan pusat belanja sehingga Kuta dikenal sebagai pusat wisata paling hidup di Bali."
    },
    {
        img: "Content/Ubud.jpg",
        bg: "Content/Ubud.jpg",
        title: "Ubud",
        desc: "Ubud adalah kawasan budaya dan alam di Bali yang dikenal dengan suasana tenang, hutan hijau, serta sawah terasering yang indah. Tempat ini menjadi pusat seni, yoga, dan pengobatan tradisional Bali. Di Ubud, wisatawan bisa menemukan museum, galeri, pasar seni, serta tempat-tempat ikonik seperti Monkey Forest dan Tegalalang Rice Terrace. Ubud juga terkenal sebagai destinasi untuk relaksasi dan retreat karena udaranya yang sejuk dan suasananya yang damai."
    },
    {
        img: "Content/Bedugul.webp",
        bg: "Content/Bedugul.webp",
        title: "Bedugul",
        desc: "Bedugul adalah kawasan pegunungan di Bali yang terkenal dengan udara sejuk, danau-danau indah, serta pemandangan alam yang hijau. Ikon utamanya adalah Pura Ulun Danu Beratan, pura terapung di tepi Danau Beratan yang sering muncul di foto wisata Bali. Bedugul juga dikenal dengan Kebun Raya Bali, pasar buah dan sayur, serta Danau Buyan dan Tamblingan yang masih alami. Suasananya cocok untuk liburan santai karena jauh dari keramaian."
    },
    {
        img: "Content/Sanur.jpg",
        bg: "Content/Sanur.jpg  ",
        title: "Pantai Sanur",
        desc: "Sanur adalah kawasan pantai di Bali yang terkenal dengan suasana tenang, ombak yang lembut, dan garis pantai panjang yang cocok untuk jalan pagi. Sanur dikenal sebagai spot terbaik untuk melihat sunrise, karena pantainya menghadap ke timur. Di sini juga banyak jalur untuk bersepeda, hotel keluarga, restoran santai, serta aktivitas seperti kano dan snorkeling. Sanur cocok untuk wisatawan yang mencari ketenangan dibanding daerah yang lebih ramai seperti Kuta."
    }
];

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // Fade out konten
        imgEl.classList.add("fade-out");
        titleEl.classList.add("fade-out");
        descEl.classList.add("fade-out");
        box2.classList.add("bg-fade-out");

        box2.style.setProperty("--boxbg", `url('${slides[index].bg}')`);

        setTimeout(() => {
            // Update konten baru
            imgEl.src = slides[index].img;
            titleEl.textContent = slides[index].title;
            descEl.textContent = slides[index].desc;

            // Fade in kembali
            imgEl.classList.remove("fade-out");
            titleEl.classList.remove("fade-out");
            descEl.classList.remove("fade-out");
            box2.classList.remove("bg-fade-out");

        }, 350);

        // Update button active
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const kecakSlides3 = [
  {
    title: "Tari Kecak",
    text: "Tari Kecak adalah tarian khas Bali yang terkenal dengan suara “cak, cak, cak” dari puluhan penari laki-laki yang duduk melingkar. Tarian ini tidak memakai alat musik—semua irama dibuat dari suara para penarinya. Ceritanya biasanya mengangkat kisah Ramayana, terutama bagian saat Hanoman membantu Rama.",
    link: "https://www.gramedia.com/literasi/sejarah-asal-tari-kecak/",
    bg: "Content/kecak.png"
  },
  {
    title: "Tari Legong",
    text: "Tari Legong adalah tarian klasik Bali yang dikenal dengan gerakan tubuhnya yang halus, lincah, dan sangat terstruktur. Tarian ini biasanya dibawakan oleh penari perempuan muda dengan kostum berwarna emas dan hiasan kepala yang rumit. Musik pengiringnya adalah gamelan Semar Pegulingan yang punya karakter lembut dan berirama cepat.",
    bg: "Content/legong.jpeg",
    link: "https://www.gramedia.com/literasi/tari-legong/"
  },
  {
    title: "Tari Pendet",
    text: "Tari Pendet adalah salah satu tarian tradisional Bali yang awalnya merupakan tarian penyambutan untuk dewa-dewa dalam upacara di pura. Gerakannya sederhana, lembut, dan penuh keanggunan, biasanya dibawakan oleh beberapa penari perempuan yang membawa bokor berisi bunga.",
    bg: "Content/nonblur3.png",
    link: "https://www.gramedia.com/literasi/tari-pendet/"
  }
];

// Variabel unik supaya aman
let kecakIndex3 = 0;

// Ambil elemen spesifik section-mu (tidak akan menyentuh elemen slide lain)
const sectionSeub3 = document.getElementById("sebuah3"); // opsional check
const box3_el = document.querySelector(".box3");
const isi2_h1 = document.querySelector("#isi2 h1");
const isi2_p = document.querySelector("#isi2 p");
const isi2_a = document.querySelector("#isi2 a");
const arrowLeft3 = document.getElementById("aleft");
const arrowRight3 = document.getElementById("aright");
const isi2_wrap = document.getElementById("isi2");

// safety: jika elemen tidak ada, jangan error
if (box3_el && isi2_h1 && isi2_p && isi2_a && arrowLeft3 && arrowRight3 && isi2_wrap) {

  function applyKecakSlide3(i) {
    const s = kecakSlides3[i];

    // fade out teks
    isi2_wrap.classList.add("fade-out");

    // ubah background sedikit delay supaya fade terlihat
    setTimeout(() => {
      // update konten
      isi2_h1.textContent = s.title;
      isi2_p.textContent = s.text;
      isi2_a.href = s.link;

      // update background pada .box3
      // jika kamu menggunakan custom property (--boxbg) seperti di script lain, bisa pake itu:
      // box3_el.style.setProperty("--boxbg", `url('${s.bg}')`);
      // Di sini pakai langsung style.backgroundImage
      box3_el.style.backgroundImage = `url('${s.bg}')`;
      box3_el.style.backgroundSize = "cover";
      box3_el.style.backgroundPosition = "center";

      // fade in
      isi2_wrap.classList.remove("fade-out");
      isi2_wrap.classList.add("fade-in");

      // hapus kelas setelah anim selesai
      setTimeout(() => {
        isi2_wrap.classList.remove("fade-in");
      }, 300);
    }, 240);
  }

  // event listeners (tidak akan override event lain)
  arrowRight3.addEventListener("click", () => {
    kecakIndex3 = (kecakIndex3 + 1) % kecakSlides3.length;
    applyKecakSlide3(kecakIndex3);
  });

  arrowLeft3.addEventListener("click", () => {
    kecakIndex3 = (kecakIndex3 - 1 + kecakSlides3.length) % kecakSlides3.length;
    applyKecakSlide3(kecakIndex3);
  });

  // Inisialisasi awal (supaya background dan link langsung ter-set)
  applyKecakSlide3(kecakIndex3);

} else {
  // debug ringan kalau struktur HTML berubah
  console.warn("kecakSlides3: beberapa elemen #sebuah3 tidak ditemukan. Periksa id/class pada HTML.");
}