import Index from "./pages/Index.jsx";
import Quotes from "./pages/Quotes.jsx";
import QuoteDetail from "./pages/QuoteDetail.jsx";
import { BookOpen } from "lucide-react";

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
];

export const additionalRoutes = [
  {
    to: "/quotes/:id",
    page: <QuoteDetail />,
  },
];
