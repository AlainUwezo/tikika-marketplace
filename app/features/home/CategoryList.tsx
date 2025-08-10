"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const categories = [
  { name: "Électronique", image: "/images/promo-banner.png" },
  { name: "Livres", image: "/images/promo-banner.png" },
  { name: "Jeux", image: "/images/promo-banner.png" },
  { name: "Mode", image: "/images/promo-banner.png" },
  { name: "Ordinateurs", image: "/images/promo-banner.png" },
];

interface Props {
  classNames?: string;
}

const CategoryList: FunctionComponent<Props> = ({ classNames = "" }) => {
  const router = useRouter();

  const categoryHandler = () => {
    router.push("/search");
  };

  return (
    <section>
      <div
        className={` ${classNames}
          flex
          gap-4
          overflow-x-auto
          scrollbar-hide

          lg:flex-col
          lg:overflow-visible
          lg:max-h-[calc(100vh-4rem)] 
        `}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={categoryHandler}
            className="
              min-w-[100px]
              sm:min-w-[140px]
              flex-shrink-0
              overflow-hidden
              hover:scale-[1.03]
              transition-transform duration-300

              lg:min-w-full
              lg:h-[120px]
              lg:flex
              lg:items-center
              lg:gap-4
              lg:rounded-md
              lg:hover:bg-indigo-50
              lg:cursor-pointer
            "
          >
            <div className="relative w-full h-[100px] sm:h-[120px] lg:w-24 lg:h-24 flex-shrink-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="text-center lg:text-left py-2 text-sm font-medium text-foreground flex-1">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
