// import "jodit/es2015/jodit.min.css";
// import styles from "./jodit.module.css";
// import { useEffect, useRef } from "react";

// function ResumeBuilder({ value, onChange }) {
//   const editorContainerRef = useRef(null);
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const initEditor = async () => {
//       if (editorContainerRef.current) {
//         const { Jodit } = await import("jodit");
//         editorRef.current = Jodit.make(editorContainerRef.current, {
//           showCharsCounter: false,
//           showWordsCounter: false,
//           showXPathInStatusbar: false,
//           toolbarSticky: false,
//           direction: "ltr",
//           saveModeInStorage: true,
//           buttons: ["bold", "italic", "link", "ul", "ol", "undo", "redo"],
//           disablePlugins:
//             "add-new-line,print,preview,table,table-keyboard-navigation,select-cells,resize-cells,file,video,media,image,image-processor,image-properties,xpath,tab,stat,search,powered-by-jodit,mobile,justify,inline-popup,indent,iframe,fullsize",
//           useSearch: false,
//           askBeforePasteHTML: false,
//           askBeforePasteFromWord: false,
//           defaultActionOnPaste: "insert_only_text",
//           maxHeight: 200,
//         });

//         // Set the initial value
//         editorRef.current.value = value;

//         // Listen for changes
//         editorRef.current.events.on("change", () => {
//           const newValue = editorRef.current.value;
//           console.log("Editor Value Changed:", newValue); // Log the value
//         });
//       }
//     };

//     initEditor();

//     // Cleanup on unmount
//     return () => {
//       if (editorRef.current) {
//         editorRef.current.destruct();
//         editorRef.current = null;
//       }
//     };
//   }, [onChange]);

//   // Update the editor content if `value` changes
//   useEffect(() => {
//     if (editorRef.current && editorRef.current.value !== value) {
//       editorRef.current.value = value;
//     }
//   }, [value]);

//   return (
//     <div className={`${styles.editor_wrapper} mb-4`}>
//       <div
//         style={{
//           padding: "8px 16px 0px",
//         }}
//         className="text-resume-800 text-xs mb-1"
//       >
//         <span>Resume Builder</span>
//       </div>
//       <div
//         ref={editorContainerRef}
//         className={`min-h-[200px] min-w-full bg-[rgba(0,0,0,0.06)]`}
//       ></div>
//     </div>
//   );
// }

// export default ResumeBuilder;

import { Helmet } from "react-helmet-async";
import EditorSide from "../components/resumeBuilder/EditorSide";
import PreviewSide from "../components/resumeBuilder/PreviewSide";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ResumeSF from "./../components/StepsAndFeatures/ResumeSF";
export default function ResumeBuilder() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-[#f5f9f9] dark:bg-[#023247] mx-auto px-5 md:px-10 space-y-8 flex flex-col justify-between gap-5 pb-10">
      <Helmet>
        <title>Skill Scan | Resume Builder</title>
      </Helmet>
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5 mt-12 md:pl-14 lg:pl-20 no-prnt">
          <h2 className="text-4xl  dark:text-white/90 text-center md:text-start">
            Create a Professional Resume with Skill Scan’s Free
            <span className="font-bold"> Resume Builder!</span>
          </h2>
          <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
            Your resume is the key to landing your dream job. With Skill Scan’s
            Free Resume Builder, you can create a professional, ATS-friendly
            resume in just a few minutes. Our easy-to-use platform ensures your
            resume is optimized for Applicant Tracking Systems (ATS), increasing
            your chances of getting shortlisted.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[65%] lg:w-3/4 order-2 md:order-1">
          <PreviewSide />
        </div>
        <div className="md:w-[33%] lg:w-[33%] md:pt-14 lg:pt-20 order-1 md:order-2 no-prnt">
          <EditorSide />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ResumeSF />
      </div>
    </div>
  );
}
