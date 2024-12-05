import { TabsContent } from "@radix-ui/react-tabs";
import { subs } from "./subs";
import { SubsItem } from "./SubsItem";

export const SubsItemsList = ({ isMonth }: any) => {
  return (
    <>
      <TabsContent value={isMonth}>
        <ul className="flex flex-row gap-10 justify-center">
          {subs.map((item, index: number) => (
            <SubsItem
              key={index}
              type={isMonth == "month" ? "month" : "year"}
              description={item.description}
              price={isMonth == "month" ? item.month : item.year}
              plan={item.type}
            />
          ))}
        </ul>
      </TabsContent>
    </>
  );
};
