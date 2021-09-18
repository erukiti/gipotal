import { Event } from "@/logics/events";
import { formatDate } from "@/logics/utils";
type Props = {
  event: Event;
};

export const ItemBanner: React.FC<Props> = ({ event }) => {
  const { name, startAt, endAt, booth } = event;
  return (
    <div className="flex rounded-md mb-2 bg-event-banner text-white">
      <div className="p-3 flex-grow">
        <div className="text-sm opacity-80 font-semibold">
          {formatDate(startAt)} - {formatDate(endAt)}
        </div>
        <div className="text-xl font-semibold">{name}</div>
      </div>
      {booth && (
        <div className="bg-[#367B38] text-white w-[68px] rounded-r-md flex items-center justify-center">
          {booth}
        </div>
      )}
    </div>
  );
};
