function QRSF() {
  return (
    <div className="z-20 md:pl-14 lg:pl-20 w-4/5">
      <div className="w-full flex  flex-col">
        <div className="w-full flex flex-col my-10">
          <h2 className="text-2xl  dark:text-white/90 text-center md:text-center">
            How It<span className="font-bold"> Works:</span>
          </h2>
          <ul className="flex gap-5 h-full flex-wrap items-center justify-center mt-8">
            <li className="p-5 lg:w-[30rem] h-full bg-[#e4e4e4] rounded-2xl flex flex-col justify-center items-center text-black/90  min-h-[10rem]">
                <span className="font-semibold mb-3  text-center">
                ✅ Step 1: Generate Your Unique QR Code
              </span>
              <span className="text-center">
                Create a personalized QR code linked to your ATS-friendly resume
                or job alerts dashboard.
              </span>
            </li>
            <li className="p-5 lg:w-[30rem] h-full bg-[#e4e4e4] rounded-2xl flex flex-col justify-center items-center text-black/90  min-h-[10rem]">
                <span className="font-semibold mb-3  text-center">
                ✅ Step 2: Save & Share
              </span>
              <span className="text-center">
                Download or print your QR code and add it to your resume,
                business card, portfolio, or LinkedIn profile for quick access.
              </span>
            </li>
            <li className="p-5 lg:w-[30rem] h-full bg-[#e4e4e4] rounded-2xl flex flex-col justify-center items-center text-black/90  min-h-[10rem]">
                <span className="font-semibold mb-3  text-center">
                ✅ Step 3: Instant Access Anytime, Anywhere
              </span>
              <span className="text-center">
                Employers and recruiters can scan your QR code to instantly view
                your resume and job seekers can track new job alerts in
                real-time.
              </span>
            </li>
            <li className="p-5 lg:w-[30rem] h-full bg-[#e4e4e4] rounded-2xl flex flex-col justify-center items-center text-black/90  min-h-[10rem]">
                <span className="font-semibold mb-3  text-center">
                ✅ Step 4: Stay Updated
              </span>
              <span className="text-center">
                Easily update your resume and job preferences without needing to
                reprint or resend documents—your QR code always reflects the
                latest version.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-gray-700 dark:text-white/80">
          <h2 className="text-2xl  dark:text-white/90 text-center md:text-start mt-5">
            Key Features of Skill Scan’s{" "}
            <span className="font-bold"> QR Code Integration:</span>
          </h2>
          <ul className="mt-5 flex flex-col gap-2 w-full">
            <li>
              <span>✔ </span>
              <span>
                Quick & Contactless Sharing – No need for emails or attachments.
              </span>
            </li>
            <li>
              <span>✔ </span>
              <span>
                Mobile-Friendly Access – Open resumes and job alerts on any
                device.
              </span>
            </li>
            <li>
              <span>✔ </span>
              <span>
                Dynamic Updates – Your QR code always links to the latest
                resume.
              </span>
            </li>
            <li>
              <span>✔ </span>
              <span>
                Professional & Modern – Impress recruiters with cutting-edge
                technology.
              </span>
            </li>
            <li>
              <span>✔ </span>
              <span>
                Secure & Private – Control who accesses your resume with
                customizable settings.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default QRSF;
