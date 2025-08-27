import { useResume } from "../../../../context/useResume";
function Honors() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-md">ACHIEVEMENTS</h2>
      <hr className="my-2 h-0 border-white/50" />
      <ul className=" gap-1">
        {state.honors.map((honor, index) => (
          <li key={index} className="text-sm flex gap-1">
            <span>•</span> {honor.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Honors;
