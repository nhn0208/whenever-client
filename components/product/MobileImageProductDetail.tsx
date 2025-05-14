import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

export default function ImageCarousel({ imageList } : { imageList : string[]} ) {
    return (
        <Carousel className="w-full mt-10 relative">
            <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10"><CarouselPrevious /></div>
            <CarouselContent>
                {imageList.map((img, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={img || '/assets/images/logo_mini.png'}
                            alt={`image-${index}`}
                            width={400}
                            height={600}
                            style={{ width: '100%', height: '100%' }}
                            className="object-fill object-center"
                            decoding="async"
                            data-nimg="1"
                            priority
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10"><CarouselNext /></div>
        </Carousel>
      )
}
