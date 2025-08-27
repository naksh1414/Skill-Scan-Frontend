import { useResume } from "../../../../context/useResume";
function PersonalInfo() {
  const { state } = useResume();
  return (
    <div className="flex flex-col justify-center gap-2">
      {/* <h2>Personal Info</h2> */}
      <p className="text-4xl font-semibold text-center">
        {state.personalInfo.name}
      </p>
      <hr className="" />
      <div className="flex justify-around">
        <p>{state.personalInfo?.email}</p>
        <p>{state.personalInfo.location}</p>

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
      <hr className="" />
      <p className="text-sm text-center">{state.personalInfo?.summary}</p>
    </div>
  );
}

export default PersonalInfo;
