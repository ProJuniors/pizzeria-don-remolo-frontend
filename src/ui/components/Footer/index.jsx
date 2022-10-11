import { BsFacebook, BsInstagram } from 'react-icons/bs';
import logo from '../../../assets/logos/logo.png';
import SectionFooter from './components/SectionFooter';

import sectionData from './utils/sectionData';

export default function Footer() {
  return (
    <div className="bg-secondary text-white grid grid-cols-3 h-[362px]">
      <section className="mt-[72px] ml-[67px] w-[206px]">
        <div className="relative">
          <h3 className="font-IBM-PLEX-SANS-DEVANAGARI text-[40px] font-semibold leading-[61.2px] w-full">
            DON REMOLO
          </h3>
          <img className="absolute top-[-40px] right-[-20px] w-[138.03px]" src={logo} alt="" />
        </div>
        <span className="font-IBM-PLEX-SANS-DEVANAGARI font-light text-[25px] leading-[38.25px] ml-[26px]">
          Pizzería
        </span>
      </section>
      <section className="grid grid-cols-3 mt-[47px] min-w-[600px]">
        {sectionData.map((section, index) => {
          const key = `sectionData-${index}`;
          return <SectionFooter key={key} section={section} />;
        })}
        <section className="col-span-3">
          <p className="w-full font-Nunito text-[20px] font-normal text-center">
            2022 Pizzería Don Remolo. Diseño y desarrollo por Projuniors
          </p>
          <div className="flex justify-center gap-[22.68px] mt-[27px]">
            <BsFacebook size={40} />
            <BsInstagram size={40} />
          </div>
        </section>
      </section>
    </div>
  );
}
