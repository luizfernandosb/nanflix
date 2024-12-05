import { Button } from "../ui/button";

type ItemProps = {
  plan: string;
  description: string;
  price: string;
  type: string;
};

export const SubsItem = (props: ItemProps) => {
  return (
    <div className="bg-stone-800 w-1/5 p-5 flex flex-col gap-4 rounded-lg border-[1px] border-stone-100">
      <li className="flex flex-col gap-4">
        <h3 className="font-bold">{props.plan}</h3>
        <p>{props.description}</p>
        <span>
          {props.price}/{props.type}
        </span>
      </li>
      <div className="flex gap-2">
        <Button>Start Free Trial</Button>
        <Button variant="destructive">Choose Plan</Button>
      </div>
    </div>
  );
};
