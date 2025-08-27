import { Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { review } from "../../apis/ApiRoutes";

function ReviewSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    occupation: "",
    review: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  // Function to validate form fields
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email format.";

    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.occupation) tempErrors.occupation = "Occupation is required.";
    if (!formData.review) tempErrors.review = "Review cannot be empty.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${review}/save-review`, formData);
      alert("Review submitted successfully!");
      setFormData({
        email: "",
        name: "",
        occupation: "",
        review: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting review:", error);
      alert(
        error.response?.data?.message ||
          "Failed to submit review. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-start px-10 md:px-24 mb-16 md:mb-8">
      <div className="flex flex-col items-center md:items-start justify-center md:w-1/2">
        <h4 className="text-[#2A8E9E] font-bold md:text-lg md:text-left">
          REVIEW
        </h4>
        <h3 className="text-[#1D1E20] dark:text-white/90 text-3xl md:text-4xl lg:text-5xl text-center md:text-start">
          How was your experience with our website?
        </h3>
        <p className="text-[#023247]/70 dark:text-white/80 md:w-[60%] text-center md:text-left mt-3">
          Share your review and help us improve!
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:p-10 md:pt-0 md:pr-20">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-5 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-5 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}

        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-5 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
        />
        {errors.occupation && (
          <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>
        )}

        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Review..."
          className="py-2 w-full md:w-[90%] rounded-2xl border border-[#023247] dark:border-white bg-transparent px-5 mt-3 focus:outline-none focus:ring-2 focus:ring-[#2A8E9E] text-white "
          rows={4}
        ></textarea>
        {errors.review && (
          <p className="text-red-500 text-sm mt-1">{errors.review}</p>
        )}

        <button
          onClick={handleSubmit}
          className="bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-full flex justify-center items-center mt-5 self-end cursor-pointer gap-3 text-white/90 py-2 px-4 disabled:cursor-not-allowed disabled:bg-[#1f6d7a]/80"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-5 h-5 text-white/90" /> Send
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ReviewSection;
