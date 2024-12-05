import { useState } from "react";
import { SubsItemsList } from "./SubsItemsList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SubscriptionSection = () => {
  const [isMonth, setIsMonth] = useState<"month" | "year">("month");

  return (
    <section className=" justify-center flex  flex-col gap-5 mt-10">
      <div className="flex gap-5 flex-col text-center items-center">
        <h2 className="text-3xl font-bold">
          Choose the plan that's right for you
        </h2>
        <p className="w-1/2">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>
      <div className="flex ">
        <Tabs defaulValue={isMonth}>
          <TabsList className="w-[200px] ml-[235px] mb-5">
            <TabsTrigger value="month" onClick={() => setIsMonth("month")}>
              Month
            </TabsTrigger>
            <TabsTrigger value="year" onClick={() => setIsMonth("year")}>
              Year
            </TabsTrigger>
          </TabsList>
          <SubsItemsList isMonth={isMonth} />
        </Tabs>
      </div>
    </section>
  );
};
