import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./Community";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
    <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] mx-20`}>
        The Dance Academy, established since October 2014 aims to provide students with a professional dance curriculum exposing them to well structured training programmes in the various dance disciplines. Students are encouraged to develop their dance skills and performance qualities to the maximum.
        </p>
      </div>
      <h2 className={styles.heading2}>
        About Us<br className="sm:block hidden" />
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;