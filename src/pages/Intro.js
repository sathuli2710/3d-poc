import React from "react";

const Intro = () => {
  const routes = [
    { text: "Diorama", route: "/diorama" },
    { text: "3D Show", route: "/3d-show" },
  ];
  return (
    <main className="flex justify-center items-center gap-10 w-full h-full bg-black opacity-90 p-12 text-white">
      <>
        {routes.map((item, idx) => (
          <section
            key={idx}
            className="cursor-pointer xl:w-[31.25rem] xl:h-[31.25rem] l:w-[25rem] l:h-[25rem] m:w-[18.75rem] m:h-[18.75rem] s:w-[6.25rem] s:h-[6.25rem] l:text-[2.8125rem] xl:text-[3.125rem] xl:hover:text-[2.5rem] l:hover:text-[3.75rem] m:text-[1.875rem] m:hover:text-[2.8125rem] s:text-[0.625rem] s:hover:text-[0.9375rem] border border-pink-200 rounded-lg shadow-lg shadow-pink-100 grid place-items-center font-extrabold uppercase routeBox transition-colors ease-in-out duration-700"
            onClick={() => window.open(item.route, "_self")}
          >
            {item.text}
          </section>
        ))}
        <div className="fixed bottom-4 text-stone-400 text-[1.2rem]">
          Created by Abul. Click
          <a
            href="https://github.com/sathuli2710/3d-poc"
            target="_blank"
            className="text-gradient"
          >
            here
          </a>
          to get the code.
        </div>
      </>
    </main>
  );
};

export default Intro;
