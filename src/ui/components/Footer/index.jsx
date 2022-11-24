import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../assets/logos/logo.png';
import SectionFooter from './components/SectionFooter';

import sectionData from './utils/sectionData';

export default function Footer() {
  return (
    <div className="bg-secondary text-white text-center px-5 py-7">
      <div>
        <HashLink
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          to="/#"
        >
          <section className="cursor-pointer">
            <div className="flex items-center justify-center flex-col">
              <img className="w-28" src={logo} alt="Don remolo logo" />
              <h3 className="font-IBM-PLEX-SANS-DEVANAGARI text-[30px] font-semibold leading-[50px]">
                DON REMOLO
              </h3>
            </div>
            <span className="font-IBM-PLEX-SANS-DEVANAGARI font-light text-[25px] leading-[38.25px]">
              Pizzería
            </span>
          </section>
        </HashLink>
        <section className="md:grid mt-[47px] hidden">
          {sectionData.map((section, index) => {
            const key = `sectionData-${index}`;
            return <SectionFooter key={key} section={section} />;
          })}
        </section>
      </div>
      <section className="col-span-3 mt-[30px]">
        <p className="w-full font-Nunito text-[16px] font-normal text-center">
          2022 Pizzería Don Remolo. Diseño y desarrollo por ProJuniors.
        </p>
        <div className="flex justify-center gap-[22.68px] mt-[27px]">
          <BsFacebook size={40} />
          <BsInstagram size={40} />
        </div>
      </section>
    </div>
  );
}
