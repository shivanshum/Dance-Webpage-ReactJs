import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ml-10 ${styles.paddingY}`}>
      <div className={`flex-1 flex ${styles.flexCenter} mr-20 md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] py-0" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`flex-1 ${styles.flexStart} mb-20 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">FIREFLIES DANCE ACADEMY</span>{" "}
            <h3 className="text-[55px]">  </h3>
            <span className="text-gradient"></span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          "Be fearless in the pursuit of what sets your soul on fire ,To dance is to be out of yourself Larger, more beautiful, more powerful… This is power, it is glory on earth and it is yours for the taking"
        </p>
      </div>

    </section>
  );
};

export default Hero;