import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quotesData = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { id: 3, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { id: 4, text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { id: 5, text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
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
