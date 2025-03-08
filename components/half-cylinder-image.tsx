import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

const HalfCylinderImage = ({
  image,
  className,
  caption,
  absolute = false,
  imageClassName,
}: {
  image: string | StaticImport;
  className?: string;
  imageClassName?: string;
  caption: string;
  absolute?: boolean;
}) => {
  return (
    <div className={cn("w-fit relative", className, !absolute && "space-y-4")}>
      <Image className={cn(imageClassName)} src={image} alt="baby" />
      <p
        className={cn(
          "capitalize font-semibold text-[18px] -bottom-10 left-0",
          absolute && "absolute"
        )}
      >
        {caption}
      </p>
    </div>
  );
};

export default HalfCylinderImage;
