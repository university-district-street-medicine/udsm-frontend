export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageURL: string
}

export const teamData: Member[] = [
  {
    id: 1,
    name: "Karissa Yamaguchi",
    role: "Co-director",
    description: "Medical Student who is passionate about affirming people's inherent dignity and worth through medicine.",
    imageURL: "/KarissaY.png"
  },
  {
    id: 2,
    name: "Natalie Thiel",
    role: "Co-director",
    description: "I have worked with UDSM for many years, first as a graduate student in public health and now as a medical student. As a co-director, I direct and coordinate UDSM operations and support our team in providing care to our neighbors and service learning for students. I am constantly humbled by how much I learn with UDSM and love how this work connects me to my community.",
    imageURL: "/NatalieT.png"
  },
  {
    id: 3,
    name: "Christina Tran",
    role: "Co-director",
    description: "As one of the co-directors of UDSM, I am so excited to serve the members of the University District while working alongside my peers and community members. I am motivated to increase accessibility to healthcare and connect with underserved populations within the community. After attending the University of Washington as an undergraduate, I am so honored to come back as a medical student and contribute to the mission of UDSM to promote health equity in a community that I have been living and growing in for years! ",
    imageURL: "/ChristinaT.png"
  },
  {
    id: 4,
    name: "Tiffany Childs",
    role: "Co-director",
    description: "Hello! My name is Tiffany and I’m currently an undergraduate studying Public Health and Neuroscience. I have been involved with UDSM for 3 years- I began as a volunteer during my freshman year as I started getting more involved in social services and advocacy work for the unhoused population. My goal when working with UDSM is to continue to build that vibrant presence among our unhoused neighbors in addition to educating others about the importance of humanizing practices and languages. Additionally, I work as a licensed SUDPT and I am a strong advocate for addiction recovery and holistic treatment.  In my free time I like to paint, listen to vinyls (80s always!) and hang with my furry friends at home!",
    imageURL: "/TiffanyC.png"
  }
]