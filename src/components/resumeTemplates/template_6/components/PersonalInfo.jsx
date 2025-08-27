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
      <p className="text-4xl">{state.personalInfo.name}</p>
      <p className="text-sm">{state.personalInfo?.summary}</p>
      <hr className="h-0  border-black" />
      <div className="flex flex-wrap justify-between text-sm px-5">
        <p className="flex items-center justify-center gap-1">
          <Mail className="text-blue-600" />

          <span>{state.personalInfo?.email}</span>
        </p>
        <p className="flex items-center gap-1">
          <MapPin className="text-blue-600" />
          {state.personalInfo.location}
        </p>

        <p className="flex items-center gap-1">
          <Phone className="text-blue-600" />
          {state.personalInfo.phone}
        </p>

        <p className="flex items-center gap-1">
          <Linkedin className="text-blue-600" />
          {state.personalInfo.linkedIn && (
            <a href={state.personalInfo.linkedIn}>LinkedIn</a>
          )}
        </p>
        <p className="flex items-center gap-1">
          <Github className="text-blue-600" />
          {state.personalInfo.gitHub && (
            <a href={state.personalInfo.gitHub}>GitHub</a>
          )}
        </p>

        <p className="flex items-center gap-1">
          <Globe className="text-blue-600" />
          {state.personalInfo.portfolio && (
            <a href={state.personalInfo.portfolio}>Portfolio</a>
          )}
        </p>
      </div>
      <hr className="h-0 border-black" />
    </div>
  );
}

export default PersonalInfo;
