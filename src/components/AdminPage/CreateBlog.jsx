import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { admin } from "../../apis/ApiRoutes";
// import FormData from "form-data"; // This line is not needed in the browser environment
import DOMPurify from "dompurify";
import parse from "html-react-parser";
// import ImageResize from "quill-image-resize-module-react";

// Register the ImageResize module
// Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

function CreateBlog() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 200 * 1024) {
      setThumbnail(file);
    } else {
      alert("File size should be less than 200KB");
    }
  };

  useEffect(() => {
    if (thumbnail) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        // You can save the base64 data to localStorage or send it to your backend server
        localStorage.setItem("thumbnail", base64data);
      };
      reader.readAsDataURL(thumbnail);
    }
  }, [thumbnail]);
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", value);
    formData.append("seoTitle", seoTitle);
    formData.append("seoDescription", seoDescription);
    formData.append("seoKeywords", seoKeywords);

    setLoading(true);

    if (thumbnail) {
      const thumb = localStorage.getItem("thumbnail");
      formData.append("thumbnail", thumb);
    }
    const token = localStorage.getItem("token");

    try {
      const response = await axios({
        method: "post",
        url: `${admin}/add-blog`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      alert("Successfully saved");
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const sanitizeAndParseHTML = (content) => {
    const sanitized = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "ul",
        "ol",
        "li",
        "p",
        "br",
        "blockquote",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "style"],
    });
    return parse(sanitized);
  };

  const handlePreview = () => {
    const previewData = {
      title: title,
      summary: summary,
      content: value,
    };
    setData(previewData);
  };

  return (
    <div className="p-4 flex flex-col md:flex-row">
      <div className=" md:w-1/2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            SEO Title
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            SEO Description
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            value={seoDescription}
            rows={2}
            onChange={(e) => setSeoDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            SEO Keywords (comma-separated)
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            value={seoKeywords}
            onChange={(e) => setSeoKeywords(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Summary
          </label>
          <textarea
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={summary}
            rows={4}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Thumbnail Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleThumbnailChange}
          />
        </div>
        <div className="mb-4">
          <ReactQuill
            theme="snow"
            className="rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            modules={modules}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePreview}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Preview
          </button>
          <button
            onClick={handleSave}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? " disabled:cursor-not-allowed bg-blue-500/70" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      {data ? (
        <div className=" md:w-1/2 p-5">
          <p className="text-3xl font-bold text-center">Preview</p>
          <div className="shadow-lg p-5">
            <h1>{data.title}</h1>
            {sanitizeAndParseHTML(data.content)}
          </div>
        </div>
      ) : (
        <div className="w-1/2 flex justify-center items-center">
          <p className="font-semibold text-gray-400 text-4xl">Preview</p>
        </div>
      )}
    </div>
  );
}

export default CreateBlog;
