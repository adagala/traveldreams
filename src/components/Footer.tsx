import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelDreams</h3>
            <p className="text-gray-400">
              Making your travel dreams come true since 2019.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#tours" className="text-gray-400 hover:text-white">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>4556 Peponi Road</p>
              <p>Kitisuru, Nairobi Kenya</p>
              <p>Phone: (254) 0737605955</p>
              <p>Email: info@traveldreams.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelDreams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
