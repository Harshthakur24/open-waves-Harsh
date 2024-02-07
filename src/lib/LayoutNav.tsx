import Image from "next/image";

const icons: { slink: string; image: string }[] = [
  {
    slink: "",
    image: "/instagram.png",
  },
  {
    slink: "",
    image: "/facebook.png",
  },
  {
    slink: "",
    image: "/linkedin.png",
  },
  {
    slink: "",
    image: "/twitter.png",
  },
];
const components: {
  title: string;
  href: string;
  description: string;
  image: string;
}[] = [
  {
    title: "E-commerce",
    href: "/docs/primitives/alert-dialog",
    image: "/portfolio-mega-menu-1.jpg",
    description: "we undertook a project to migrate their existing.",
  },
  {
    title: "App Development",
    href: "/docs/primitives/hover-card",
    image: "/portfolio-mega-menu-2.jpg",
    description: "The mobile application has significantly improved.",
  },
  {
    title: "SAAS Integration",
    href: "/docs/primitives/progress",
    image: "/portfolio-mega-menu-3.jpeg",
    description: "We partnered with DEF to upgrade their outdated IT.",
  },
  {
    title: "Virtual Reality",
    href: "/docs/primitives/scroll-area",
    image: "/portfolio-mega-menu-4.jpeg",
    description: "Enter into the virtual reality world for real experience.",
  },
];

export function LayoutNav() {
  return (
    <div className="absolute left-0 w-full h-100vh bg-blue-200 overflow-x-hidden ">
      <div className="">
        <div className="max-container flex ">
          <div className="flex-1 pt-10 pr-[95px]">
            <div className=" py-7 w-full items-center justify-between flex-col space-y-4">
              <div className="w-full grid grid-cols-2 gap-5 space-y-2 border-b-2  items-start pb-16 justify-between">

                {}
                {/* {service=== potifoli } */}

                {components.map((component) => (
                  <div
                    key={component.title}
                    className=" text-base font-normal flex gap-6 space-y-2 "
                  >
                    <div className="border-purple-100 max-w-56 w-full rounded-xl ">
                      <Image
                        src={component.image}
                        alt={component.title}
                        width={220}
                        height={100}
                      />
                    </div>
                    <div className="">
                      <h3>
                        <a href="">{component.title}</a>
                      </h3>
                      <p>{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="flex gap-6">
                {icons.map((icon) => (
                  <Image
                    key={icon.slink}
                    src={icon.image}
                    alt={icon.slink}
                    width={25}
                    height={50}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className=" bg-white relative py-12 pl-1">
            <div className="flex flex-col items-start">
              <Image
                src="/macbook.jpg"
                alt=""
                className="block border-4 border-white mb-7 max-w-full rounded-lg"
                width={300}
                height={300}
              />
              <h2 className=" mb-2 text-2xl font-medium">Solution in Mind</h2>
              <p className="text-base mb-4 font-normal">
                Download slack in your mobile for <br /> your daily usage.
              </p>
              <a className=" inline-bloc text-cyan-500 font-medium text-base border-b-2 border-cyan-400">
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
