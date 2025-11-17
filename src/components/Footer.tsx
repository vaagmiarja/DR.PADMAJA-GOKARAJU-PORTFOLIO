import { Mail, Linkedin, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-steel-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Padmaja Gokaraju</h3>
            <p className="text-sm text-gray-300">
              Vice President – Engineering & R&D
              <br />
              Kirby Building Systems & Structures India Pvt. Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/research" className="hover:text-accent transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:padmaja@kirbyindia.com"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Building2 className="h-4 w-4" />
                <span>Kirby Building Systems</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Dr. Padmaja Gokaraju. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
