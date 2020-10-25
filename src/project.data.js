import HeroImg from "./components/Ecomm.image.js"

export const Ecomm = {
  title: `E-commerce`,
  description: `E-comm is a react application built for local shops. This application required a lot of heavy lifting
  to create a universal cart, product pages and overall shopping experience for end users. This project has 3 phases. Phase 1
  simply allowes user to sign in using email or google account. Phase 2 was quite large as it introduce user to the products
  . Phase 3 was more complex, as it includes full shop and cart pages as well as the logic that goes behind it.`,
  url: `/e-comm`,
  projectStack: [
    { stack: `react`, id: `s1` },
    { stack: `SCSS`, id: `s2` },
    { stack: `Heroku`, id: `s3` },
  ],
  images: {
    HeroImg: HeroImg,
    ImgOne: HeroImg,
    ImgTwo: HeroImg,
    ImgThree: HeroImg,
  },
  projGoal: `I wanted to build an app which is enough feature rich to use all the concepts I learnt, an app which is compact as well as scalable,
   and an app where I can push myself beyond the basics, so e-commerce application seems best fit for me to explore all these.`,
  challenges: `The First Challenge that I ran into was to structure the codebase. All the  components that I built, soon  became like pieces of puzzle and I realized
  how important it is to structure the code base properly. Also as the development continued managing state of application became tougher and tougher
  and to overcome this, I used redux .`,
  lessonsLearned: `I can talk all day explaining all the lessons I learned while building this project, but the most important one was my newfound understanding
  of Redux, codebase management, git, state management and using memoization to cache some data to improve performance of app `,

  techStackDescription: `I choose React because for an app like e-commerce, where user experience matters the most, React made more sense. SCSS was obvious choice
  because its syntactically similar to CSS and encourage proper nesting of rules. Heroku was chosed because of its reliability .   `,
}

export const AdoptPet = {
  title: `Adopt animal`,
  description: `Adopt animal is a react application where user can adopt pets. It was a follow along project when I was
  learning the new React hooks concepts. I learnt a lot while building this project`,
  projectStack: [
    { stack: `react`, id: `s1` },
    { stack: `SCSS`, id: `s2` },
    { stack: `Heroku`, id: `s3` },
  ],
  images: {
    HeroImg: HeroImg,
    ImgOne: HeroImg,
    ImgTwo: HeroImg,
    ImgThree: HeroImg,
  },
  projGoal: `The motivation behind this app was to get good understanding of react concepts`,
  challenges: `The First Challenge that I ran into was to structure the codebase. All the  components that I built, soon  became like pieces of puzzle and I realized
  how important it is to structure the code base properly. Also as the development continued managing state of application became tougher and tougher
  and to overcome this, I used redux .`,
  lessonsLearned: `I can talk all day explaining all the lessons I learned while building this project, but the most important one was my newfound understanding
  of Redux, codebase management, git, state management and using memoization to cache some data to improve performance of app `,

  techStackDescription: `I choose React because for an app like e-commerce, where user experience matters the most, React made more sense. SCSS was obvious choice
  because its syntactically similar to CSS and encourage proper nesting of rules. Heroku was chosed because of its reliability .   `,
}
