import { useResume } from "../../../../context/useResume";
function Honors() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Honors</h2>
      <hr className="mb-2" />
      {state.honors.map((honor, index) => (
        <ul key={index} className="flex gap-1">
          <li className="text-sm">• {honor.text}</li>
        </ul>
      ))}
    </div>
  );
}

export default Honors;
