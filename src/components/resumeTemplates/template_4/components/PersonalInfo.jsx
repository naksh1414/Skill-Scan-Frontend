import { useResume } from "../../../../context/useResume";
function PersonalInfo() {
  const { state } = useResume();
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex justify-around items-center bg-[#335777] text-white/90 py-5">
        <div>
          <p className="text-4xl font-semibold">{state.personalInfo.name}</p>
          <div className="flex">
            <p>
              {state.personalInfo.linkedIn && (
                <a href={state.personalInfo.linkedIn}>LinkedIn</a>
              )}
            </p>
            {state.personalInfo.gitHub && <span className="mx-1">|</span>}
            <p>
              {state.personalInfo.gitHub && (
                <a href={state.personalInfo.gitHub}>GitHub</a>
              )}
            </p>
            {state.personalInfo.portfolio && <span className="mx-1">|</span>}
            <p>
              {state.personalInfo.portfolio && (
                <a href={state.personalInfo.portfolio}>Portfolio</a>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p>
            <span className="font-medium">Phone Number</span>{" "}
            {state.personalInfo.phone}
          </p>
          <p>
            <span className="font-medium">Email</span>{" "}
            {state.personalInfo?.email}
          </p>
          <p>
            <span className="font-medium">Address</span>{" "}
            {state.personalInfo.location}
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm text-center">{state.personalInfo?.summary}</p>
    </div>
  );
}

export default PersonalInfo;
