<template>
  <div class="projects">
    <div class="projects__head">
      <h2 class="projects__title">Projects I've worked on</h2>
      <span class="projects__count">{{ projects.length }}</span>
    </div>

    <ul class="projects__list">
      <li v-for="project in projects" :key="project.id" class="projects__item">
        <MCard class="project">
          <div class="project__top">
            <h3 class="project__name">{{ project.name }}</h3>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project__link"
            >
              {{ project.domain }}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            <span v-else class="project__private">Private project</span>
          </div>
          <span class="project__period">{{ project.period }}</span>
          <p class="project__description">{{ project.description }}</p>
          <ul class="project__tags">
            <li v-for="tag in project.tags" :key="tag" class="project__tag">
              {{ tag }}
            </li>
          </ul>
        </MCard>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Project {
  id: number;
  name: string;
  period?: string;
  description: string;
  tags: string[];
  // optional: projects without a public domain show a "Private project" label
  url?: string;
  domain?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Makeup UA",
    period: "Jul 2024 - Dec 2025",
    url: "https://makeup.com.ua",
    domain: "makeup.com.ua",
    description:
      "Almost everything you’ll see on this website has, in one way or another, a part that I’ve been refining.The result is a significant improvement in performance compared to the old version, an improvement in all SEO metrics, and the creation of a robust framework that is easy to scale and expand, which will save the business a great deal of money in the future",
    tags: ["React", "TypeScript", "SCSS", "PHP", "WCAG", "SEO", "Tailwind", "StoryBook", "React Query"],
  },
  {
    id: 2,
    name: "Olanko",
    url: "https://olanko.com.ua/",
    domain: "olanko.com.ua",
    description:
      "One of my freelance projects. A fairly simple website for a dental clinic. My task was to optimise the site for SEO, improve page load times, and implement design changes to make it more user-friendly. As a result, the site now loads 40 per cent faster, ranks higher in search results, and is much easier to use, following the removal of unnecessary elements and visual flaws.",
    tags: ["PHP", "MOD X 2.8", "Javascript", "SEO"],
  },
  {
    id: 3,
    name: "Hell Case",
    url: "https://hellcs2.com/",
    domain: "hellcs2.com",
    description:
      "One of my part-time projects. I helped develop several existing games: Upgrade, Case Battle and Event. I also had the chance to fix a few bugs and add some minor features to the user page as part of the project.",
    tags: ["Vue.js 3", "Nuxt", "Pinia", "SSR"],
  },
];
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &__head {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    color: theme("colors.white.default");
  }
  &__count {
    font-size: 12px;
    padding: 0.1rem 0.6rem;
    border-radius: 999px;
    background: theme("colors.grey.300");
    color: theme("colors.yellow.200");
  }
  &__list {
    // fills the free height of the page; long lists scroll inside (min 360px)
    flex: 1 1 360px;
    min-height: 360px;
    contain: size;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    gap: 0.5rem;
    padding-right: 0.6rem;
    scrollbar-width: thin;
    scrollbar-color: theme("colors.yellow.300") theme("colors.black.500");

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: theme("colors.black.500");
      border-radius: 999px;
    }
    &::-webkit-scrollbar-thumb {
      background: theme("colors.yellow.300");
      border-radius: 999px;
    }
  }
  &__item {
    display: flex;
  }
}

.project {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border: 1px solid transparent;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: theme("colors.grey.300");
    transform: translateY(-2px);
  }

  &__top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  &__name {
    font-size: 16px;
    font-weight: 600;
    color: theme("colors.white.text");
  }
  &__link {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 13px;
    color: theme("colors.yellow.300");
    transition: color 0.25s;

    svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.25s;
    }
    &:hover {
      color: theme("colors.yellow.200");

      svg {
        transform: translate(2px, -2px);
      }
    }
  }
  &__private {
    font-size: 12px;
    color: theme("colors.grey.40");
  }
  &__period {
    font-size: 13px;
    color: theme("colors.yellow.200");
  }
  &__description {
    font-size: 14px;
    color: theme("colors.grey.50");
    flex: 1;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    padding-top: 0.3rem;
  }
  &__tag {
    font-size: 12px;
    padding: 0.1rem 0.6rem;
    border-radius: 999px;
    background: theme("colors.grey.300");
    color: theme("colors.white.text");
  }
}
</style>
