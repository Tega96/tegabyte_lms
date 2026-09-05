import { featuresProps } from "./types"

export const navItems = [
    {name: "Home", href: '/'},
    {name: "Courses", href: '/courses'},
    {name: "Dashboard", href: '/dashboard'}
]

export const features: featuresProps[] = [
  {
    title: "Comprehensive courses",
    description: "Access a wide range of industry experts",
    icon: "📖"
  },
  { 
    title: "Interactive learing",
    description: "Enguage with interactive content, quizzes, and assignments to enhance your learning experience.",
    icon: "🎮"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your progress and achievments with detailed analytics and personalized dashboards.",
    icon: '📈'
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: "👥"
  }
]