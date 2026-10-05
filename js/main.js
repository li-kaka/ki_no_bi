const colorDetails = {
  sakura: {
    name: "桜色",
    reading: "さくらいろ",
    roman: "SAKURA-IRO",
    hex: "#F4B4C0",
    season: "春 / SPRING",
    image: "images/sakura.JPG",
    imageAlt: "桜色を思わせる春の桜の写真",
    description: "桜の花びらを思わせる、わずかに赤みを含んだ淡い色です。平安時代から春を象徴する色として親しまれ、重ね着の配色にも用いられてきました。華やかでありながら控えめな、日本の春らしい色です。"
  },
  wakakusa: {
    name: "若草色",
    reading: "わかくさいろ",
    roman: "WAKAKUSA-IRO",
    hex: "#A8C97F",
    season: "春 / SPRING",
    image: "images/wakakusa.jpeg",
    imageAlt: "若草色を思わせる春の緑の写真",
    description: "春先に芽を出したばかりの若い草を表す、明るい黄緑色です。冬を越えて新しく始まる生命の息吹を感じさせ、古くから春の装いや文様に取り入れられてきました。"
  },
  hisui: {
    name: "翡翠色",
    reading: "ひすいいろ",
    roman: "HISUI-IRO",
    hex: "#38B48B",
    season: "夏 / SUMMER",
    image: "images/hisui.jpeg",
    imageAlt: "翡翠色を思わせる夏の水辺の写真",
    description: "翡翠の石を思わせる、青みを含んだ清らかな緑色です。透明感と涼しさがあり、夏の水辺や木陰に流れる静かな空気を感じさせます。"
  },
  ruri: {
    name: "瑠璃色",
    reading: "るりいろ",
    roman: "RURI-IRO",
    hex: "#1E50A2",
    season: "夏 / SUMMER",
    image: "images/ruri.JPG",
    imageAlt: "瑠璃色を思わせる深い青の写真",
    description: "七宝のひとつに数えられる宝石、瑠璃の色に由来する濃い青色です。古くから高貴な色として大切にされ、深い海や夕暮れ前の空のような、静かな奥行きを感じさせます。"
  },
  yamabuki: {
    name: "山吹色",
    reading: "やまぶきいろ",
    roman: "YAMABUKI-IRO",
    hex: "#F8B500",
    season: "秋 / AUTUMN",
    image: "images/yamabuki.jpeg",
    imageAlt: "山吹色を思わせる黄色い花の写真",
    description: "山吹の花に由来する、赤みを帯びた鮮やかな黄色です。黄金にも似た豊かな色合いから、実りや華やかさを感じさせる色として、衣服や工芸の中で長く愛されてきました。"
  },
  kaki: {
    name: "柿色",
    reading: "かきいろ",
    roman: "KAKI-IRO",
    hex: "#ED6D3D",
    season: "秋 / AUTUMN",
    image: "images/kaki.jpeg",
    imageAlt: "柿色を思わせる秋の橙色の写真",
    description: "よく熟した柿の実を思わせる、深くあたたかな橙色です。江戸時代には染め色として広まり、素朴さと力強さをあわせ持つ色として、秋の暮らしを鮮やかに彩ってきました。"
  },
  ginnezu: {
    name: "銀鼠",
    reading: "ぎんねず",
    roman: "GINNEZU",
    hex: "#91989F",
    season: "冬 / WINTER",
    image: "images/ginnezu.jpeg",
    imageAlt: "銀鼠を思わせる雪景色の写真",
    description: "銀の光をわずかに含んだような、明るく上品な鼠色です。華美を避けた江戸の美意識から多くの鼠色が生まれ、銀鼠はその中でも洗練された静かな色として好まれました。"
  },
  sumi: {
    name: "墨色",
    reading: "すみいろ",
    roman: "SUMI-IRO",
    hex: "#343434",
    season: "冬 / WINTER",
    image: "images/sumi.jpg",
    imageAlt: "墨色を思わせる雪原の人物シルエット写真",
    description: "書や水墨画に使われる墨のような、やわらかな黒色です。雪原に落ちる影のように、静けさの中で輪郭を深め、冬の空気に落ち着いた重みを添えます。"
  }
};

const modal = document.querySelector(".color-modal");
const detailButtons = document.querySelectorAll(".detail-button");
const colorCards = document.querySelectorAll(".color-card");
const revealItems = document.querySelectorAll(".section-heading:not(.section-heading-main), .color-card, .season-hero, .page-turn, .site-footer");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (modal) {
  const closeButton = modal.querySelector(".modal-close");
  const modalVisual = modal.querySelector(".modal-visual");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-content h2");
  const modalReading = modal.querySelector(".modal-reading");
  const modalRoman = modal.querySelector(".modal-roman");
  const modalHex = modal.querySelector(".modal-hex");
  const modalSeason = modal.querySelector(".modal-season");
  const modalDescription = modal.querySelector(".modal-description");

  const openColorModal = (colorId) => {
    const color = colorDetails[colorId];

    if (!color) return;

    modal.style.setProperty("--modal-accent", color.hex);
    modalVisual.style.backgroundColor = color.hex;
    modalImage.src = color.image;
    modalImage.alt = color.imageAlt;
    modalTitle.textContent = color.name;
    modalReading.textContent = color.reading;
    modalRoman.textContent = color.roman;
    modalHex.textContent = color.hex;
    modalSeason.textContent = color.season;
    modalDescription.textContent = color.description;
    modal.showModal();
  };

  detailButtons.forEach((button) => {
    const color = colorDetails[button.dataset.colorId];
    button.setAttribute("aria-label", `${color.name}の詳細を見る`);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openColorModal(button.dataset.colorId);
    });
  });

  colorCards.forEach((card) => {
    const button = card.querySelector(".detail-button");

    card.addEventListener("click", () => openColorModal(button.dataset.colorId));
  });

  closeButton.addEventListener("click", () => modal.close());

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) modal.close();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}
