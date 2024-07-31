import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-maroonsecondary w-full">
      <div className="md:grid grid-cols-2 px-6 py-8 md:mx-4">
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="my-2">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-maroon">
              YOUR GATEWAY TO EXCITING AUCTIONS
            </h1>
          </div>
          <div className="my-2">
            <p className="text-muted-foreground">
              Discover a world of thrilling auctions and exclusive deals. Join us for an unforgettable experience.
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start my-4">
            <div className="rounded-full bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">23</h5>
              <p className="text-center text-sm mb-1">Hours</p>
            </div>
            <div className="rounded-full bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">05</h5>
              <p className="text-center text-sm mb-1">Days</p>
            </div>
            <div className="rounded-full bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">59</h5>
              <p className="text-center text-sm mb-1">Minutes</p>
            </div>
            <div className="rounded-full bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">35</h5>
              <p className="text-center text-sm mb-1">Seconds</p>
            </div>
          </div>

          <div className="my-2">
            <Button className="bg-maroon text-white w-20">
              <span>Explore</span>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="mx-2 md:mx-4 rounded-lg overflow-hidden">
            <Image src="/Xbox-Series-X-and-Playstation-5-ps5.jpg" alt="hero" width={500} height={600} className="" />
          </div>
        </div>
      </div>

      {/* Section for Auction Cards */}
      <div className="px-6 py-8 md:mx-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">Current Auctions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: '/Apple-Macbook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.og.jpg', name: 'MacBook Pro 2021', bids: 10, seller: 'John Doe', price: 1200, timeLeft: '3h 20m 15s' },
            { image: '/Apple-iPhone-15-Pro-lineup-Action-button-230912.jpg.large_2x.jpg', name: 'iPhone 13 Pro Max', bids: 20, seller: 'Jane Smith', price: 950, timeLeft: '2h 45m 10s' },
            { image: '/ca-feature-absolute-one--above-all-394943630.jpg', name: 'Samsung QLED TV', bids: 30, seller: 'Bob Johnson', price: 800, timeLeft: '5h 10m 5s' },
            { image: '/Apple-Watch-S9-hero-230912.jpg.og.jpg', name: 'Apple Watch Series 7', bids: 15, seller: 'Alice Brown', price: 450, timeLeft: '1h 50m 25s' },
            { image: '/hq720.jpg', name: 'Sony WH-1000XM4', bids: 25, seller: 'Chris Green', price: 300, timeLeft: '4h 15m 30s' },
            { image: '/050jHg3IDOWs6o2k2jz1D8n-1.jpg', name: 'Canon EOS R5', bids: 35, seller: 'Dana White', price: 2000, timeLeft: '6h 30m 45s' },
            { image: '/Xbox-Series-X-and-Playstation-5-ps5.jpg', name: 'PlayStation 5', bids: 40, seller: 'Eve Black', price: 500, timeLeft: '2h 5m 55s' },
            { image: '/JBL-Xtreme3-Black-01.jpg', name: 'JBL Bluetooth Speaker', bids: 18, seller: 'Frank Blue', price: 150, timeLeft: '3h 40m 35s' },
            { image: '/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg', name: 'iPad Pro 2021', bids: 22, seller: 'Grace Silver', price: 850, timeLeft: '4h 55m 20s' }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <Image src={product.image} alt={product.name} width={500} height={300} className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 transition duration-500 hover:text-maroon">Number of bids left: {product.bids}</p>
                <p className="text-sm text-gray-600 transition duration-500 hover:text-maroon">Seller: {product.seller}</p>
                <p className="text-sm text-gray-600 transition duration-500 hover:text-maroon">Current bid: ${product.price}</p>
                <p className="text-sm text-gray-600 transition duration-500 hover:text-maroon">Time left: {product.timeLeft}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Browse by Categories */}
      <div className="px-6 py-8 md:mx-4">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">Browse by Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { image: '/electronic-cpu-chipset-1ovz9er6jk6otp61.jpg', name: 'Electronics' },
            { image: '/pexels-jmendezrf-1536619.jpg', name: 'Fashion' },
            { image: '/images.jpeg', name: 'Home & Garden' },
            { image: '/sport-equipment-2-22802518.jpg', name: 'Sports' },
            { image: '/vr.jpg', name: 'Toys' },
            { image: '/images/category-motors.jpg', name: 'Motors' }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <Image src={category.image} alt={category.name} width={200} height={150} className="w-full" />
              <div className="p-2 text-center">
                <h3 className="text-lg font-semibold transition duration-500 hover:text-maroon">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section for Newsletter Subscription */}
      <div className="px-6 py-8 md:mx-4 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4 text-center">Stay Updated</h2>
        <p className="text-center text-gray-600 mb-4">Subscribe to our newsletter for the latest updates on auctions and exclusive deals!</p>
        <div className="flex justify-center">
          <input type="email" className="border border-gray-300 rounded-l-lg p-2 w-64" placeholder="Enter your email" />
          <button className="bg-maroon text-white px-4 rounded-r-lg">Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-maroon text-white px-6 py-8 md:mx-4">
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
    </div>
  );
}
