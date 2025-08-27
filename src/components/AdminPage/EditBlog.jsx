import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { blog } from "../../apis/ApiRoutes";

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

function EditBlog({ blogData }) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blogData) {
      setValue(blogData.content);
      setTitle(blogData.title);
      setSummary(blogData.summary);
      setSeoTitle(blogData.seoTitle);
      setSeoDescription(blogData.seoDescription);
      setSeoKeywords(blogData.seoKeywords.join(", "));
    }
  }, [blogData]);

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
      await axios({
        method: "PUT",
        url: `${blog}/update-blog?id=${blogData.slug}`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog updated successfully");
      window.location.href = "/admin";
    } catch (error) {
      alert(`Error updating blog : ${error.response.data.message}`);
      console.error("Error updating blog:", error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col md:flex-row overflow-y-scroll h-[70vh]">
      <div className="">
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
        <div className="flex justify-end">
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
    </div>
  );
}
EditBlog.propTypes = {
  blogData: PropTypes.shape({
    _id: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    seoTitle: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default EditBlog;
