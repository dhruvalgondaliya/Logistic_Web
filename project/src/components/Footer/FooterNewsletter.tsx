import { Globe } from "lucide-react";
import { Mail } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div
      className="bg-teal-900 px-7 py-2 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between bg-cover bg-center mb-4"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/bg-ft.webp?alt=media&token=2fa160c1-2710-408d-849a-8dac4e59a643')"
      }}
    >
      <div className="mb-6 md:mb-0 w-full md:w-auto">
        <Globe className="h-8 w-8 text-orange-500 mt-2" />

        <div>
          <h2 className="text-2xl font-bold text-white mt-2 mt-3">Newsletter</h2>
          <p className="text-teal-100 mt-2">
            Subscribe our newsletter to get our latest update & news
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-200 px-4 py-1 mt-6 rounded-lg mt-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent text-orange-500 placeholder-gray-500 focus:outline-none w-full"
          />
          <button
            className="py-1 px-2 rounded-md text-white bg-orange-500 transition-colors"
          >
            <Mail className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
