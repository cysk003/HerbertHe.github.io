<template>
  <section class="software" aria-labelledby="software-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">INDIE SOFTWARE</p>
        <h2 id="software-title">独立开发者软件</h2>
      </div>
      <p class="section-note">发现实用、专注的小工具。</p>
    </div>

    <div class="product-list">
      <article v-for="product in products" :key="product.name" class="product-card">
        <div class="logo-wrap">
          <img :src="withBase(product.logo)" :alt="`${product.name} logo`" class="product-logo" />
        </div>

        <div class="product-content">
          <div class="product-meta">
            <h3>{{ product.name }}</h3>
            <span class="availability">按需安装 · Install on demand</span>
          </div>

          <p class="tagline">
            <strong lang="zh-CN">{{ product.taglineZh }}</strong>
            <span aria-hidden="true">/</span>
            <span lang="en">{{ product.taglineEn }}</span>
          </p>

          <div class="description">
            <p lang="zh-CN">{{ product.descriptionZh }}</p>
            <p lang="en">{{ product.descriptionEn }}</p>
          </div>

          <div class="product-actions">
            <ul class="features" aria-label="KnowIt features">
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>

            <a
              class="product-link"
              :href="product.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`获取 ${product.name}（在新窗口打开）`"
            >
              <span>了解 KnowIt</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 15 15 5m-7 0h7v7" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { withBase } from "vitepress";

const products = [
  {
    name: "KnowIt",
    logo: "/img/knowit-logo.png",
    href: "https://nangxif.github.io/KnowIt-Public/",
    taglineZh: "读懂网页，也让网页更好用",
    taglineEn: "Understand webpages, and make them easier to use",
    descriptionZh:
      "集成文字搜索、内容总结、划词翻译等实用工具，按需安装，打造你的网页工作台。",
    descriptionEn:
      "Integrate tools like text search, content summary, and translation. Install on demand to build your workspace.",
    features: ["文字搜索", "内容总结", "划词翻译"],
  },
];
</script>

<style scoped>
.software {
  --software-accent: #1789d0;
  width: min(760px, calc(100% - 40px));
  margin: 42px auto 8px;
  font-family: inherit;
}

.software :where(h2, h3, p, a, li, span) {
  font-family: inherit;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 11px;
}

.eyebrow {
  margin: 0 0 2px;
  color: var(--vp-c-text-3);
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.section-heading h2 {
  margin: 0;
  border: 0;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
}

.section-note {
  margin: 0 0 2px;
  color: var(--vp-c-text-3);
  font-size: 0.69rem;
}

.product-list {
  display: grid;
  gap: 10px;
}

.product-card {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 20px;
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: color-mix(in srgb, var(--vp-c-bg) 94%, var(--vp-c-bg-soft) 6%);
}

.logo-wrap {
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 10px;
  background: #000;
}

.product-logo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-content {
  min-width: 0;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.product-meta h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.28rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
}

.availability {
  flex: none;
  color: var(--vp-c-text-3);
  font-size: 0.62rem;
}

.tagline {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin: 7px 0 5px;
  color: var(--vp-c-text-2);
  font-size: 0.74rem;
  line-height: 1.5;
}

.tagline strong {
  color: var(--vp-c-text-1);
}

.tagline > span:first-of-type {
  color: var(--vp-c-text-3);
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.68rem;
  line-height: 1.55;
}

.description p {
  margin: 0;
}

.description p + p {
  margin-top: 1px;
  color: var(--vp-c-text-3);
  font-size: 0.62rem;
}

.product-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 10px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
  margin: 0;
  padding: 0;
  color: var(--vp-c-text-3);
  font-size: 0.61rem;
  list-style: none;
}

.features li::before {
  margin-right: 5px;
  color: var(--vp-c-divider);
  content: "·";
}

.product-link {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-brand);
  font-size: 0.65rem;
  font-weight: 700;
  text-decoration: none;
  transition: border-color 160ms ease, color 160ms ease;
}

.product-link:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.product-link:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
}

.product-link svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

@media (max-width: 640px) {
  .software {
    width: min(100% - 24px, 520px);
    margin-top: 30px;
  }

  .section-note {
    display: none;
  }

  .product-card {
    grid-template-areas:
      "logo meta"
      "logo tagline"
      "description description"
      "actions actions";
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 5px 13px;
    padding: 14px;
  }

  .logo-wrap {
    grid-area: logo;
    align-self: start;
    border-radius: 8px;
  }

  .product-meta {
    grid-area: meta;
    display: block;
  }

  .product-meta h3 {
    font-size: 1.14rem;
  }

  .availability {
    display: block;
    margin-top: 3px;
    font-size: 0.58rem;
  }

  .tagline {
    grid-area: tagline;
    align-self: start;
    margin: 3px 0 0;
    font-size: 0.72rem;
  }

  .tagline span[lang="en"],
  .description p[lang="en"] {
    display: none;
  }

  .product-content {
    display: contents;
  }

  .description {
    grid-area: description;
    margin-top: 7px;
    font-size: 0.7rem;
    line-height: 1.65;
  }

  .product-actions {
    grid-area: actions;
    margin-top: 8px;
  }

  .product-link {
    min-height: 38px;
    padding: 0 12px;
    color: var(--vp-c-text-2);
    font-size: 0.68rem;
  }
}

@media (max-width: 420px) {
  .features {
    display: none;
  }

  .product-actions {
    justify-content: flex-end;
  }

  .product-link {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-link {
    transition: none;
  }
}
</style>
