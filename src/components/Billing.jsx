import { apple, dance, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <video controls autoplay loop src={dance} alt="video" className="w-[483px] h-[565px] relative z-[5] rounded-[50px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Select your<br className="sm:block hidden" />Step-by-Step Learning for All Levels
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       whether you're just starting out or you've got some training under your belt - we got you covered.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> BRANDNEW - Start with our 10 day intro program </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>BEGINNER - Level up with new moves and routine </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>INTERMEDIATE - Learn more challenging skills</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ADVANCED - Train with the top choreographers in the game</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;