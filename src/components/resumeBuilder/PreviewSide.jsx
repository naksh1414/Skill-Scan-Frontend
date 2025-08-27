import Template1 from "../resumeTemplates/template_1/Template1";
import Template2 from "../resumeTemplates/template_2/Template2";
import Template3 from "../resumeTemplates/template_3/Template3";
import Template4 from "../resumeTemplates/template_4/Template4";
import Template5 from "../resumeTemplates/template_5/Template5";
import { useResume } from "../../context/useResume";
import Template6 from "../resumeTemplates/template_6/Template6";
import Template7 from "../resumeTemplates/template_7/Template7";
import Template8 from "../resumeTemplates/template_8/Template8";
function PreviewSide() {
  const { state } = useResume();
  return (
    <div className="w-full">
      {state.template == 1 && <Template1 />}
      {state.template == 2 && <Template2 />}
      {state.template == 3 && <Template3 />}
      {state.template == 4 && <Template4 />}
      {state.template == 5 && <Template5 />}
      {state.template == 6 && <Template6 />}
      {state.template == 7 && <Template7 />}
      {state.template == 8 && <Template8 />}
    </div>
  );
}

export default PreviewSide;
