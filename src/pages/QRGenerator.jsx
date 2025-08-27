import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import heroBG from "../assets/HomePage/hero-section-bg.png";
import { ArrowUpRight } from "lucide-react";
import { ArrowDownLeft } from "lucide-react";
import QrGeneratorIcon from "../assets/WhatWeOffer/qr-generator-icon.png";
// import logo from "../assets/simpleLogo.png";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import QRSF from "../components/StepsAndFeatures/QRSF";
function QRGenerator() {
  const [qrType, setQrType] = useState("url");
  const [url, setUrl] = useState("https://Skill Scan.vercel.app/");
  const [documentName, setDocumentName] = useState("");
  const [yourName, setYourName] = useState("");
  const [fileExt, setFileExt] = useState("png");
  const [dotColor, setDotColor] = useState("#379EBA");
  const [dotType, setDotType] = useState("rounded");
  const [cornerSquareColor, setCornerSquareColor] = useState("#17D2CE");
  const [cornerSquareType, setCornerSquareType] = useState("extra-rounded");
  const [cornerDotColor, setCornerDotColor] = useState("#025370");
  const [cornerDotType, setCornerDotType] = useState("dot");

  const [vCard, setVCard] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    company: "",
    jobTitle: "",
    address: "",
    city: "",
    zipcode: "",
    country: "",
    website: "",
  });

  const qrCode = useRef(
    new QRCodeStyling({
      width: 250,
      height: 250,
      data: url,
      // image: logo,
      dotsOptions: {
        color: dotColor,
        type: dotType,
      },
      cornersSquareOptions: {
        color: cornerSquareColor,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: cornerDotColor,
        type: cornerDotType,
      },
      // imageOptions: {
      //   crossOrigin: "anonymous",
      //   margin: 5,
      // },
    })
  );

  const qrDownloadRef = useRef();
  const qrContainerRef = useRef(null);

  useEffect(() => {
    if (qrContainerRef.current) {
      qrCode.current.append(qrContainerRef.current);
    }
  }, []);

  const onGenerateClick = () => {
    let data = url;
    if (qrType === "vcard") {
      data = `BEGIN:VCARD\nVERSION:3.0\nN:${vCard.lastName};${vCard.firstName}\nFN:${vCard.firstName} ${vCard.lastName}\nORG:${vCard.company}\nTITLE:${vCard.jobTitle}\nTEL:${vCard.contact}\nEMAIL:${vCard.email}\nADR:;;${vCard.address};${vCard.city};;${vCard.zipcode};${vCard.country}\nURL:${vCard.website}\nEND:VCARD`;
    }
    qrCode.current.update({
      width: 300,
      height: 300,
      data,
      dotsOptions: {
        color: dotColor,
        type: dotType,
      },
      // image: logo,
      // imageOptions: {
      //   hideBackgroundDots: true,
      //   margin: 5,
      // },
      cornersSquareOptions: {
        color: cornerSquareColor,
        type: cornerSquareType,
      },
      cornersDotOptions: {
        color: cornerDotColor,
        type: cornerDotType,
      },
    });
  };

  const handleVCardChange = (e) => {
    const { name, value } = e.target;
    setVCard((prev) => ({ ...prev, [name]: value }));
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen py-10 px-5 flex flex-col justify-around items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>Skill Scan | QR Generator</title>
      </Helmet>
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh]  pointer-events-none"
        alt=""
      />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-center md:text-start">
          Easily Access Your Resume & Job Alerts with
          <span className="font-bold"> QR Codes!</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Stay ahead in your job search with Skill Scan's QR Code Feature—a fast,
          efficient way to share and access your resume and job alerts on the
          go. Whether you're networking, applying for jobs, or showcasing your
          resume, a simple scan is all it takes!
        </p>
      </div>

      {/* <div className="w-4/5 md:pl-14 lg:pl-20 mt-10">
        <h2 className="text-2xl dark:text-white/90 text-center md:text-start">
          Steps to Generate QR Code
        </h2>
        <ol className="list-decimal list-inside text-black/70 dark:text-white/70 mt-3">
          <li>Paste the link.</li>
          <li>Edit the QR style.</li>
          <li>Click on generate to generate the QR.</li>
          <li>Download the QR.</li>
        </ol>
      </div> */}
      <div className="flex flex-col md:flex-row rounded-3xl shadow-lg p-4 md:p-10 lg:p-14 items-center md:items-start justify-around bg-white z-[90] md:w-4/5 mt-10">
        <div className="p-6 w-full md:h-[60vh] max-w-lg md:overflow-y-scroll">
          <div className="flex items-center gap-2 mb-5">
            <img src={QrGeneratorIcon} alt="" className="w-10 h-10" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              QR Code Generator
            </h2>
          </div>
          <div className="mb-5 flex-wrap gap-2">
            {[
              "url",
              "text",
              "email",
              "contact",
              "vcard",
              "linkedin",
              "twitter",
              "instagram",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setQrType(type)}
                className={`px-4 py-2 my-2 mx-2 rounded-md ${
                  qrType === type
                    ? "bg-[#2A8E9E] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {qrType !== "vcard" && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-[#2A8E9E] mb-2">
                Enter {qrType}
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
                placeholder="Enter URL"
              />
            </div>
          )}

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#2A8E9E] mb-2">
              Enter Your Name
            </label>
            <input
              type="text"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#2A8E9E] mb-2">
              Enter Document Name
            </label>
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
              placeholder="Enter Document Name"
            />
          </div>

          {qrType === "vcard" && (
            <div className="grid grid-col-1 md:grid-cols-2 gap-4 mb-5">
              {Object.keys(vCard).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-[#2A8E9E] mb-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={vCard[key]}
                    onChange={handleVCardChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
                    placeholder={`Enter ${key}`}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mb-5 flex items-center gap-4">
            <label className="block text-sm font-medium text-[#2A8E9E]">
              QR Format
            </label>
            <select
              value={fileExt}
              onChange={(e) => setFileExt(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 ">
            <div className="flex items-center justify-between md:pr-5 md:gap-3">
              <label className="text-sm font-medium text-[#2A8E9E]">
                Dot Color
              </label>
              <input
                type="color"
                value={dotColor}
                onChange={(e) => setDotColor(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-[#2A8E9E] w-full">
                Dot Type
              </label>
              <select
                value={dotType}
                onChange={(e) => setDotType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
              >
                <option value="rounded">Rounded</option>
                <option value="dots">Dots</option>
                <option value="classy">Classy</option>
                <option value="classy-rounded">Classy Rounded</option>
                <option value="square">Square</option>
                <option value="extra-rounded">Extra Rounded</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 ">
            <div className="flex items-center justify-between md:pr-5 md:gap-3">
              <label className="text-sm font-medium text-[#2A8E9E]">
                Corner Square Color
              </label>
              <input
                type="color"
                value={cornerSquareColor}
                onChange={(e) => setCornerSquareColor(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="block text-sm font-medium text-[#2A8E9E]  w-full">
                Corner Square Type
              </label>
              <select
                value={cornerSquareType}
                onChange={(e) => setCornerSquareType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
              >
                <option value="square">Square</option>
                <option value="extra-rounded">Extra Rounded</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 ">
            <div className="flex items-center justify-between md:pr-5 md:gap-3">
              <label className="text-sm font-medium text-[#2A8E9E] ">
                Corner Dot Color
              </label>
              <input
                type="color"
                value={cornerDotColor}
                onChange={(e) => setCornerDotColor(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="block text-sm font-medium text-[#2A8E9E]  w-full">
                Corner Dot Type
              </label>
              <select
                value={cornerDotType}
                onChange={(e) => setCornerDotType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A8E9E]"
              >
                <option value="dot">Dot</option>
                <option value="square">Square</option>
              </select>
            </div>
          </div>

          <div className="flex mt-8 justify-center md:justify-start">
            <button
              onClick={onGenerateClick}
              className="px-4 py-2 bg-[#2A8E9E] hover:bg-[#1f6d7a] text-white rounded-xl shadow-md flex gap-2 items-center"
            >
              Generate <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            ref={qrDownloadRef}
            className="md:mt-10md:mt-10 bg-white shadow-lg p-4 rounded-2xl flex items-center flex-col justify-center"
          >
            <h3 className="text-[#023247] font-semibold">{yourName}</h3>
            <p className="text-[#023247]">{documentName}</p>
            <hr className="h-[1.8px] my-2 bg-gray-300 text-black w-full" />
            <div
              className=" bg-white p-4 rounded-2xl flex items-center flex-col justify-center"
              ref={qrContainerRef}
            ></div>
          </div>
          <button
            onClick={() => {
              fileExt == "png"
                ? exportComponentAsPNG(qrDownloadRef)
                : fileExt == "pdf"
                ? exportComponentAsPDF(qrDownloadRef)
                : exportComponentAsJPEG(qrDownloadRef);
            }}
            className="mt-8 px-4 py-2 rounded-xl text-[#023247] border-2 border-[#023247] hover:bg-[#2A8E9E]/10 font-medium flex gap-2 items-center"
          >
            Download QR <ArrowDownLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
      <QRSF />
    </div>
  );
}

export default QRGenerator;
