// components/PersonalInfo.jsx
import { useResume } from "../../../../context/useResume";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { MapPin } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

function PersonalInfo() {
  const { state } = useResume();

  return (
    <div className="flex flex-row justify-between gap-2">
      <p className="text-4xl font-bold w-[30%]">{state.personalInfo.name}</p>
      <div className="flex flex-row gap-x-12 h-fit mr-12">
        <div className="flex gap-2 items-start flex-col">
          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <Mail className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">{state.personalInfo?.email}</span>
          </div>

          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <MapPin className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">{state.personalInfo.location}</span>
          </div>

          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <Phone className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">{state.personalInfo.phone}</span>
          </div>
        </div>
        <div className="flex gap-2 items-start flex-col">
          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <Linkedin className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">
              {state.personalInfo.linkedIn && (
                <a href={state.personalInfo.linkedIn}>LinkedIn</a>
              )}
            </span>
          </div>

          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <Github className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">
              {state.personalInfo.gitHub && (
                <a href={state.personalInfo.gitHub}>GitHub</a>
              )}
            </span>
          </div>

          <div className="flex items-center gap-1 h-full">
            <span className="flex items-center justify-center">
              <Globe className="text-black text-lg flex-shrink-0" />
            </span>
            <span className="inline-block">
              {state.personalInfo.portfolio && (
                <a href={state.personalInfo.portfolio}>Portfolio</a>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
