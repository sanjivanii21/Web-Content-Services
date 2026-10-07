import { useEffect, useState } from "react";
import usePageEffects from "../hooks/usePageEffects";

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    applicationType: "",
    role: "",
    experience: "",
    skills: "",
    portfolioUrl: "",
    reason: "",
    availability: "",
    termsAccepted: false,
  });

  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Application Form";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");

    document.body.className = "theme-warm page-apply";
  }, []);

  usePageEffects("Apply");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setResume(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const savedApplication = await response.json();

      console.log("Application saved:", savedApplication);

      setMessage(
        "Application submitted successfully!"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        applicationType: "",
        role: "",
        experience: "",
        skills: "",
        portfolioUrl: "",
        reason: "",
        availability: "",
        termsAccepted: false,
      });

      setResume(null);

      document.getElementById("form").reset();

    } catch (error) {
      console.error("Application error:", error);

      setMessage(
        "Application failed. Please make sure the backend is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Apply Now</h1>

        <form
          id="form"
          onSubmit={handleSubmit}
        >

          <div className="grid grid-2">

            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label>Full Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email Address</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <label>Location</label>
            </div>

          </div>

          <br />

          <div className="grid grid-2">

            <select
              name="applicationType"
              value={formData.applicationType}
              onChange={handleChange}
              required
            >
              <option value="">Apply For</option>
              <option>Internship</option>
              <option>Full-Time</option>
              <option>Remote</option>
              <option>Freelancing</option>
            </select>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option>Business Consultant</option>
              <option>Business Analyst</option>
              <option>Project Manager</option>
              <option>Web Developer</option>
              <option>App Developer</option>
              <option>UI/UX Designer</option>
              <option>Graphic Designer</option>
              <option>Video Editor</option>
              <option>Social Media Executive</option>
              <option>Social Media Manager</option>
              <option>Cinematographer</option>
              <option>Digital Marketing Executive</option>
              <option>Sales Executive</option>
              <option>
                Model | Artist | Talent for Brand Shoots
              </option>
              <option>Content Creator</option>
            </select>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Experience</option>
              <option>Fresher</option>
              <option>1-2 Years</option>
              <option>3+ Years</option>
            </select>

          </div>

          <br />

          <div className="grid grid-2">

            <div className="input-group">
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
              <label>Skills (comma separated)</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                required
              />
              <label>Portfolio / GitHub / LinkedIn</label>
            </div>

          </div>

          <br />

          <div
            className="upload-box"
            id="uploadBox"
          >
            <p>
              Drag & Drop Resume or{" "}
              <label
                className="ut-41"
                htmlFor="fileInput"
              >
                Browse
              </label>
            </p>

            <input
              type="file"
              id="fileInput"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
            />

            <div
              className="file-name"
              id="fileName"
            >
              {resume ? resume.name : ""}
            </div>
          </div>

          <br />

          <div className="input-group">
            <textarea
              rows="3"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>

            <label>Why should we hire you?</label>
          </div>

          <br />

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="">Availability</option>
            <option>Immediate</option>
            <option>15 Days</option>
            <option>1 Month</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />{" "}
            I agree to Terms & Conditions
          </label>

          <br />
          <br />

          <button
            type="submit"
            id="submitBtn"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Application"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "15px",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}

        </form>
      </div>
    </>
  );
}