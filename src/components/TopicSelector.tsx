import React from "react";

export default function TopicSelector({
  topics,
  selected,
  setSelected,
}: {
  topics: string[];
  selected: string;
  setSelected: (topic: string) => void;
}) {
  return (
    <div className="flex flex-wrap w-full gap-4 mt-4 text-grey-90 font-medium ">
      {topics.map((topic) => (
        <div
          className={`inline-block outline outline-1  rounded-full py-3 px-6 cursor-pointer ${
            selected === topic && "bg-turq outline-none"
          } `}
          onClick={() => setSelected(topic)}
        >
          {topic}
        </div>
      ))}
    </div>
  );
}
