import resumeBuilderIcon from "../../assets/WhatWeOffer/resumebuildericon.png";
import QrGeneratorIcon from "../../assets/WhatWeOffer/qr-generator-icon.png";
import NFCtagIcon from "../../assets/WhatWeOffer/nfc-tag-icon.png";
function WhatWeOffer() {
  return (
    <div className="px-10 z-50 md:my-14">
      <div className="flex rounded-3xl shadow-lg p-7 md:p-14 items-center justify-center flex-col bg-white">
        <div className="flex flex-col md:flex-row">
          <div>
            <p className=" text-[#2A8E9E] font-bold text-lg">WHAT WE OFFER </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font md:w-[88%]">
              Tools that scale with your ambitions.
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <p className="md:w-1/2 mt-4 md:mt-0 text-[#023247]/80">
              From effortless networking to professional resume building, our
              solutions are designed to grow with your ambitions and simplify
              your path to success.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-14 gap-14">
          <div className="flex flex-col items-center md:items-start">
            <img src={resumeBuilderIcon} alt="" className="w-12" />
            <h3 className="font-bold text-lg mt-3">Resume Builder</h3>
            <p className="text-[#023247]/80 text-center md:text-start">
              Create polished, AI-enhanced resumes that showcase your skills and
              land opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img src={QrGeneratorIcon} alt="" className="w-12" />
            <h3 className="font-bold text-lg mt-3">QR Generator</h3>
            <p className="text-[#023247]/80 text-center md:text-start">
              Generate custom QR codes for resumes and documents to ensure
              instant accessibility.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img src={NFCtagIcon} alt="" className="w-12" />
            <h3 className="font-bold text-lg mt-3">ATS</h3>
            <p className="text-[#023247]/80 text-center md:text-start">
              Optimize your resume for Applicant Tracking Systems to increase
              your chances of getting noticed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
