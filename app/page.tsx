import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-maroonsecondary w-full">
      <div className="md:grid grid-cols-2 px-6 py-8 md:mx-4">
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="my-2">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-maroon">YOUR GATEWAY TO EXCITING AUCTIONS</h1>
          </div>
          <div className="my-2">
            <p className="text-muted-foreground">Discover a world of thrilling auctions and exclusive deals. Join us for an unforgettable experience.</p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start my-4">
            <div className="rounded-full bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">23+</h5>
              <p className="text-center text-sm mb-1">Auctions</p>
            </div>
            <div className="rounded-full   bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">23+</h5>
              <p className="text-center text-sm mb-1">Auctions</p>
            </div>
            <div className="rounded-full   bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">23+</h5>
              <p className="text-center text-sm mb-1">Auctions</p>
            </div>
            <div className="rounded-full   bg-[#212427] md:py-1 flex flex-col text-white">
              <h5 className="text-sm text-center">23+</h5>
              <p className="text-center text-sm mb-1">Auctions</p>
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
            <Image src="/vr.jpg" alt="hero" width={200} height={300} className="" />

          </div>
        </div>
      </div>
    </div>
  );
}
