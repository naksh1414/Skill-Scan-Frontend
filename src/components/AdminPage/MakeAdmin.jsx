import { useState, useEffect } from "react";
import { admin } from "../../apis/ApiRoutes";

function MakeAdmin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${admin}/all-admins`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setAdmins(data);
      }
    } catch (error) {
      console.error("Failed to fetch admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${admin}/make-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: "Admin role assigned successfully!",
          type: "success",
        });
        setEmail("");
        fetchAdmins(); // Refresh admin list
      } else {
        setMessage({
          text: data.message || "Failed to assign admin role",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveAdmin = async (email) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${admin}/remove-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: "Admin role removed successfully!",
          type: "success",
        });
        fetchAdmins(); // Refresh admin list
      } else {
        setMessage({
          text: data.message || "Failed to remove admin role",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className=" md:max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Assign Admin Role
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              placeholder="Enter user email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? "Processing..." : "Make Admin"}
          </button>
        </form>

        {message.text && (
          <div
            className={`mt-4 p-3 rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Current Admins
        </h2>
        <div className="space-y-4">
          {admins.map((admin) => (
            <div
              key={admin.email}
              className="flex flex-col md:flex-row gap-3 text-center md:text-left justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{admin.fullName}</p>
                <p className="text-sm text-gray-600">{admin.email}</p>
                <p className="text-xs text-gray-500">
                  Added: {new Date(admin.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleRemoveAdmin(admin.email)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Remove Admin
              </button>
            </div>
          ))}
          {admins.length === 0 && (
            <p className="text-center text-gray-500">No admins found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MakeAdmin;
