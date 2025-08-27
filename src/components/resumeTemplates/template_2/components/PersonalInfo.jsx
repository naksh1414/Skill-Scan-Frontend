import { useResume } from "../../../../context/useResume";
function PersonalInfo() {
  const { state } = useResume();
  return (
    <div className="flex flex-col justify-center gap-2">
      {/* <h2>Personal Info</h2> */}
      <p className="text-4xl font-semibold">{state.personalInfo.name}</p>
      <div className="flex justify-between">
        <div>
          <p>{state.personalInfo?.email}</p>
          <p>{state.personalInfo.location}</p>
        </div>
        <div className="text-right">
          <p>{state.personalInfo.phone}</p>

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
      </div>
      <hr className="" />
      <p className="text-sm">{state.personalInfo?.summary}</p>
    </div>
  );
}

export default PersonalInfo;
