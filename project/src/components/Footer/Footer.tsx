import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer
      className=""
      style={{
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg2-ft.webp?alt=media&token=642027db-1f14-423b-97ba-26790d03bdbd")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

      <FooterNewsletter />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FooterLinks />
        <FooterContact />
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-teal-800 text-sm">
          <p className="text-teal-100">
            © 2025 Loraic transportation & logistics / All rights reserved
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-teal-100 hover:text-orange-500 transition-colors"
            >
              Privacy
            </a>
            <span className="text-teal-700">|</span>
            <a
              href="#"
              className="text-teal-100 hover:text-orange-500 transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-teal-700">|</span>
            <a
              href="#"
              className="text-teal-100 hover:text-orange-500 transition-colors"
            >
              Site map
            </a>
            <span className="text-teal-700">|</span>
            <a
              href="#"
              className="text-teal-100 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
