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
    <div className="flex flex-col justify-center gap-2">
      <p className="text-4xl font-bold">{state.personalInfo.name}</p>
      <div className="flex flex-wrap gap-x-12 h-fit">
        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <Mail className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">{state.personalInfo?.email}</span>
        </div>

        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <MapPin className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">{state.personalInfo.location}</span>
        </div>

        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <Phone className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">{state.personalInfo.phone}</span>
        </div>

        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <Linkedin className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">
            {state.personalInfo.linkedIn && (
              <a href={state.personalInfo.linkedIn}>LinkedIn</a>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <Github className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">
            {state.personalInfo.gitHub && (
              <a href={state.personalInfo.gitHub}>GitHub</a>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1 h-full">
          <span className="flex items-center justify-center">
            <Globe className="text-blue-600 text-lg flex-shrink-0" />
          </span>
          <span className="inline-block">
            {state.personalInfo.portfolio && (
              <a href={state.personalInfo.portfolio}>Portfolio</a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
