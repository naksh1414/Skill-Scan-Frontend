import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Send } from "lucide-react";
import "./style.css";
import { useState } from "react";
function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row justify-around items-center px-10 md:px-24 py-8"
      id="contact-form"
    >
      <div className="w-full md:w-1/2 overflow-hidden">
        <div id="jj" className="w-[140%]">
          <DotLottieReact
            src={
              "https://lottie.host/6e9ea429-1e09-4ebe-a914-cc6c0d60bdbd/nPsTKfBbBp.lottie"
            }
            loop
            autoplay
            className="md:w-full z-10"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:p-10 md:pr-20">
        <h4 className=" text-[#2A8E9E] font-bold md:text-lg md:text-left">
          QUERY FORM
        </h4>
        <h3 className=" text-[#1D1E20] dark:text-white/90 text-3xl md:text-4xl lg:text-5xl">
          Have any Queries?
        </h3>
        <p className=" text-[#023247]/70 dark:text-white/80 md:w-[60%] text-center md:text-right mt-3">
          Feel free to reach out, we&apos;re here to help!
        </p>
        <input
          type="email"
          placeholder="E-mail"
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-5 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
        />
        <input
          type="text"
          placeholder="Query"
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-5 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
        />
        <textarea
          name="description"
          id=""
          placeholder="Description..."
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-3 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
          rows={4}
        ></textarea>
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
          className="bg-[#2A8E9E] hover:bg-[#1f6d7a]  rounded-full flex justify-center items-center mt-5 self-end cursor-pointer gap-3 text-white/90 py-2 px-4 disabled:cursor-not-allowed disabled:bg-[#1f6d7a]/80"
          disabled={loading}
        >
          <Send className="w-5 h-5 text-white/90" /> Send
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
