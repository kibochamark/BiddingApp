const Footer = () => {
  return (
    <footer className="bg-maroon text-white max-w-full px-6 py-8 md:mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">BidGizmo is your ultimate destination for bidding on the latest electronics and gadgets. Discover incredible deals on top tech brands and score amazing bargains through competitive auctions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="text-sm">
              <li>Email: support@bidgizmo.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Auction St, Bid City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:underline">Home</a></li>
              <li><a href="#" className="text-white hover:underline">Auctions</a></li>
              <li><a href="#" className="text-white hover:underline">Categories</a></li>
              <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="text-sm flex space-x-4">
              <li><a href="#" className="text-white hover:underline">Facebook</a></li>
              <li><a href="#" className="text-white hover:underline">Twitter</a></li>
              <li><a href="#" className="text-white hover:underline">Instagram</a></li>
              <li><a href="#" className="text-white hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          &copy; 2024 BidGizmo. All rights reserved.
        </div>
    </footer>
      )}
export default Footer