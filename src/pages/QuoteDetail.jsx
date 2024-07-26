import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const quotesData = [
  { id: 1, text: "Mars is there, waiting to be reached.", author: "Buzz Aldrin", year: 2013 },
  { id: 2, text: "The first human beings to land on Mars should not come back to Earth.", author: "Buzz Aldrin", year: 2013 },
  { id: 3, text: "We are all explorers on Mars, in a sense.", author: "Andy Weir", year: 2011 },
  { id: 4, text: "Mars has been flown by, orbited, smacked into, radar examined, and rocketed onto, as well as bounced upon, rolled over, shoveled, drilled into, baked, and even blasted.", author: "Buzz Aldrin", year: 2013 },
  { id: 5, text: "By going to Mars one day, we will make things better for us here on Earth.", author: "Buzz Aldrin", year: 2013 },
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
