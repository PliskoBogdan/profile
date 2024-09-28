<template>
  <div>
    <div class="block-header">
      <div class="block-header__head">
        <svg
          data-v-e02aa9a0=""
          data-v-a617046b=""
          viewbox="0 0 24 24"
        >
          <path
            data-v-e02aa9a0=""
            d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19M14 16.35C14.96 16 16.12 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57C19.13 14.41 18.29 14.33 17.5 14.33C16.16 14.33 15 14.5 14 14.76V16.35M14 13.69C14.96 13.34 16.12 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67C16.22 11.67 15.05 11.82 14 12.12V13.69M14 11C14.96 10.67 16.12 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C16.18 9 15 9.15 14 9.46V11Z"
          ></path>
        </svg>
      </div>
      <h2 class="block-header__title">Experience</h2>
      <div class="block-header__line"></div>
    </div>

    <ul class="block-list scrolbar-csb">
      <li
        class="block-list__item"
        v-for="item in experienceList"
        :key="item.id"
      >
        <div class="block-list__item-line-circle"></div>
        <div class="block-list__item-line"></div>
        <h1 class="block-list__item-title">{{ item.title }}</h1>
        <span class="block-list__item-date">{{ item.date }}</span>
        <p class="block-list__item-description">{{ item.description }}</p>
        <template v-if="item.stack">
          <span class="block-list__item-description-seperator">Stack:</span
          ><br />
          <p class="block-list__item-description" v-html="item.stack"></p>
        </template>
        <template v-if="item.role">
          <span class="block-list__item-description-seperator">Role:</span
          ><br />
          <p class="block-list__item-description" v-html="item.role"></p>
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const experienceList = [
  {
    id: 1,
    title: "Front-end Tech Lead, “AlverseAI”",
    date: "Feb 2023 - Mar 2024",
    description: `
            Worked as a technical lead with a team of 5 javascript developers on a platform to
                    customize and build bots with artificial intelligence for various businesses. specifically solved
                    the problem of writing and creating basic business logic and breaking that business logic into
                    pieces for the team. The project was on a microserver architecture, written according to
                    TDD, worked according to Agile.
        `,
    stack: `- Javascript, TypeSrcript, HTML5, CSS, SCSS, SASS <br/>
                    - Vue.js 3, bootstrap, vuetify, pinia <br/>
                    - three.js, nest.js, node.js, express, Jest, Cypress <br/>
                    - vite, webpack, gulp <br/>`,
    role: `- Creating a microservice on tree.js to implement client-side customization of bots.<br/>
                    - Introduction of various practices and processes: TDD, GOF, Storybook, Sentry<br/>
                    - Creating a microservice with UI-Kits and models that can be reused in many projects<br/>
                    - Participate in team processes: code review, task scheduling, documentation support, demo
                    to client, retro.<br/>`,
  },
  {
    id: 2,
    title: "Front-end developer, “Artlabs Europe”",
    date: "Sep 2022 - Mar 2023",
    description: `Worked on a platform where designers could find and fulfill an order within a single
application, a platform delegating ordering and sourcing. The team was 40 people. 18
developers including QA, the rest were managers(PM, business analyst). We worked on
Agile.
        `,
    stack: `- Javascript, HTML5, CSS3, SCSS<br/>
- Vue.js 2, vuex, vuetify, vue-router, bootstrap<br/>
- Jest, Playwright, Storybook<br/>`,
    role: `- Participate in team processes: code review, task scheduling, documentation support, retro, mentoring<br/>
- Collaboration with a team to work on one module in parallel<br/>
- Creating complex adaptive layout for different devices<br/>
- Creating complex and dynamic css animations<br/>
`,
  },
  {
    id: 3,
    title: "Front-end developer, “IT-enterprise“",
    date: "Oct 2021 - Sep 2022",
    description: `Worked on extending the company's CMS builder code, in particular its core and browser
rendering tools. Expanded existing APIs, as well as implemented new business ideas. I was
also the head of the QA department, which was created on my initiative.The project worked
on kanban. The team consisted of five full-stack developers and a team lead.
        `,
    stack: `-Javascript, SASS/LESS, CSS3, HTML5<br/>
- Vue.js 2, vuetify, vue-router, React, mobX<br/>
- Jest, Cypress<br/>
- Service worker<br/>
- PostgreSQL, IndexedDB`,
    role: `- Building your data collection and analytics system from scratch in the browser<br/>
- Working with algorithms to find the best solution for working with big data<br/>
- Initiate the creation of a QA department for the project<br/>
- Creating from scratch a browser extension to synchronize the application and bugs<br/>
- Working with legacy code and enhance current business logic
`,
  },
  {
    id: 4,
    title: "Front-end developer, “Forge Solutions“",
    date: "Jun 2020 - Sep 2021",
    description: `Worked with several projects and technologies. Creating a mobile application in React
Native for ParkDrive TM. UI interface for a steel plant that allows employees to create
pipelines and analyze equipment and platform forge solutions. Team - 6 front-end
developers, there was no defined management system.
        `,
    stack: `-Javascript, Dart, Jquery<br/>
- Vue.js 2, React.js, Flutter, React native, mobX, redux saga<br/>
- Jenkins, AWS, Google cloud<br/>
`,
    role: `- Creating various charts and graphs, data transformation<br/>
- Ability to adapt quickly within a short time frame
adapt to the project<br/>
- Working with legacy code, extending existing functionality<br/>
- Ability to delegate tasks in order to work in parallel on several projects<br/>
- CI/CD customization for projects using Jenkins, GitlabRunner<br/>`,
  },
  {
    id: 5,
    title: "Back-end developer, “Arbi.planet“",
    date: "Feb 2019 - Jun 2020",
    description: `I worked on one of the ERP system modules responsible for transfer creation (internal
CRM). The team consisted of three developers + tester + manager. We worked according to
Agile.`,
    stack: `- Javascript, Nest.js, typescript, MongoDB, PostgreSQL, Redis`,
    role: `- Working on new features, refactoring, documentation support<br/>
- Сreating a module for push notifications from scratch`,
  },
];
</script>

<style lang="scss" scoped>
.block-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 20px;
  position: relative;

  &__line {
    width: 3px;
    background: theme("colors.black.500");
    height: 40px;
    position: absolute;

    left: 25px;
    bottom: 0;
  }
  &__title {
    font-size: 20px;
    color: theme("colors.white.text");
  }
  &__head {
    border-radius: 50%;
    background: theme("colors.black.500");
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(path) {
      fill: theme("colors.yellow.300") !important;
    }
    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }
}

.block-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  max-height: 350px;

  &__item-line {
    position: absolute;
    width: 3px;
    background: theme("colors.black.500");
    height: calc(100% + 15px);
    left: 25px;
  }
  &__item-line-circle {
    position: absolute;
    left: 21.5px;
    z-index: 1;
    top: 7px;
    box-shadow: #cdad4a 0px 1px 8px 0px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #57561e;
  }

  &__item {
    position: relative;
    padding-left: calc(50px + 0.5rem);
  }

  &__item-title {
    font-size: 16px;
    color: theme("colors.white.default");
    padding-bottom: 10px;
  }

  &__item-date {
    color: theme("colors.yellow.200");
    font-size: 14px;
  }

  &__item-description {
    color: theme("colors.grey.50");
    font-size: 14px;
  }

  &__item-description-seperator {
    font-size: 14px;
    color: theme("colors.white.default");
    text-decoration: underline;
  }
}
</style>
