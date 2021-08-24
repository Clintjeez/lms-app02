import dashboard_icon from "../../assets/dashboard_icon.svg";
import course_marketplace_icon from "../../assets/course_icon.svg";
import my_courses_icon from "../../assets/my_course_icon.svg";
import my_tasks_icon from "../../assets/task_icon.svg";
import grades_stats_icon from "../../assets/stats_icon.svg";
import forum_icon from "../../assets/forum_icon.svg";
import settings_icon from "../../assets/settings_icon.svg";

const menuItems = [
  {
    icon: dashboard_icon,
    text: "Dashboard",
    url: "",
    id: 1,
  },
  {
    icon: dashboard_icon,
    text: "Account",
    url: "account",
    id: 2,
  },
  {
    icon: course_marketplace_icon,
    text: "Course Marketplace",
    url: "courses",
    id: 3,
  },
  {
    icon: my_courses_icon,
    text: "My Courses",
    url: "my-courses",
    id: 4,
  },
  {
    icon: my_tasks_icon,
    text: "My Tasks",
    url: "my-tasks",
    id: 5,
  },
  {
    icon: grades_stats_icon,
    text: "Grades & Statistics",
    url: "grades",
    id: 6,
  },
  {
    icon: forum_icon,
    text: "Form",
    url: "forum",
    id: 7,
  },
  {
    icon: settings_icon,
    text: "Settings",
    url: "settings",
    id: 8,
  },
];

export default menuItems;
