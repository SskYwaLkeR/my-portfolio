import HeroImg from "./components/Ecomm.image.js"
import EcommMainImg from "./components/Optimised-images/e-comm/e-comm-main.image.js"
import EcommSecondImg from "./components/Optimised-images/e-comm/e-comm-second.image.js"
import EcommThirdImg from "./components/Optimised-images/e-comm/e-comm-third.image.js"
import EcommFourthImg from "./components/Optimised-images/e-comm/e-comm-fourth.image.js"

import MonstersMainImg from "./components/Optimised-images/monsters/monsters-main.image.js"
import MonstersSecondImg from "./components/Optimised-images/monsters/monster-second.image.js"
import MonstersThirdImg from "./components/Optimised-images/monsters/monsters-third.image.js"

import SurahaMainImg from "./components/Optimised-images/Suraha/suraha-main.image.js"

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
    HeroImg: EcommMainImg,
    ImgOne: EcommFourthImg,
    ImgTwo: EcommThirdImg,
    ImgThree: EcommSecondImg,
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
  learning the new React hooks concepts. This project utlizes pet API to gather pets data available in the region selected 
  by the user.  `,
  projectStack: [
    { stack: `react`, id: `s1` },
    { stack: `Reach Router`, id: `s2` },
    { stack: `Parcel`, id: `s3` },
  ],
  images: {
    HeroImg: HeroImg,
    ImgOne: HeroImg,
    ImgTwo: HeroImg,
    ImgThree: HeroImg,
  },
  projGoal: `The main purpose for this app was to improve my understanding of react hooks and APIs in genereal, I spend
  good amount of time making sure that none of the coding best practices taught during the project left untouched.`,
  challenges: `Even though it was follow along project I had few doubts because of the usage of new APIs (e.g static getDerievedStateFromError) which I immediately cleared by referring to its documentation.`,
  lessonsLearned: `Apart from react hooks concepts I also came to know about various coding best practices (taught by Brian, software developer at Microsoft) that industry uses, like 
  how to use linter rules to catch bugs related with react and accessiblity. I also learnt concepts of error handelling in react application through react error boundaries.`,

  techStackDescription: `React was obvious because I wanted to learn react hooks, as they offer more expressive way to write
  code and share functionality between components. Reach router was chosen because of the accessiblity feature it offer
  right out of the box. And parcel to minify the complexity bundeling packages .`,
  url: `https://adopt-anhimals.netlify.app/`,
  note: `
   Hi, I realised after hosting this site that all the APIs that I'm using
   is hosted over http while this project is hosted over https, so in order to view
  this project properly you need to allow insecure content for adopt animal, in your browser setting . I will update the api's
  as soon as they get hosted over https but for now this is the only possible workaround  😅.
`,
}

export const Monsters = {
  title: `Monsters`,
  description: `Monsters is a project I put together after learning basics of react. This application was perfect way to 
  improve my understanding of react and managing data sets. In this project I utlized Robohash and JsonPlaceHolder API to 
  gather the monsters data and rendered those data based on user's input.`,
  projectStack: [
    { stack: `React`, id: `s1` },
    { stack: `CSS`, id: `s2` },
    { stack: `Netlify`, id: `s3` },
  ],
  images: {
    HeroImg: MonstersMainImg,
    ImgOne: MonstersSecondImg,
    ImgTwo: MonstersMainImg,
    ImgThree: MonstersThirdImg,
  },
  projGoal: `Main purpose of this project was to improve my understanding of React. Beside this, I also wanted to make application which had to be visually pleasing.
   I also spent good amount of time making  sure I am using best practices of react and data manipulation .`,
  challenges: `As the project was small I did not have many problems, but I remember I was getting same image for all the monsters
  at first because I didnt give unique strings in the parameters which is required by the RoboHash API, apart from that I did not had
  any issue while doing this project`,
  lessonsLearned: `Monsters was really fun project for me as it was my first react app. I learnt how to fetch data and render
  them conditionally based on user input . `,

  techStackDescription: `I used react because I wanted to implement basics of what I learnt in react. And I used CSS over
   SCSS because the application was very small and adding an overhead of extra dependency wasn't justifying .`,
  url: `https://monster-app.netlify.app/`,
}

export const Saraha = {
  title: `Saraha`,
  description: `Saraha is a web application I built after learning the fundamentals of node and mongodb. This application
  was perfect way to improve my understanding of working with RESTful APIs and managing user data in node.  With saraha
  user can send anonymous message to another users. And it can be used by a firm to take feedbacks from their employees were username
  of sender is not so important .`,
  projectStack: [
    { stack: `Node.js`, id: `s1` },
    { stack: `Express`, id: `s2` },
    { stack: `MonogoDB`, id: `s3` },
  ],
  images: {
    HeroImg: SurahaMainImg,
    ImgOne: HeroImg,
    ImgTwo: HeroImg,
    ImgThree: HeroImg,
  },
  projGoal: `The main motivation behind this app was to improve my comprehension of node.js and REST APIs in general. Beside this I also 
  wanted to build a fun project which's usefull to any organisation and simple to use.
  `,
  challenges: `Handeling user's image upload was a bit tricky part for me, also managing user session across
   the application was something that I encountered for the first time.
  `,
  lessonsLearned: `I learnt a lot of thing while building this application , the most exciting one was its deployment 
  part as it was my first application deployed on cloud , I came to know about heroku cli and hosting a database on cloud. I also learnt about http methods, and user authentication in a node application 
  and learnt concepts of database management from creating schemas to storing data into it, and  understood concepts of RESTful APIs . 
  `,

  techStackDescription: `I choose express over fastify and any other node frameworks because for this application I wanted simplicity and 
  speed was not the factor and express for me is very simple to configure and use. Heroku was choosen because of its reliability. And MongoDB was 
  mainly choosen because  it is document database and allows storing and retrieving data in efficient way . `,
  url: `http://suraha.herokuapp.com/`,
}
