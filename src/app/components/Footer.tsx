import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-50">
      <footer className="rounded-lg shadow m-4 bg-blue-950">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="text-center text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://davtek.io">Davtek</a> All Rights Reserved.
          </div>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
