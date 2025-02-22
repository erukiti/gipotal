import { VFC } from "react";
import { Distribution } from "@/logics/distributions";
import { DistributionCell } from "./cell";

type Props = {
  distributions: Distribution[];
};

/** 頒布物情報をコンパクトにまとめた一覧を並べて表示する */
export const DistributionView: VFC<Props> = ({ distributions }) => {
  return (
    <ul className="flex flex-wrap justify-between">
      {distributions.map((dist, index) => (
        <li className="mb-8" key={index}>
          <DistributionCell {...dist} />
        </li>
      ))}
    </ul>
  );
};
