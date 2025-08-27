import { useResume } from "../../../../context/useResume";
function Honors() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg mb-2 font-medium">AWARDS AND HONORS</h2>
      <ul className="">
        {state.honors.map((honor, index) => (
          <li key={index} className="text-sm flex gap-1">
            <span>-</span>
            {honor.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Honors;
