// course card image thumbnails
import cardThumb1 from "../../../components/courseCard/assets/thumbnails/course-card-img_1.png";
import cardThumb2 from "../../../components/courseCard/assets/thumbnails/course-card-img_2.png";
import cardThumb3 from "../../../components/courseCard/assets/thumbnails/course-card-img_3.png";
import cardThumb4 from "../../../components/courseCard/assets/thumbnails/course-card-img_4.png";
import cardThumb5 from "../../../components/courseCard/assets/thumbnails/course-card-img_5.png";
import cardThumb6 from "../../../components/courseCard/assets/thumbnails/course-card-img_6.png";
import cardThumb7 from "../../../components/courseCard/assets/thumbnails/course-card-img_7.png";
import cardThumb8 from "../../../components/courseCard/assets/thumbnails/course-card-img_8.png";

const DATA = [
  {
    id: 1,
    thumbnail: cardThumb1,
    featured: true,
    title: "front end development",
    rating: "5.0",
    rateCount: 192,
    difficulty: "advanced",
    author: "Daphne Mayoral",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Frontend", "UI", "Software"],
    link: "./page/categories/front-end-development",

  },
  {
    id: 2,
    featured: true,
    thumbnail: cardThumb2,
    title: "business analyst",
    rating: "4.2",
    rateCount: 88,
    difficulty: "beginner",
    author: "Vanya Isaq",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["UI", "Frontend"],
    link: "./page/categories/business-analyst"
  },

  {
    id: 3,
    featured: false,
    thumbnail: cardThumb3,
    title: "software testing",
    rating: "4.7",
    rateCount: 65,
    difficulty: "beginner",
    author: "Hubie Ribchester",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["UI", "UX"],
    link: "./page/categories/software-testers"
  },

  {
    id: 4,
    featured: true,
    thumbnail: cardThumb4,
    title: "UI UX design",
    rating: "3.9",
    rateCount: 215,
    difficulty: "intermediate",
    author: "Marlow Annand",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["UX", "UI"],
    link: "./page/categories/ux-design"
  },

  {
    id: 5,
    featured: false,
    thumbnail: cardThumb5,
    title: "marketing",
    rating: "4.4",
    rateCount: 102,
    difficulty: "intermediate",
    author: "Cirillo Freddi",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Test", "Software"],
    link: "./page/categories/marketing"
  },

  {
    id: 6,
    featured: true,
    thumbnail: cardThumb6,
    title: "back end development",
    rating: "4.6",
    rateCount: 29,
    difficulty: "intermediate",
    author: "Michaella Roden",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Marketing", "IT"],
    link: "./page/categories/back-end-development"
  },

  {
    id: 7,
    featured: false,
    thumbnail: cardThumb7,
    title: "test automation",
    rating: "4.0",
    rateCount: 190,
    difficulty: "advanced",
    author: "Dorie Youles",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Frontend", "IT", "Software"],
  },

  {
    id: 8,
    featured: true,
    thumbnail: cardThumb8,
    title: "scrum master",
    rating: "4.2",
    rateCount: 81,
    difficulty: "beginner",
    author: "Virge Anyene",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Data", "Backend"],
  },

  {
    id: 9,
    featured: false,
    thumbnail: cardThumb1,
    title: "UX design theory",
    rating: "3.9",
    rateCount: 11,
    difficulty: "intermediate",
    author: "Demott Burl",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["Backend"],
    link: "./page/categories/ux-design"
  },

  {
    id: 10,
    featured: false,
    thumbnail: cardThumb2,
    title: "data analyst",
    rating: "3.4",
    rateCount: 34,
    difficulty: "beginner",
    author: "Ninette Brushfield",
    timeEstimate: "4 months at 5-10 hours a week",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, eros ac molestie mattis, eros nunc lacinia velit, eget euismod.",
    tags: ["IT", "Software"],
    link: "./page/categories/data-analyst"
  },
];

export default DATA;
