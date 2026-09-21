/* =========================================================
   AGUS TAUFIK RAHMAN
   Portfolio interaction
========================================================= */


/* =========================================================
   LOADER + WELCOME
========================================================= */

const loader =
  document.getElementById("loader");

const loaderPercent =
  document.getElementById("loaderPercent");

const loaderProgress =
  document.getElementById("loaderProgress");

const welcome =
  document.getElementById("welcome");

const enterBtn =
  document.getElementById("enterBtn");

const nav =
  document.getElementById("nav");


let loadingProgress = 0;


const loaderTimer = setInterval(() => {

  loadingProgress +=
    Math.floor(Math.random() * 5) + 2;


  if (loadingProgress >= 100) {

    loadingProgress = 100;

    clearInterval(loaderTimer);


    setTimeout(() => {

      loader.classList.add("hidden");

    }, 500);

  }


  loaderPercent.textContent =
    `${loadingProgress}%`;

  loaderProgress.style.width =
    `${loadingProgress}%`;

}, 45);


enterBtn.addEventListener("click", () => {

  welcome.classList.add("hidden");

  nav.classList.add("visible");

});


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    id: "ac",

    category: "PKL",

    title: "Maintenance AC",

    description:
      "Melakukan perawatan AC indoor dan outdoor, termasuk membantu proses pemeriksaan, pembersihan, dan memastikan unit tetap bekerja dengan baik selama kegiatan Engineering.",

    media: [

      {
        type: "image",
        src: "pkl-maintenance-ac-2.jpg",
        label: "Perawatan AC"
      },

      {
        type: "image",
        src: "pkl-maintenance-ac-outdoor.jpg",
        label: "Perawatan AC outdoor"
      },

      {
        type: "image",
        src: "pkl-maintenance-ac.jpg",
        label: "Maintenance AC"
      }

    ]

  },


  {
    id: "lighting",

    category: "PKL",

    title: "Penerangan",

    description:
      "Mengerjakan instalasi dan perbaikan penerangan di area fasilitas, mulai dari pemasangan jalur lampu pada tangga hingga pemasangan lampu sorot.",

    media: [

      {
        type: "image",
        src: "pkl-memahat-dan-memasang-penerangan-ditangga.jpg",
        label: "Penerangan tangga"
      },

      {
        type: "image",
        src: "pkl-pemasangan-lampu-sorot.jpg",
        label: "Pemasangan lampu sorot"
      }

    ]

  },


  {
    id: "network",

    category: "PKL",

    title: "Jaringan & PJU",

    description:
      "Membantu perbaikan jaringan internet serta pekerjaan pada penerangan jalan umum, termasuk penanganan jalur dan instalasi yang diperlukan di area fasilitas.",

    media: [

      {
        type: "image",
        src: "pkl-memperbaiki-jaringan-internet-dan-penerangan-jalan.jpg",
        label: "Jaringan internet dan PJU"
      }

    ]

  },


  {
    id: "support",

    category: "PKL",

    title: "Dukungan Engineering",

    description:
      "Mengerjakan berbagai pekerjaan pendukung untuk menjaga kondisi fasilitas tetap terawat, termasuk pekerjaan pengecatan pada area yang membutuhkan perawatan.",

    media: [

      {
        type: "image",
        src: "pkl-mengecat.jpg",
        label: "Pekerjaan pengecatan"
      }

    ]

  },


  {
    id: "grounding",

    category: "BBPVP",

    title: "Pengecekan Grounding",

    description:
      "Mempelajari cara melakukan pengecekan grounding sebagai bagian dari sistem keselamatan kelistrikan bangunan dan memahami pentingnya jalur pembumian yang baik.",

    media: [

      {
        type: "image",
        src: "bbpvp-mempelajari-tentang-pengecekan-grounding.jpg",
        label: "Pengecekan grounding"
      }

    ]

  },


  {
    id: "k3",

    category: "BBPVP",

    title: "K3",

    description:
      "Mempelajari penerapan keselamatan dan kesehatan kerja sebelum dan selama praktik, termasuk mengenali potensi bahaya serta bekerja dengan prosedur yang lebih aman.",

    media: [

      {
        type: "image",
        src: "bbpvp-mempelajari-tentang-k3.jpg",
        label: "K3"
      }

    ]

  },


  {
    id: "smart",

    category: "BBPVP",

    title: "Smart Building",

    description:
      "Mempraktikkan pemasangan komponen smart building dan menghubungkan sistem agar perangkat dapat dikontrol melalui HP sebagai bagian dari integrasi bangunan cerdas.",

    media: [

      {
        type: "video",
        src: "bbpvp-video-memasang-komponen-smart-building-bisa-dikontrol-dengan-hp.mp4",
        label: "Smart building"
      }

    ]

  }

];


/* =========================================================
   PROJECT RENDER
========================================================= */

const projectGrid =
  document.getElementById("projectGrid");


function renderProjects(filter = "all") {

  projectGrid.innerHTML = "";


  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          project =>
            project.category === filter
        );


  filteredProjects.forEach(project => {

    const card =
      document.createElement("article");


    card.className =
      "project-card";


    const firstMedia =
      project.media[0];


    let mediaHTML = "";


    if (firstMedia.type === "video") {

      mediaHTML = `
        <video
          src="${firstMedia.src}"
          muted
          autoplay
          loop
          playsinline
          preload="metadata">
        </video>
      `;

    } else {

      mediaHTML = `
        <img
          src="${firstMedia.src}"
          alt="${firstMedia.label}"
          loading="lazy">
      `;

    }


    card.innerHTML = `

      <div class="project-card-image">
        ${mediaHTML}
      </div>


      <div class="project-card-content">

        <span class="project-category">
          ${project.category}
        </span>

        <h3>
          ${project.title}
        </h3>

        <p class="project-card-description">
          ${project.description}
        </p>

        <span class="project-open">
  Lihat karya
  <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19 19 5"></path>
    <path d="M9 5h10v10"></path>
  </svg>
</span>

      </div>

    `;


    card.addEventListener(
      "click",
      () => {
        openProject(project.id);
      }
    );


    projectGrid.appendChild(card);

  });

}


renderProjects();


/* =========================================================
   PROJECT FILTER
========================================================= */

const filters =
  document.querySelectorAll(".filter-btn");


filters.forEach(filter => {

  filter.addEventListener(
    "click",
    () => {

      filters.forEach(item => {

        item.classList.remove("active");

      });


      filter.classList.add("active");


      renderProjects(
        filter.dataset.filter
      );

    }
  );

});


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
  document.getElementById("projectModal");

const projectClose =
  document.getElementById("modalClose");

const modalCategory =
  document.getElementById("modalCategory");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalMedia =
  document.getElementById("modalMedia");


function openProject(projectId) {

  const project =
    projects.find(
      item => item.id === projectId
    );


  if (!project) return;


  modalCategory.textContent =
    project.category;


  modalTitle.textContent =
    project.title;


  modalDescription.textContent =
    project.description;


  modalMedia.innerHTML = "";


  project.media.forEach(media => {

    const item =
      document.createElement("div");


    item.className =
      "modal-media";


    if (media.type === "image") {

      item.innerHTML = `
        <img
          src="${media.src}"
          alt="${media.label}"
          loading="lazy">
      `;


      const image =
        item.querySelector("img");


      image.addEventListener(
        "click",
        () => {

          openViewer(
            media.src,
            "image"
          );

        }
      );


    } else {

      item.innerHTML = `
        <video
          src="${media.src}"
          controls
          playsinline
          preload="metadata">
        </video>
      `;


      const video =
        item.querySelector("video");


      video.addEventListener(
        "dblclick",
        () => {

          openViewer(
            media.src,
            "video"
          );

        }
      );

    }


    modalMedia.appendChild(item);

  });


  projectModal.classList.add("active");

  projectModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


function closeProject() {

  projectModal.classList.remove(
    "active"
  );

  projectModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


projectClose.addEventListener(
  "click",
  closeProject
);


projectModal.addEventListener(
  "click",
  event => {

    if (
      event.target.classList.contains(
        "modal-backdrop"
      )
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   VIEWER
========================================================= */

const viewer =
  document.getElementById("viewer");

const viewerClose =
  document.getElementById("viewerClose");

const viewerMedia =
  document.getElementById("viewerMedia");

const rotateLeft =
  document.getElementById("rotateLeft");

const rotateRight =
  document.getElementById("rotateRight");


let currentImage = null;
let rotation = 0;


function openViewer(
  src,
  type = "image"
) {

  viewerMedia.innerHTML = "";

  currentImage = null;

  rotation = 0;


  if (type === "image") {

    const image =
      document.createElement("img");


    image.src = src;

    image.alt = "Media";


    image.style.transform =
      "rotate(0deg)";


    viewerMedia.appendChild(
      image
    );


    currentImage =
      image;


    rotateLeft.style.display =
      "grid";

    rotateRight.style.display =
      "grid";


  } else {

    const video =
      document.createElement("video");


    video.src = src;

    video.controls = true;

    video.playsInline = true;

    video.preload = "metadata";


    viewerMedia.appendChild(
      video
    );


    rotateLeft.style.display =
      "none";

    rotateRight.style.display =
      "none";


    video.addEventListener(
      "loadedmetadata",
      () => {

        video.play().catch(
          () => {}
        );

      }
    );

  }


  viewer.classList.add("active");

  viewer.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


function closeViewer() {

  const video =
    viewerMedia.querySelector(
      "video"
    );


  if (video) {

    video.pause();

  }


  viewer.classList.remove(
    "active"
  );


  viewer.setAttribute(
    "aria-hidden",
    "true"
  );


  viewerMedia.innerHTML = "";

  currentImage = null;

  document.body.style.overflow =
    "";

}


viewerClose.addEventListener(
  "click",
  closeViewer
);


viewer.addEventListener(
  "click",
  event => {

    if (
      event.target.classList.contains(
        "viewer-backdrop"
      )
    ) {

      closeViewer();

    }

  }
);


/* =========================================================
   ROTATE IMAGE
========================================================= */

rotateLeft.addEventListener(
  "click",
  () => {

    if (!currentImage) return;


    rotation -= 90;


    currentImage.style.transform =
      `rotate(${rotation}deg)`;

  }
);


rotateRight.addEventListener(
  "click",
  () => {

    if (!currentImage) return;


    rotation += 90;


    currentImage.style.transform =
      `rotate(${rotation}deg)`;

  }
);


/* =========================================================
   CERTIFICATE VIEWER
========================================================= */

const certificateCards =
  document.querySelectorAll(
    ".certificate-card"
  );


certificateCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const src =
        card.dataset.certificate;


      if (!src) return;


      openViewer(
        src,
        "image"
      );

    }
  );

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }


    if (
      viewer.classList.contains(
        "active"
      )
    ) {

      closeViewer();

      return;

    }


    if (
      projectModal.classList.contains(
        "active"
      )
    ) {

      closeProject();

    }

  }
);


/* =========================================================
   MUSIC PLAYER
========================================================= */

const audio =
  document.getElementById("audio");

const musicToggle =
  document.getElementById("musicToggle");

const musicClose =
  document.getElementById("musicClose");

const musicPlayer =
  document.getElementById("musicPlayer");

const musicProgress =
  document.getElementById("musicProgress");

const progressContainer =
  document.querySelector(
    ".music-progress"
  );


audio.loop = true;


function updateMusicButton() {
  if (audio.paused) {
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-label", "Play music");
  } else {
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-label", "Pause music");
  }
}


musicToggle.addEventListener(
  "click",
  async () => {

    if (audio.paused) {

      try {

        await audio.play();

      } catch (error) {

        console.log(
          "Audio belum dapat diputar:",
          error
        );

      }

    } else {

      audio.pause();

    }


    updateMusicButton();

  }
);


audio.addEventListener(
  "play",
  updateMusicButton
);


audio.addEventListener(
  "pause",
  updateMusicButton
);


audio.addEventListener(
  "timeupdate",
  () => {

    if (!audio.duration) {
      return;
    }


    const percentage =
      (
        audio.currentTime /
        audio.duration
      ) * 100;


    musicProgress.style.width =
      `${percentage}%`;

  }
);


audio.addEventListener(
  "ended",
  () => {

    audio.currentTime = 0;

    audio.play().catch(
      () => {}
    );

  }
);


/* Music progress */

progressContainer.addEventListener(
  "click",
  event => {

    if (!audio.duration) {
      return;
    }


    const rect =
      progressContainer.getBoundingClientRect();


    const position =
      (
        event.clientX -
        rect.left
      ) / rect.width;


    audio.currentTime =
      position * audio.duration;

  }
);


/* Close music */

musicClose.addEventListener(
  "click",
  () => {

    audio.pause();

    musicPlayer.style.display =
      "none";

  }
);


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const targetId =
          link.getAttribute(
            "href"
          );


        if (
          !targetId ||
          targetId === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   MEDIA ERROR PROTECTION
========================================================= */

document.addEventListener(
  "error",
  event => {

    const element =
      event.target;


    if (
      element.tagName !== "IMG"
    ) {

      return;

    }


    const parent =
      element.closest(
        ".project-card-image, .modal-media, .certificate-image"
      );


    if (parent) {

      parent.classList.add(
        "media-error"
      );

    }

  },
  true
);


/* =========================================================
   INITIAL STATE
========================================================= */

updateMusicButton();