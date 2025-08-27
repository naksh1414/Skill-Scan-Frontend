import { useResume } from "../../../../context/useResume";
function PersonalInfo() {
  const { state } = useResume();
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* <h2>Personal Info</h2> */}
      <p className="text-4xl font-semibold">{state.personalInfo.name}</p>
      <div className="flex">
        <p>{state.personalInfo?.email}</p>
        {state.personalInfo.phone && <span className="mx-1">|</span>}
        <p>{state.personalInfo.phone}</p>
        {state.personalInfo.linkedIn && <span className="mx-1">|</span>}
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
  );
}

export default PersonalInfo;
