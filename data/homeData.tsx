import { outreachSiteData } from "./siteData";

export const redirectBoxes = [
  {
    id: 1,
    title: "About Us",
    description:
      "Eliminating health disparities through free care to the underserved and educating current and future providers",
    linkText: "Learn More",
    href: "/about",
  },
  {
    id: 2,
    title: "Become a Member",
    description:
      "We are only as strong as our volunteer base! Your support is invaluable and we greatly appreciate it",
    linkText: "Get Involved",
    href: "/join",
  },
  {
    id: 3,
    title: "Join an Event",
    description:
      "Check out our service learning website to explore the many outreach services available and find the one that's right for you",
    linkText: "Visit Calendar",
    href: "https://servicelearning.washington.edu/opportunities/Seattle",
  },
];

// Events boxes - id(for the key prop), date, name, desc
export const events = [
  {
    id: 1,
    date: "SAT, SEP 25",
    name: "September Low-Cost Clinic",
    description: "Help Children Save Lives"
  },
  {
    id: 2,
    date: "FRI, OCT 01",
    name: "October Free Clinic",
    description: "Help Children Save Lives"
  },
  {
    id: 3,
    date: "SAT, OCT 02",
    name: "Monthly Dental Checkup",
    description: "Routine check up for all the children in the camp"
  }
];

// Id, name, caption, and image source
export const carouselPartners = [
  {
    id: 1,
    name: "U-District Outreach",
    caption: "Engagement of those living on the street, distribution of basic supplies, resource advice, partnering with van outreach.",
    imageUrl: "/U-District.png",
    serviceLearningUrl: outreachSiteData[0].serviceLearningUrl
  },
  {
    id: 2,
    name: "St Vincent de Paul",
    caption: "Assessment, education/counseling, social work opportunities, basic medical care of clients during the dinner.",
    imageUrl: "/St.Vincent.png",
    serviceLearningUrl: outreachSiteData[1].serviceLearningUrl
  },
  {
    id: 3,
    name: "Mobile Health Van",
    caption: "Access to a more private exam space in the Mobile Health Van with all the features of a basic clinic exam room.",
    imageUrl: "/HealthVan.png",
    serviceLearningUrl: outreachSiteData[2].serviceLearningUrl
  },
  {
    id: 4,
    name: "Elizabeth Gregory Home",
    caption: "Student teams address patients' medical concerns and questions, provide basic medical care and occasional foot care.",
    imageUrl: "/ElizabethGregoryHome.png",
    serviceLearningUrl: outreachSiteData[3].serviceLearningUrl
  },
  {
    id: 5,
    name: "One Health Clinic",
    caption: "UDSM students serve as patient navigators to improve accessibility of healthcare people and their pets.",
    imageUrl: "/OneHealthClinic.png",
    serviceLearningUrl: outreachSiteData[4].serviceLearningUrl
  },
  {
    id: 6,
    name: "Tent City 3",
    caption: "Students provide regular foot care clinics as well as addressing medical concerns and questions.",
    imageUrl: "/TentCity3.png",
    serviceLearningUrl: outreachSiteData[5].serviceLearningUrl
  }
]