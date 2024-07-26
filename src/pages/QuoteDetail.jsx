import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const quotesData = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs", year: 2005 },
  { id: 2, text: "Life is what happens when you're busy making other plans.", author: "John Lennon", year: 1980 },
  { id: 3, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", year: 1963 },
  { id: 4, text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", year: 1955 },
  { id: 5, text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", year: 2000 },
];

const QuoteDetail = () => {
  const { id } = useParams();
  const quote = quotesData.find((q) => q.id === parseInt(id));

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/quotes">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quotes
        </Button>
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Quote Details</h1>
        <p className="text-xl mb-4">"{quote.text}"</p>
        <p className="text-gray-600 mb-2">- {quote.author}</p>
        <p className="text-gray-500">Year: {quote.year}</p>
      </div>
    </div>
  );
};

export default QuoteDetail;
