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
            className="cursor-pointer w-[500px] h-[500px] border border-pink-200 rounded-lg shadow-lg shadow-pink-100 grid place-items-center text-[40px] hover:text-[60px] font-extrabold uppercase routeBox transition-colors ease-in-out duration-700"
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
