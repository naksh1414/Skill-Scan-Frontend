import { useResume } from "../../../../context/useResume";
function Honors() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2 className="text-lg font-bold text-[#335777] mb-2">
        AWARDS, HONORS AND ACHIEVEMENTS
      </h2>
      {state.honors.map((honor, index) => (
        <ul key={index} className="flex gap-1 pl-5">
          <li className="text-sm">• {honor.text}</li>
        </ul>
      ))}
    </div>
  );
}

export default Honors;
