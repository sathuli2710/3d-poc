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
            className="cursor-pointer xl:w-[500px] xl:h-[500px] l:w-[400px] l:h-[400px] m:w-[300px] m:h-[300px] s:w-[100px] s:h-[100px] l:text-[45px] xl:text-[50px] xl:hover:text-[40px] l:hover:text-[60px] m:text-[30px] m:hover:text-[45px] s:text-[10px] s:hover:text-[15px] border border-pink-200 rounded-lg shadow-lg shadow-pink-100 grid place-items-center font-extrabold uppercase routeBox transition-colors ease-in-out duration-700"
            onClick={() => window.open(item.route, "_self")}
          >
            {item.text}
          </section>
        ))}
      </>
    </main>
  );
};

export default Intro;
