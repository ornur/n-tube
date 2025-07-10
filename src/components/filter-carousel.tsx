"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect?: (value: string | null) => void;
  data?: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data
}: FilterCarouselProps) => {
  // const [api, setApi] = useState<CarouselApi>();

  // useEffect(() => {
  //   if (!api) return;

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])

  return (
    <div className="relative w-full">
      <Carousel
        // setApi={setApi}
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          <CarouselItem className="pl-3 basis-auto"
            onClick={() => onSelect?.(null)}
          >
            <Badge
              variant={!value ? "default" : "secondary"}
              className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
            >
              All
            </Badge>
          </CarouselItem>
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold" />
              </CarouselItem>
            )
            )}
          {!isLoading && data?.map((item) => (
            <CarouselItem key={item.value} className="pl-3 basis-auto" onClick={() => onSelect?.(item.value)}>
              <Badge
                variant={value === item.value ? "default" : "secondary"}
                className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                onClick={() => onSelect?.(item.value)}
              >
                {item.label}
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>
    </div>
  )
}