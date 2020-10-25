import HeroImg from "./components/Ecomm.image.js"

export const Ecomm = {
  title: `E-comm`,
  description: `E-comm is an online e-commerce application built for local shops. The application required a lot of heavy lifting
  to create a universal cart, product pages and overall shopping experience for end users. This project has 3 phases. Phase 1
  simply allows user to sign in using email or google account. Phase 2  introduces user to the products
  . Phase 3 was more complex, as it includes full shop and cart pages as well as the logic that goes behind it.`,
  url: `https://shopping-app-project.herokuapp.com/`,
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
  projGoal: `I wanted to build an app which is compact, scalable,
   as well as an app where I can push myself beyond the basics, so e-commerce seemed perfect app for me to explore all these.`,
  challenges: `The First Challenge that I ran into was to structure the codebase. All the  components that I built, soon  became like pieces of puzzle and I realized
  how important it is to structure the code base properly. Also as the development continued managing state of application became tougher and tougher
  and to overcome this, I used redux .`,
  lessonsLearned: `I can talk all day explaining all the lessons I learned while building this project, but the most important one was my newfound understanding
  of Redux, git management, state management, using local storage to maintain user's cart items and its count, and also using selectors in redux to cache some data to improve app's performance . `,

  techStackDescription: `I choose React because for an app like e-commerce, where user experience matters the most, React made more sense. SCSS was obvious choice
  because its syntactically similar to CSS and encourage proper nesting of rules. Heroku was chosed because of its reliability .   `,
}

export const AdoptPet = {
  title: `Adopt animal`,
  description: `Adopt animal is a react application where user can adopt pets. It was a follow along project when I was
  learning the new React hooks concepts. Adopt animal allows user to adopt pets available in their region. It uses pets api
  to find available pet in the region selected by user. `,
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
