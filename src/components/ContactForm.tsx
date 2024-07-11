import { useState } from "react";
import TopicSelector from "./TopicSelector";

export default function ContactForm() {
  const topics = [
    "STARTING A PROJECT",
    "APPLYING FOR A POSITION",
    "SOMETHING ELSE",
  ];

  const [topic, setTopic] = useState("STARTING A PROJECT");
  return (
    <div className="flex flex-col gap-y-8">
      <TopicSelector topics={topics} selected={topic} setSelected={setTopic} />
      <input
        placeholder="Name*"
        className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none"
      />
      <input
        placeholder="Email*"
        className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none"
      />
      <input
        placeholder="Company"
        className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none"
      />
      <div className="flex gap-x-8">
        <input
          placeholder="Twitter*"
          className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none w-1/2"
        />
        <input
          placeholder="Telegram*"
          className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none w-1/2"
        />
      </div>
      <textarea
        placeholder="Message*"
        className="bg-transparent placeholder-grey-80 border-b border-grey-60 h-48 resize-none focus:outline-none"
      />

      <button className="rounded-full bg-turq w-fit px-8 py-3 text-sm font-medium self-end">
        SUBMIT
      </button>
    </div>
  );
}
