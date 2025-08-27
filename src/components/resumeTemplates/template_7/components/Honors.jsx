import { useResume } from "../../../../context/useResume";
function Honors() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2
        className="text-lg font-bold text-center p-2"
        style={{ backgroundColor: "#b1d6f8ac" }}
      >
        Awards, Honors and Achievements
      </h2>
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
