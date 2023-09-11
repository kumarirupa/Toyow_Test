import AboutCard from "../shared/AboutCard";
import styles from "../../styles/Homepage.module.css";
import Brand from "@component/shared/Brand";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col py-14 sm:py-16 md:py-32 lg:py-32 ">
        <h1
          className={`w-full text-2.75rem sm:text-3.25rem ${styles.heading} lg:text-6.5vw`}
        >
          Building Brands, One Success Story at a Time.
        </h1>

        <div className="text-xl w-12/12 md:w-9/12 lg:w-6/12 mt-4">
          Create a Brand That Resonates: We Can Help You Define and Communicate
          Your Unique Message.
        </div>

        <div className="flex flex-wrap gap-3 mt-6 lg:mt-12">
          <button className="rounded-full bg-gray-900 dark:text-gray-600 px-7 text-white dark:bg-white servic_btn hover:bg-btnHover">
            Our Services
          </button>
        </div>
      </div>
      {/* imported seperate brand logo component */}
      <Brand />
      {/* imported seperate About card component */}
      <AboutCard />
    </div>
  );
}
