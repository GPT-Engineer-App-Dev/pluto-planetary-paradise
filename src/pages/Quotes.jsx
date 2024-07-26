import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quotesData = [
  { id: 1, text: "Mars is there, waiting to be reached.", author: "Buzz Aldrin" },
  { id: 2, text: "The first human beings to land on Mars should not come back to Earth.", author: "Buzz Aldrin" },
  { id: 3, text: "We are all explorers on Mars, in a sense.", author: "Andy Weir" },
  { id: 4, text: "Mars has been flown by, orbited, smacked into, radar examined, and rocketed onto, as well as bounced upon, rolled over, shoveled, drilled into, baked, and even blasted.", author: "Buzz Aldrin" },
  { id: 5, text: "By going to Mars one day, we will make things better for us here on Earth.", author: "Buzz Aldrin" },
];

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuotes = quotesData.filter(
    (quote) =>
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inspiring Quotes</h1>
      <Input
        type="text"
        placeholder="Search quotes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6"
      />
      <div className="grid gap-6">
        {filteredQuotes.map((quote) => (
          <div key={quote.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-2">"{quote.text}"</p>
            <p className="text-gray-600">- {quote.author}</p>
            <Link to={`/quotes/${quote.id}`}>
              <Button variant="link" className="mt-2">
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
