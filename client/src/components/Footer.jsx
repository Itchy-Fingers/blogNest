const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:underline text-sm">About</a>
          <a href="/contact" className="hover:underline text-sm">Contact</a>
          <a href="/privacy" className="hover:underline text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;