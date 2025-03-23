import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container p-12">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="w-full">
                <Image
                  src="/images/banner-1.jpg"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="banner image"
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/banner-2.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="banner image"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/banner-3.jpg"
                width={100}
                height={100}
                layout="responsive"
                alt="banner image"
                className="rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
