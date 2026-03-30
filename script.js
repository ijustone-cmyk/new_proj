const products = [
  {
    badge: "Signature",
    name: "100% 착즙 한라봉 주스",
    tagline: "처음 마셔도 기분 좋게 다가오는 귤하르방의 시그니처.",
    description:
      "한라봉 특유의 진한 향과 상큼함을 담아 가장 먼저 찾게 되는 대표 메뉴입니다. 귤하르방을 처음 만나는 분께 가장 먼저 권하고 싶은 한 병입니다.",
    hook: "상큼하고 진한 한라봉 풍미",
    bundle: "더운 날씨, 축제, 첫 구매 추천",
    venue: "가장 먼저 추천하는 메뉴",
    short: "가볍게 즐기기 좋은 대표 시그니처",
  },
  {
    badge: "Jeju Citrus",
    name: "제주 감귤 선샤인",
    tagline: "부드럽고 친숙하게 즐기기 좋은 데일리 시트러스.",
    description:
      "감귤의 부드러운 달콤함과 산뜻함을 살린 메뉴로, 남녀노소 누구나 편하게 즐기기 좋은 라인입니다.",
    hook: "부담 없이 마시기 좋은 편안한 감귤 맛",
    bundle: "가족 행사, 가벼운 간식 타임 추천",
    venue: "온 가족이 즐기기 좋은 메뉴",
    short: "누구에게나 편하게 다가가는 감귤 맛",
  },
  {
    badge: "Sparkling",
    name: "청귤 스파클 에이드",
    tagline: "더 시원하고 청량하게 즐기는 톡 쏘는 한 잔.",
    description:
      "청귤의 산뜻함과 탄산의 청량함이 어우러져 더운 날씨나 야외 행사에서 특히 기분 좋게 마시기 좋은 메뉴입니다.",
    hook: "시원하고 청량한 기분 전환용 메뉴",
    bundle: "야외 행사, 더운 날씨 추천",
    venue: "청량감이 필요한 순간에 잘 어울림",
    short: "한층 더 시원한 청귤 스타일",
  },
  {
    badge: "Color Pop",
    name: "자몽 썬셋 블렌드",
    tagline: "톤 하나만으로도 시선을 끌어오는 포토제닉 메뉴.",
    description:
      "붉은빛이 도는 컬러가 진열대 전체를 더 풍성하게 보여 주며, 세트 판매 구성을 만들 때 비주얼 포인트 역할을 해줍니다.",
    hook: "비주얼 덕분에 체류 시간을 늘리는 메뉴",
    bundle: "한라봉 + 자몽 컬러 페어링",
    venue: "포토존 인접 행사 추천",
    short: "컬러 조합으로 매대를 더 예쁘게",
  },
  {
    badge: "Tropical",
    name: "망고 패션 쿨러",
    tagline: "달콤한 취향을 위한 강력한 보조 매출 메뉴.",
    description:
      "시트러스가 부담스러운 고객에게 대안을 주는 역할을 하며, 한라봉 주스와 함께 추천하면 취향 분산 없이 매출을 붙잡을 수 있습니다.",
    hook: "달콤한 맛 선호 고객을 놓치지 않는 확장 메뉴",
    bundle: "커플 세트 또는 친구 2인 세트",
    venue: "10~20대 비중 높은 행사 추천",
    short: "달콤한 라인을 원하는 고객용",
  },
  {
    badge: "Warm Citrus",
    name: "유자 허니 스플래시",
    tagline: "향으로 먼저 기억되는 감성형 메뉴.",
    description:
      "유자의 향긋함과 부드러운 달콤함이 있어 선물용, 부모님 취향, 계절성 콘텐츠에 잘 어울리는 제품입니다.",
    hook: "감성형 행사에서 브랜드 무드를 살리는 메뉴",
    bundle: "가을·겨울 시즌 한정 묶음",
    venue: "실내 마켓, 계절 행사 추천",
    short: "향긋한 계절감을 담은 메뉴",
  },
  {
    badge: "Wellness",
    name: "ABC 밸런스 주스",
    tagline: "건강한 이미지를 강화해 주는 웰니스 카드.",
    description:
      "사과, 비트, 당근 조합처럼 익숙한 웰니스 메시지를 붙일 수 있어 박람회나 피트니스 행사와 궁합이 좋습니다.",
    hook: "브랜드 전체를 더 건강하게 보이게 하는 보조 축",
    bundle: "아침 행사 전용 2병 세트",
    venue: "러닝, 피트니스, 웰니스 행사 추천",
    short: "건강 이미지를 보강하는 라인",
  },
  {
    badge: "Fresh Boost",
    name: "레몬 진저 리프레시",
    tagline: "입안을 환하게 정리해 주는 선명한 한 잔.",
    description:
      "새콤함과 향이 분명해 시식 한 컵만으로도 반응을 이끌기 좋고, 브랜드 전체를 더 활기차게 보이게 만드는 역할을 합니다.",
    hook: "짧은 시음으로 구매를 유도하기 좋은 샘플링 메뉴",
    bundle: "샷형 미니컵 체험 운영",
    venue: "동선이 빠른 박람회 추천",
    short: "짧은 시음 전환에 강한 메뉴",
  },
  {
    badge: "Smooth",
    name: "딸기 요거트 스무디",
    tagline: "아이와 여성 고객층을 단단히 잡아 주는 안전한 선택.",
    description:
      "부드러운 질감과 친숙한 맛이 장점이라 키즈 행사나 가족 단위 방문객 비율이 높은 장소에서 특히 객단가를 올려 줍니다.",
    hook: "가족 행사에서 빠질 수 없는 보조 베스트셀러",
    bundle: "키즈 펀치와 패밀리 묶음",
    venue: "키즈 행사, 주말 마켓 추천",
    short: "가족 고객을 위한 스무디 라인",
  },
  {
    badge: "Kids Pick",
    name: "키즈 오렌지 펀치",
    tagline: "작고 밝고 쉬워서 부모가 바로 고르기 좋은 메뉴.",
    description:
      "행사장에서 아이를 동반한 부모는 설명이 쉬운 메뉴를 선호하기 때문에, 키즈 전용 이름 하나만으로도 구매가 빨라집니다.",
    hook: "부모의 선택 피로를 줄여 주는 키즈 전용 옵션",
    bundle: "패밀리 세트의 마무리 메뉴",
    venue: "가족 단위 방문객 많은 행사 추천",
    short: "부모가 빠르게 결정하는 키즈 메뉴",
  },
];

const featuredProducts = products.slice(0, 3);

const productList = document.getElementById("productList");
const productName = document.getElementById("productName");
const productBadge = document.getElementById("productBadge");
const productTagline = document.getElementById("productTagline");
const productDescription = document.getElementById("productDescription");
const productHook = document.getElementById("productHook");
const productBundle = document.getElementById("productBundle");
const productVenue = document.getElementById("productVenue");

function renderSpotlight(index) {
  const item = featuredProducts[index];

  productBadge.textContent = item.badge;
  productName.textContent = item.name;
  productTagline.textContent = item.tagline;
  productDescription.textContent = item.description;
  productHook.textContent = item.hook;
  productBundle.textContent = item.bundle;
  productVenue.textContent = item.venue;

  document.querySelectorAll(".product-card").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
}

function buildProductButtons() {
  if (!productList) {
    return;
  }

  featuredProducts.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "product-card";
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <div class="product-meta">
        <span>${item.badge}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <strong>${item.name}</strong>
      <p>${item.short}</p>
    `;
    button.addEventListener("click", () => renderSpotlight(index));
    productList.appendChild(button);
  });

  renderSpotlight(0);
}

function setupReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

buildProductButtons();
setupReveal();
