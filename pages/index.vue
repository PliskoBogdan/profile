<template>
  <div class="about-me">
    <p class="about-me__paragraph">
      Reliable Front-end developer with over four years of development
      experience and team leadership on projects related to building web
      applications and user interfaces. I specialize in using JavaScript,
      TypeScript and modern frameworks such as Vue, React, Nuxt.
    </p>
    <p class="about-me__paragraph">
      I have experience with different project methodologies SCRUM, KANBAN. Good
      knowledge of algorithms / data structures. Skilled in optimizing the
      application as well as tuning its availability. Experienced in designing
      projects both from scratch and in product. I am not afraid to take on any
      tasks, not only from the front-end. Communication with the client and
      experience in writing back-end is also available, so I can take on
      different tasks, as a manager and developer
    </p>
    <div class="about-me__head">
      <h2 class="about-me__block-title">What I'm Doing</h2>
      <div class="about-me__controls">
        <button
          class="about-me__arrow"
          type="button"
          aria-label="Previous"
          :disabled="activeIndex <= 0"
          @click="go(activeIndex - 1)"
        >
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          class="about-me__arrow"
          type="button"
          aria-label="Next"
          :disabled="activeIndex >= maxIndex"
          @click="go(activeIndex + 1)"
        >
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>

    <div class="about-me__slider">
      <div ref="track" class="about-me__track" @scroll.passive="onScroll">
        <MCard v-for="item in services" :key="item.title" class="about-me__card">
          <NuxtImg
            :src="item.icon"
            :placeholder="[30, 20]"
            width="40"
            height="40"
          />
          <div class="about-me__card-description">
            <h2 class="about-me__card-title">{{ item.title }}</h2>
            <p class="about-me__card-subtitle">
              <span class="about-me__card-text">{{ item.text }}</span>
            </p>
          </div>
        </MCard>
      </div>
      <div class="about-me__dots">
        <button
          v-for="(_, i) in maxIndex + 1"
          :key="i"
          type="button"
          class="about-me__dot"
          :class="{ 'about-me__dot--active': i === activeIndex }"
          :aria-label="`Go to slide ${i + 1}`"
          @click="go(i)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  {
    icon: "/images/code-square.svg",
    title: "Web Development",
    text: "High-quality development of web products of any complexity using years of experience and cutting-edge technologies to solve problems of any level of complexity, with the possibility of maximum support and convenience for customers.",
  },
  {
    icon: "/images/optimize.svg",
    title: "CEO optimization",
    text: "Problems with crawling SEO optimization for your products? Maybe your website has poor ratings in Page Speed Insights? We will quickly and efficiently fix SEO errors in your web applications, reliably and using all best practices.",
  },
  {
    icon: "/images/plan.svg",
    title: "WCAG support",
    text: "Does your company operate in the European/American market and want to avoid legal issues? Well, then you should keep web accessibility in mind, which is where I can help. Website optimization for tabs, screen readers, and visual impairments, with care and convenience for users.",
  },
  {
    icon: "/images/ai.svg",
    title: "AI Integration",
    text: "Keeping up with the times, I provide the ability to implement / integrate AI for your business based on various LLM models with maximum economics and stability",
  },
];

const track = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const maxIndex = ref(services.length - 1);

const step = () => {
  const el = track.value;
  const card = el?.firstElementChild as HTMLElement | undefined;
  if (!el || !card) return 0;
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
  return card.offsetWidth + gap;
};

const updateMax = () => {
  const el = track.value;
  const s = step();
  if (!el || !s) return;
  maxIndex.value = Math.round((el.scrollWidth - el.clientWidth) / s);
};

const onScroll = () => {
  const s = step();
  if (!track.value || !s) return;
  activeIndex.value = Math.min(
    Math.round(track.value.scrollLeft / s),
    maxIndex.value
  );
};

const go = (i: number) => {
  const clamped = Math.max(0, Math.min(i, maxIndex.value));
  track.value?.scrollTo({ left: clamped * step(), behavior: "smooth" });
};

// Slowly auto-scrolls long card text (wait -> down -> wait -> back up) so it is
// obvious there is more to read. Pauses all cards while the user hovers or touches any of them.
const SPEED = 14; // px/s going down
const BACK_SPEED = 120; // px/s going up
const WAIT = 1800; // ms

type AutoState = {
  pos: number;
  phase: "wait" | "down" | "up";
  until: number;
  paused: boolean;
};
const states = new Map<HTMLElement, AutoState>();
let raf = 0;
let last = 0;

const bindCard = (el: HTMLElement) => {
  const st: AutoState = { pos: 0, phase: "wait", until: 0, paused: false };
  states.set(el, st);
  const pause = () => (st.paused = true);
  const resume = () => {
    st.paused = false;
    st.pos = el.scrollTop;
  };
  el.addEventListener("pointerenter", pause);
  el.addEventListener("pointerleave", resume);
  el.addEventListener("touchstart", pause, { passive: true });
  el.addEventListener("touchend", () => setTimeout(resume, 2500), {
    passive: true,
  });
};

const tick = (now: number) => {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  // while the user interacts with any card, every card stays still
  const anyPaused = [...states.values()].some((st) => st.paused);
  states.forEach((st, el) => {
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 1 || anyPaused) return;
    if (st.phase === "wait") {
      if (!st.until) st.until = now + WAIT;
      if (now >= st.until) {
        st.until = 0;
        st.phase = el.scrollTop >= max - 1 ? "up" : "down";
      }
      return;
    }
    if (st.phase === "down") {
      st.pos = Math.min(st.pos + SPEED * dt, max);
      el.scrollTop = st.pos;
      if (st.pos >= max) st.phase = "wait";
    } else {
      st.pos = Math.max(st.pos - BACK_SPEED * dt, 0);
      el.scrollTop = st.pos;
      if (st.pos <= 0) st.phase = "wait";
    }
  });
  raf = requestAnimationFrame(tick);
};

onMounted(() => {
  updateMax();
  window.addEventListener("resize", updateMax);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  track.value
    ?.querySelectorAll<HTMLElement>(".about-me__card-subtitle")
    .forEach(bindCard);
  last = performance.now();
  raf = requestAnimationFrame(tick);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMax);
  cancelAnimationFrame(raf);
});
</script>

<style lang="scss" scoped>
.about-me {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &__paragraph {
    font-size: 0.9em;
    color: theme("colors.grey.50");
  }
  &__block-title {
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
    color: theme("colors.white.text");
  }
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__controls {
    display: flex;
    gap: 0.4rem;
  }
  &__arrow {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    background: theme("colors.black.200");
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;

    svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: theme("colors.yellow.300");
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    &:hover:not(:disabled) {
      background: theme("colors.black.500");
    }
    &:disabled {
      opacity: 0.35;
      cursor: default;
    }
  }
  &__slider {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0.4rem;
  }
  &__track {
    // fills the free height of the page; `contain: size` keeps long card
    // text from stretching the whole layout (min 156px)
    flex: 1 1 156px;
    min-height: 156px;
    contain: size;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__dots {
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    padding-top: 0.8rem;
  }
  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: theme("colors.black.500");
    cursor: pointer;
    transition: width 0.25s, background 0.25s;

    &--active {
      width: 22px;
      background: theme("colors.yellow.300");
    }
  }
  &__card {
    display: flex;
    gap: 0.5rem;
    flex: 0 0 calc((100% - 1rem) / 3);
    overflow: hidden;
    scroll-snap-align: start;

    @media (max-width: $mobile) {
      flex-basis: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
  &__card-description {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: $mobile) {
      align-self: stretch;
    }
  }
  &__card-text {
    // vertical centering that still lets long text scroll from its top
    @media (max-width: $mobile) {
      margin-block: auto;
      text-align: center;
    }
  }
  &__card-title {
    padding-bottom: 0.4rem;

    @media (max-width: $mobile) {
      text-align: center;
    }
    color: theme("colors.white.text");
    font-size: 16px;
    font-weight: 600;
  }
  &__card-subtitle {
    color: theme("colors.grey.50");
    font-size: 14px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding-right: 0.6rem;
    scrollbar-width: thin;
    scrollbar-color: theme("colors.yellow.300") theme("colors.black.500");

    @media (max-width: $mobile) {
      display: flex;
      flex-direction: column;
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
}
</style>
