import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { user } from "../apis/ApiRoutes";
import temp1 from "../assets/templates/Resume_1_page-0001.jpg";
import temp2 from "../assets/templates/Resume_2_page-0001.jpg";
import temp3 from "../assets/templates/Resume_3_page-0001.jpg";
import temp4 from "../assets/templates/Resume_4_page-0001.jpg";
import temp5 from "../assets/templates/Resume_5_page-0001.jpg";
import temp6 from "../assets/templates/Resume_6_page-0001.jpg";
import { useResume } from "../context/useResume";
import { Helmet } from "react-helmet-async";
function Profile() {
  const [userProfile, setUserProfile] = useState();
  const { profileId } = useParams();
  const history = useNavigate();
  const { dispatch } = useResume();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${user}/get-user-profile/${profileId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // Handle the response here
        setUserProfile(response.data.userDetails);
      } catch (error) {
        if (error.response.data?.message == "Token is not valid") {
          alert("Login Expired! Please login again.");
          history("/sign-in");
          return;
        }
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, [profileId]);

  const handleTemplateChange = (templateId) => {
    dispatch({
      type: "UPDATE_TEMPLATE",
      payload: templateId,
    });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-7 md:px-24 flex flex-col justify-center items-center w-full py-8 bg-[#f5f9f9] dark:bg-[#023247] min-h-[100vh]">
      <Helmet>
        <title>Skill Scan | Profile</title>
      </Helmet>
      {userProfile && (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 dark:text-white/90">
              {userProfile.fullName}
            </h1>
            <p className="text-gray-600 dark:text-white/80">
              {userProfile.email}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white/90">
              My Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userProfile.templates.map((template, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between cursor-pointer"
                  onClick={() => {
                    handleTemplateChange(template);
                    history("/resume-builder");
                  }}
                >
                  <img
                    src={
                      template == 1
                        ? temp1
                        : template == 2
                        ? temp2
                        : template == 3
                        ? temp3
                        : template == 4
                        ? temp4
                        : template == 5
                        ? temp5
                        : temp6
                    }
                    alt=""
                    className="h-full"
                  />
                  <div>
                    <h3 className="text-xl font-medium mb-2 flex justify-center items-center flex-col dark:text-white/90 mt-3">
                      Template {template}
                    </h3>
                    <p className="text-gray-500 dark:text-white/80">
                      Resume Template #{template}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
