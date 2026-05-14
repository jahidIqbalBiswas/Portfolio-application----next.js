import SectionHeading from "@/components/helpers/SectionHeading";
import { userReviewData } from "@/data/data";
import React from "react";
import Slides from "./Slides";

const Testimonial = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          firstHeading="Clients"
          lastHeading="Review"
          subHeading="Checkout our client reviews"
        />

        <div>
          <Slides />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
