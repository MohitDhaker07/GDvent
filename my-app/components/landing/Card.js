import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import diverse from "../../public/img/landing/diverse.svg";
import collaborative from "../../public/img/landing/collaborative.svg";
import feedback from "../../public/img/landing/feedback.svg";
import events from "../../public/img/landing/events.svg";
import { cardAnimation } from "../Animations";

export default function Card() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      className="relative flex flex-col items-center gap-0 mt-20 mb-10
                      laptop:flex-row laptop:justify-between"
    >
      <div className="relative w-64 laptop:w-80">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          animate={controls}
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={diverse} alt="image" />

          <p className="large-bold-text mb-3">Diverse Community</p>
          <p className="small-text">
            The Google Developer Club is a community of developers, designers, and technology enthusiasts who come together to share their knowledge, collaborate on projects, and build their skills
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-8">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          animate={controls}
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={collaborative} alt="image" />
          <p className="large-bold-text text-[20px] mb-3">
            Collaborative Knowledge
          </p>
          <p className="small-text">
            The club provides a platform for members to engage in collaborative learning and knowledge sharing
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-7 ">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          animate={controls}
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={feedback} alt="image" />
          <p className="large-bold-text mb-3">Instant Feedback</p>
          <p className="small-text">
            Your code is tested as soon as you submit it, so you always know if
            you&apos;re on the right track.
          </p>
        </motion.div>
      </div>
      <div className="relative w-64 laptop:w-80 -mt-14">
        <motion.div
          whileHover={{ y: -5 }}
          initial="hidden"
          animate="show"
          animate={controls}
          variants={cardAnimation}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Image src={events} alt="image" />
          <p className="large-bold-text mb-3">Skill-Building Events</p>
          <p className="small-text">
            The club also hosts skill-building events, such as workshops, hackathons, and code sprints, that offer members opportunities to learn new technologies, programming languages, and frameworks
          </p>
        </motion.div>
      </div>
    </div>
  );
}
