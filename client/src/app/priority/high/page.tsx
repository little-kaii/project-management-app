import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/lib/store/state/api";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;