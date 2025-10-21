const Footer = () => {
  return (
    <div className="bg-zinc-50">
      <footer className="rounded-lg shadow m-4 bg-blue-950">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="text-center text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://davtek.io">Davtek</a> All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
