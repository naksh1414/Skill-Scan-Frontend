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
      {/* <h2>Personal Info</h2> */}
      <p className="text-4xl font-bold">{state.personalInfo.name}</p>
      <div className="flex flex-col">
        <div className="flex justify-between gap-x-4 gap-y-1">
          <p className="flex items-center gap-1 ">
            <Mail className="text-gray-400" />
            {state.personalInfo?.email}
          </p>
          {/* <span className="mx-1">|</span> */}
          <p className="flex items-center gap-1">
            <MapPin className="text-gray-400" />
            {state.personalInfo.location}
          </p>
          {/* <span className="mx-1">|</span> */}
          <p className="flex items-center gap-1">
            <Phone className="text-gray-400" />
            {state.personalInfo.phone}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center gap-1">
            <Linkedin className="text-gray-400" />
            {state.personalInfo.linkedIn && (
              <a href={state.personalInfo.linkedIn}>LinkedIn</a>
            )}
          </p>
          <p className="flex items-center gap-1">
            <Github className="text-gray-400" />
            {state.personalInfo.gitHub && (
              <a href={state.personalInfo.gitHub}>GitHub</a>
            )}
          </p>

          <p className="flex items-center gap-1">
            <Globe className="text-gray-400" />
            {state.personalInfo.portfolio && (
              <a href={state.personalInfo.portfolio}>Portfolio</a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
