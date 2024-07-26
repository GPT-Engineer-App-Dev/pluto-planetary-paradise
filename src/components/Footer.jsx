import { Package2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Package2 className="h-6 w-6 mr-2" />
            <span className="font-semibold">Acme Inc</span>
          </div>
          <nav className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
          </nav>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
