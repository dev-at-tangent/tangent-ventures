import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import TopicSelector from "./TopicSelector";
import LoadingSpinner from "../assets/LoadingSpinner.png";

export default function ContactForm() {
  const topics = [
    "STARTING A PROJECT",
    "APPLYING FOR A POSITION",
    "SOMETHING ELSE",
  ];

  const [topic, setTopic] = useState("STARTING A PROJECT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [twitterError, setTwitterError] = useState(false);
  const [telegramError, setTelegramError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const submitFormHandler = async () => {
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!twitter) {
      setTwitterError(true);
    }
    if (!telegram) {
      setTelegramError(true);
    }
    if (!message) {
      setMessageError(true);
    }

    if (!name || !email || !twitter || !telegram || !message) {
      return;
    }

    setLoading(true);
    const data = {
      topic,
      name,
      email,
      company,
      twitter,
      telegram,
      message,
    };

    const endpoint = import.meta.env.PUBLIC_GSHEETs_ENDPOINT;

    await fetch(endpoint, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    setSubmitted(true);
    setName("");
    setEmail("");
    setCompany("");
    setTwitter("");
    setTelegram("");
    setMessage("");
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value) {
      setNameError(false);
    }
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError(false);
    }
  };

  const twitterChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
    if (e.target.value) {
      setTwitterError(false);
    }
  };

  const telegramChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(e.target.value);
    if (e.target.value) {
      setTelegramError(false);
    }
  };

  const messageChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setMessageError(false);
    }
  };

  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className="flex flex-col items-center mt-12 lg:mt-0 lg:items-start">
      I'm interested in...
      <div className="flex flex-col gap-y-8">
        <TopicSelector
          topics={topics}
          selected={topic}
          setSelected={setTopic}
        />
        <input
          placeholder="Name*"
          value={name}
          onChange={nameChangeHandler}
          className={`bg-transparent py-4 border-b placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq ${
            nameError ? "border-error" : "border-grey-60"
          }`}
        />
        {nameError && (
          <div className="text-error text-sm -mt-6">
            This field is required.
          </div>
        )}
        <input
          placeholder="Email*"
          value={email}
          onChange={emailChangeHandler}
          className={`bg-transparent py-4 border-b placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq ${
            emailError ? "border-error" : "border-grey-60"
          }`}
        />
        {emailError && (
          <div className="text-error text-sm -mt-6">
            This field is required.
          </div>
        )}
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-transparent py-4 border-b border-grey-60 placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq"
        />
        <div className="flex gap-x-8">
          <div className="w-1/2">
            <input
              placeholder="Twitter Handle*"
              value={twitter}
              onChange={twitterChangeHandler}
              className={`bg-transparent py-4 w-full border-b placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq ${
                twitterError ? "border-error" : "border-grey-60"
              }`}
            />
            {twitterError && (
              <div className="text-error text-sm mt-2">
                This field is required.
              </div>
            )}
          </div>
          <div className="w-1/2">
            <input
              placeholder="Telegram*"
              value={telegram}
              onChange={telegramChangeHandler}
              className={`bg-transparent py-4 w-full border-b placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq ${
                telegramError ? "border-error" : "border-grey-60"
              }`}
            />
            {telegramError && (
              <div className="text-error text-sm mt-2">
                This field is required.
              </div>
            )}
          </div>
        </div>
        <textarea
          placeholder="Message*"
          value={message}
          onChange={messageChangeHandler}
          className={`bg-transparent py-4 w-full h-32 border-b placeholder-grey-80 focus:outline-none focus:border-b focus:border-turq resize-none ${
            messageError ? "border-error" : "border-grey-60"
          }`}
        />
        {messageError && (
          <div className="text-error text-sm -mt-6">
            This field is required.
          </div>
        )}

        <button
          onClick={submitFormHandler}
          disabled={loading || submitted}
          className={`group rounded-full w-full sm:w-2/5 h-12 flex justify-center items-center text-sm font-medium self-end ${
            loading || submitted ? "bg-white" : "bg-turq"
          } ${!loading && !submitted && "hover:bg-black"}`}
        >
          {loading ? (
            <div className="flex items-center gap-3">
              SUBMITTING
              <img
                src={LoadingSpinner.src}
                alt="loading spinner"
                className="w-6 animate-spin"
              />
            </div>
          ) : submitted ? (
            "SUBMITTED"
          ) : (
            <div className="relative overflow-hidden">
              <span className="inline-block mx-6 translate-y-8 text-white transition-all group-hover:translate-y-0">
                SUBMIT
              </span>
              <span className="absolute left-0 mx-6 inline-block transition-all group-hover:-translate-y-8">
                SUBMIT
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
