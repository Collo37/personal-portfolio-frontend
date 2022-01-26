export const homePageLinesOfCode = [
  "class Programmer {",
  " constructor(name, projects, skills, contact) {",
  " this.name = name;",
  " this.skills = skills;",
  " this.projects = projects;",
  " this.contact = contact;",
  "",
  "  }",
  "}",
  "",
  `const me = new Programmer("Collins", skills, featuredProjects, contact);
`,
];

export const skillsLinesOfCode = [
  " this.listSkills = () => {",
  "   return this.skills;",
  " };",
  "",
  `let skills = {`,
  ` frontend: ["HTML", "CSS", "javaScript", "React"],`,
  ` backend: ["Node", "MongoDB", "Express"],`,
  ` mobile: "React Native",`,
  ` design: "Figma",`,
  ` languages: ["JavaScript", "Python"],`,
  `};`,
];

export const projectsLinesOfCode = [
  "    this.showProjects = () => {",
  "      return this.projects;",
  "    };",
  "",
  "",
  `const featuredProjects = [
`,
  `{
`,
  `   title: "Sweet Repeats",
`,
  `   techStack: ["React", "Node js", "MongoDB", "Express"],
`,
  `},
`,
  `{
`,
  `   title: "Netflix Clone",
`,
  `   techStack: ["React", "TMDB API", "Firebase"],
`,
  `},
`,
  `];
`,
  `  
`,
];

export const contactLinesOfCode = [
  "this.showContact = () => {",
  "  return this.contact;",
  "};",
];
