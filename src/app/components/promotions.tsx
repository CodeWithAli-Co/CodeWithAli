
import Image from "next/image";
import Link from "next/link";

import { Fragment } from "react";

import { Card } from "@/components/Card";
import ImageCoat from "@/assetes/images/Coat.jpg";
import AdidasCap from "@/assetes/images/AdidasCap.jpg";
import YESKISShoes from "@/assetes/images/Shoes.jpg";


const testimonials = [
  {
    name: "THE NORTH FACE Men's Seasonal Mountain Jacket",
    text: "The original mountain jacket became iconic for a reason. It was developed in 1985 to offer mountaineers the same protection from extreme conditions as skiers.",
    Link: "https://www.amazon.co.uk/NORTH-FACE-Seasonal-Mountain-Jacket/dp/B0BCFT4VDZ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ykeNHXyVVjiIuMRRIlfUsg.XeDMgPx-tVaT4QpVYPEVnpHPIOoOhcuNEigqVJsWkmY&dib_tag=se&keywords=B0BCFT4VDZ&qid=1737818114&sr=8-1",
    avatar: ImageCoat,
  },
  {
    name: "Adidas Men's Superlite Hat",
    text: "adidas Men's Superlite Hat, athletic performance workout adjustable relaxed cap. The lightweight build is perforated to let air flow while keeping moisture to a minimum",
    Link: "https://www.amazon.com/adidas-Superlite-Athletic-Performance-Adjustable/dp/B0CHBLJ3ZH/ref=sr_1_16?crid=2KXNKW5QYPK4N&dib=eyJ2IjoiMSJ9.7dhP2512tsJJD1bOIQ5mOdYw3rIwNFwavKPVelmHVK2N6Jd677-b4g8RgG7Ivpgzeeeeds0ReV_fnUmsuhzAQrKgypo2gCNkcjZEJ4HEdxk6PZm4Mr50MlKBvxGdwhXSrFkV4QB4Ws7Up9UBzkCuUZhmO3F_aAO_u_X4SFHdKIueQ5BOs0RwqicFJHs1Y4IsvhPlg-9vFa6Hc_jj2nFduA2bi2SGfQRotUgE4j2IEUy_Zq9tV03xl0UoZnSeleJ67mLHnPPSVHNUDNEq-Ik5AjBxDrrn2Dqy_yrLI-GvmtO5AXnjI_r9xSUPHvrukaqYK-9INy4PWG_rC2NRm841--cd0dBgL9kUSELDUtVXM5pB_5tnli3KDhgN0Fg3PwPuFilRgtrLBwxZsMeJI-NAYblGTzyxPDYPfbPv5lKYs1XYEpUUFR-zaZK9PL9RlEFd.YEnPfWLBx5gTHqYkRs6i9yUpycwTm-cDNF54BaUDo0k&dib_tag=se&keywords=Nike+Hat&qid=1737834387&sprefix=nike+ha%2Caps%2C361&sr=8-16",
    avatar: AdidasCap,
  },
  {
    name: "YESKIS Boys Girls Light Up Shoes",
    text: "YESKIS Boys Girls Light Up Shoes with Switch 3 Lighting Modes Fizzzy Big Kids LED Running Tennis Sneakers for Toddler Little and Big Kid",
    Link: "https://www.amazon.com/YESKIS-Switch-Fizzzy-Running-Sneakers/dp/B0CN3NT41N/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.0fdeec36-c2ea-41a7-9d20-4f16362d64ff%3Aamzn1.sym.0fdeec36-c2ea-41a7-9d20-4f16362d64ff&crid=2KW5KH2CA57OV&cv_ct_cx=Nike+Shoes&keywords=Nike+Shoes&pd_rd_i=B0CN3NT41N&pd_rd_r=96933fba-4fc4-4a9b-9a81-e6e4000985fc&pd_rd_w=t5OJn&pd_rd_wg=uoqoa&pf_rd_p=0fdeec36-c2ea-41a7-9d20-4f16362d64ff&pf_rd_r=N3N4Q39MVN1NVE14QYJR&qid=1737834805&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=nike+shoes%2Caps%2C512&sr=1-3-ab5f1cb1-5dc1-4c6f-a5e4-7c74fcce2ac0-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1",
    avatar: YESKISShoes,
  },
];

export const PromotionsSection = () => {

  return( 
    <div className="">
       <span className="text-black bg-slate-300 ml-2 border- rounded-sm px-1 py-1">Sponsored 🛈</span>
    <div className="">
        <div className="flex overflow-x-clip mt-0.5 lg:mt-0.5 [mask-image:linear-gradient(to_right, transparent, black_10%, black_90% transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, testimonialIndex) => (
            <Fragment key={testimonialIndex}>
           {testimonials.map(testimonial => (
        <Card
        key={testimonial.name}
        className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
      >
        <div className="flex gap-6 items-start">
          {/* Left Side - Clickable Image */}
          <Link href={testimonial.Link || "#"}
           target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image src={testimonial.avatar} alt={testimonial.name}
              className="rounded-lg"
              width={100}
              height={150}
            />
          </Link>
          <div>
            {/* Name and Position */}
            <div className="font-semibold text-lg">{testimonial.name}</div>
            {/* Description */}
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">{testimonial.text}</p>
      
            {/* Link */}
            {testimonial.Link && (
              <Link
                href={testimonial.Link}
                target="_blank"
                className="mt-4 inline-block text-blue-500 hover:underline text-sm"
              >
                Buy Now
              </Link>
            )}
          </div>
        </div>
      </Card>
      
      ))} 
       </Fragment>
          ))}  
      </div>
    </div>
  </div>
  </div>
  )
};
