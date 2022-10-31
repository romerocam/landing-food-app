import IgImg3 from "../public/assets/tato-12.jpg";
import IgImg4 from "../public/assets/tato-13.jpg";
import IgImg5 from "../public/assets/tato-14.jpg";
import IgImg6 from "../public/assets/tato-15.jpg";

import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Sobre Nosotros</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://static.wixstatic.com/media/223d16_e87e23a6e6864329a1fbeb4b47d6a7d2~mv2_d_6016_4016_s_4_2.jpg/v1/crop/x_0,y_302,w_6016,h_3411/fill/w_962,h_542,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/_DSC1131.jpg"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1649244451448-797144294226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={IgImg3}
            alt=""
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={IgImg4}
            alt=""
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={IgImg5} alt=""
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
