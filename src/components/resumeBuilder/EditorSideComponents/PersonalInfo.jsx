import { useState } from "react";
import { useResume } from "../../../context/useResume";
export default function PersonalInfo() {
  const { state, dispatch } = useResume();
  const [showFields, setShowFields] = useState(true); // Track visibility of fields

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <div className="space-y-4 w-full">

      {showFields && (
        <div className="space-y-3 mt-3 w-full">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={state.personalInfo.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={state.personalInfo.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={state.personalInfo.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
            />
          </div>
          {state.template !== 1 && (
            <div className="w-full">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-[#2A8E9E]"
              >
                Location
              </label>
              <input
                type="tel"
                name="location"
                value={state.personalInfo.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
              />
            </div>
          )}
          {state.template !== 1 && (
            <div className="w-full">
              <label
                htmlFor="summary"
                className="block text-sm font-medium text-[#2A8E9E]"
              >
                Summary
              </label>
              <textarea
                type="text"
                name="summary"
                value={state.personalInfo.summary}
                onChange={handleChange}
                placeholder="Summary"
                className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)] sbar"
                rows="4"
              />
            </div>
          )}

          <div className="w-full">
            <label
              htmlFor="linkedIn"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              LinkedIn URL
            </label>
            <input
              type="text"
              name="linkedIn"
              value={state.personalInfo.linkedIn}
              onChange={handleChange}
              placeholder="LinkedIn"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="gitHub"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              GitHub URL
            </label>
            <input
              type="text"
              name="gitHub"
              value={state.personalInfo.gitHub}
              onChange={handleChange}
              placeholder="GitHub"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="portfolio"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              Portfolio
            </label>
            <input
              type="text"
              name="portfolio"
              value={state.personalInfo.portfolio}
              onChange={handleChange}
              placeholder="Portfolio Link"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
