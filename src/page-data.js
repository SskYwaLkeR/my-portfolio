import ProjectOne from "./components/Ecomm.image"

export const AboutMe = {
  title: `About Me`,
  description: `I'm Hrishikesh rai, a 23 year old recent graduate from RGPV University. I'm passionate introvert who
  loves building softwares. I first started writing code when I was 14, I remember I used to write code in blue java
  but I didn't last long.`,

  description2: `Years later, I started designing UI/UX for apps and websites, and it was really exciting for me. I then started
   building some of my designs into code and ever since then, I've been honing my skills and learning javascript.
  `,

  description3: `As I grow as a developer, I worked alongside with senior developers and designers who raised my standard
  for whats expected for any web applications, and through these experiences I've the opportunity to create memorable products
  which is not only easy to use but are also written in code that is maintainable and easy to understand. Also I'm seeking a full-time
  role where I can combine my skills that I gained and see how I will be able to contribute to the firm . 
  `,
}

export const MySkills = {
  title: `My Skills`,
  description: `Through my studies I have gained a solid understanding of computer science, and web development concepts and I 
  dedicated lot of my free time applying these concepts to actual scenarios and applications `,
}

export const Experience = {
  title: `Experience`,
  description: `I've done internships at two different companies in the past. Read more about my internship below.`,
}

export const Projects = {
  title: `Projects`,
  description: `I really love learning new skill and building websites. Take a look into some of the application , and blogs I've 
  dedicated my time to .`,
}

//for connect with me page

export const LetsTalk = {
  title: `Let's Talk`,
  description: `Feel free to reach out if you're looking for a developer, have a question or just want to connect .`,
}

// timeline is data showcasing my work experience alternate class name left and right has to be maintained

export const TimeLine = [
  {
    title: `We18.in`,
    role: `Front-end developer`,
    description: `We18.in is a service based startup company in Pune. Read more about my experience as an intern at We18`,
    class: `timeline-block-right`,
    key: `1a`,
  },
  {
    title: `Tuutr.com`,
    role: `Front-end developer`,
    description: `Tuutr is a ed-tech startup company at Bangalore. Read more about my experience as an intern at Tuutr .`,
    class: `timeline-block-left`,
    key: `2b`,
  },
  {
    title: `Still in search for 👀`,
    role: `Software developer role`,
    description: ``,
    class: `timeline-block-right`,
    key: `3c`,
  },
]

export const ProjectsData = [
  {
    img: ProjectOne,
    title: `E-comm`,
    description: `A scalable e-commerce application built with React and Redux`,
    key: `p1`,
    url: `/e-comm`,
  },
  {
    img: ProjectOne,
    title: `Monsters`,
    description: `A react application where user can search for monsters`,
    key: `p2`,
    url: `/e-comm`,
  },
  {
    img: ProjectOne,
    title: `Adopt pet`,
    description: `A portal built with react where user can  adopt abandoned pets`,
    key: `p3`,
    url: `/e-comm`,
  },
]
