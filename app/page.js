import ParallaxScene from "./ParallaxScene";

const fruits = [
  {
    name: "愛文芒果",
    place: "台南 玉井",
    copy: "果香濃郁、甜度飽滿，是夏季最具代表性的台灣滋味。",
    image: "/fruits/mango.png",
    alt: "帶水珠的愛文芒果與切開的金黃果肉",
    color: "sun"
  },
  {
    name: "金鑽鳳梨",
    place: "屏東 高樹",
    copy: "纖維細緻、酸甜平衡，切開就有清亮熱帶香氣。",
    image: "/fruits/pineapple.png",
    alt: "金鑽鳳梨與新鮮切片",
    color: "lime"
  },
  {
    name: "蓮霧",
    place: "屏東 林邊",
    copy: "口感爽脆多汁，帶著淡淡花香與漂亮的寶石紅。",
    image: "/fruits/wax-apple.png",
    alt: "紅色蓮霧與切開的白色果肉",
    color: "rose"
  },
  {
    name: "紅心芭樂",
    place: "彰化 溪州",
    copy: "香氣溫潤、果肉細密，適合鮮食也適合做成果飲。",
    image: "/fruits/guava.png",
    alt: "紅心芭樂整顆與切半的粉紅果肉",
    color: "mint"
  }
];

const highlights = ["四季鮮採", "產地直送", "自然熟成"];

export default function Home() {
  return (
    <ParallaxScene>
    <div className="site-shell">
      <div className="parallax-glow glow-one" aria-hidden="true" />
      <div className="parallax-glow glow-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="台灣鮮果光廊首頁">
          <span className="brand-mark">果</span>
          <span>台灣鮮果光廊</span>
        </a>
        <nav className="site-nav" aria-label="主要導覽">
          <a href="#fruits">水果介紹</a>
          <a href="#origin">產地風土</a>
          <a href="#footer">聯絡資訊</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy glass-panel parallax-layer slow-rise">
            <p className="eyebrow">Taiwan Fruit Selection</p>
            <h1>把島嶼陽光，切成一口鮮甜。</h1>
            <p className="hero-text">
              精選台灣在地水果，從南部豔陽下的芒果，到屏東海風孕育的蓮霧，
              用清爽、明亮、帶著水光的方式介紹每一份當季滋味。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#fruits">探索水果</a>
              <a className="ghost-button" href="#origin">了解產地</a>
            </div>
          </div>
          <div className="hero-visual glass-panel parallax-layer float-image" aria-label="台灣水果主視覺">
            <img src="/taiwan-fruits-hero.png" alt="芒果、鳳梨、芭樂、火龍果、荔枝與蓮霧的亮面水果組合" />
          </div>
        </section>

        <section className="highlight-strip" aria-label="品牌特色">
          {highlights.map((item) => (
            <div className="highlight-card glass-panel parallax-layer soft-drift" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </section>

        <section className="section" id="fruits">
          <div className="section-heading">
            <p className="eyebrow">Featured Fruits</p>
            <h2>台灣水果介紹</h2>
            <p>
              台灣水果的迷人之處，在於高山、平原、海風與陽光共同塑造出的層次。
            </p>
          </div>
          <div className="fruit-grid">
            {fruits.map((fruit) => (
              <article className={`fruit-card glass-panel parallax-layer fruit-drift ${fruit.color}`} key={fruit.name}>
                <div className="fruit-photo">
                  <img src={fruit.image} alt={fruit.alt} />
                </div>
                <div className="fruit-content">
                  <p className="fruit-place">{fruit.place}</p>
                  <h3>{fruit.name}</h3>
                  <p>{fruit.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="origin-section glass-panel parallax-layer slow-rise" id="origin">
          <div>
            <p className="eyebrow">Island Terroir</p>
            <h2>從產地到餐桌，保留剛好的熟度。</h2>
          </div>
          <p>
            台灣四季溫暖、雨量充足，各地農民依照果物特性調整採收時間。
            我們重視果香、口感與視覺光澤，讓每一批水果都能呈現最漂亮的狀態。
          </p>
        </section>
      </main>

      <footer className="site-footer glass-panel" id="footer">
        <div>
          <strong>台灣鮮果光廊</strong>
          <p>Fresh fruit stories from Taiwan.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@taiwan-fruit.example">hello@taiwan-fruit.example</a>
          <span>每日 09:00 - 18:00</span>
        </div>
      </footer>
    </div>
    </ParallaxScene>
  );
}
