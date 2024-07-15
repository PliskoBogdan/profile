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
    <h2 class="about-me__block-title">What I'm Doing</h2>

    <div class="about-me__sprouted-list">
      <MCard class="about-me__card">
        <NuxtImg
          src="/images/code-square.svg"
          :placeholder="[30, 20]"
          width="40"
          height="40"
        />
        <div class="about-me__card-description">
          <h2 class="about-me__card-title">Web Development</h2>
          <p class="about-me__card-subtitle">
            Development of web-applications of any level of complexity with
            maximum performance and cross-platform functionality
          </p>
        </div>
      </MCard>
      <MCard class="about-me__card">
        <NuxtImg
          src="/images/optimize.svg"
          :placeholder="[30, 20]"
          width="40"
          height="40"
        />
        <div class="about-me__card-description">
          <h2 class="about-me__card-title">Mentoring / Coaching</h2>
          <p class="about-me__card-subtitle">
            I share my vast knowledge with developers and businesses <br />so
            that everyone can get the maximum profit in the right sphere
          </p>
        </div>
      </MCard>
      <MCard class="about-me__card">
        <NuxtImg
          src="/images/plan.svg"
          :placeholder="[30, 20]"
          width="40"
          height="40"
        />
        <div class="about-me__card-description">
          <h2 class="about-me__card-title">Web Design</h2>
          <p class="about-me__card-subtitle">
            Modern and convenient design both from scratch and in the process of
            finalizing web-applications without ready templates
          </p>
        </div>
      </MCard>
      <MCard class="about-me__card">
        <NuxtImg
          src="/images/ai.svg"
          :placeholder="[30, 20]"
          width="40"
          height="40"
        />
        <div class="about-me__card-description">
          <h2 class="about-me__card-title">AI Integration</h2>
          <p class="about-me__card-subtitle">
            Keeping up with the times, I provide the ability to implement /
            integrate AI for your business based on various LLM models with
            maximum economics and stability
          </p>
        </div>
      </MCard>
    </div>
  </div>
</template>

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
  &__sprouted-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    padding: 0.4rem 0rem 0rem 0rem;
  }
  &__card {
    display: flex;
    gap: 0.5rem;
  }
  &__card-title {
    color: theme("colors.white.text");
    font-size: 16px;
    font-weight: 600;
  }
  &__card-subtitle {
    color: theme("colors.grey.50");
    font-size: 14px;
  }
}
</style>
