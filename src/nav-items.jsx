import Index from "./pages/Index.jsx";
import Quotes from "./pages/Quotes.jsx";
import QuoteDetail from "./pages/QuoteDetail.jsx";
import SolarSystem from "./pages/SolarSystem.jsx";
import { BookOpen, Sun, Trello } from "lucide-react";
import Kanban from "./pages/Kanban.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    page: <Index />,
  },
  {
    title: "Quotes",
    to: "/quotes",
    page: <Quotes />,
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Solar System",
    to: "/solar-system",
    page: <SolarSystem />,
    icon: <Sun className="h-4 w-4" />,
  },
  {
    title: "Kanban",
    to: "/kanban",
    page: <Kanban />,
    icon: <Trello className="h-4 w-4" />,
  },
];

export const additionalRoutes = [
  {
    to: "/quotes/:id",
    page: <QuoteDetail />,
  },
];
