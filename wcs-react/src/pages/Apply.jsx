
import { useEffect, useRef, useState } from "react";
import usePageEffects from "../hooks/usePageEffects";

const API_URL = "http://localhost:8080/api/applications";

const initialFormData = {
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
};

const applicationTypes = ["Internship", "Full-Time", "Remote", "Freelancing"];

const roles = [
  "Business Consultant",
  "Business Analyst",
  "Project Manager",
  "Web Developer",
  "App Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Video Editor",
  "Social Media Executive",
  "Social Media Manager",
  "Cinematographer",
  "Digital Marketing Executive",
  "Sales Executive",
  "Model | Artist | Talent for Brand Shoots",
  "Content Creator",
];

const experienceOptions = ["Fresher", "1-2 Years", "3+ Years"];
const availabilityOptions = ["Immediate", "15 Days", "1 Month"];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body.page-apply,
body.theme-warm.page-apply {
  background: #fff !important;
  color: #1f2937 !important;
}

.apply-page,
.apply-page * {
  box-sizing: border-box;
}

.apply-page {
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  color: #1f2937;
  font-family: 'Poppins', sans-serif;
}

.apply-page .apply-container {
  width: 100%;
  max-width: 820px;
  padding: 22px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 3px 14px rgba(15, 23, 42, 0.05);
}

.apply-page .apply-heading {
  text-align: center;
  margin-bottom: 16px;
}

.apply-page .apply-eyebrow {
  margin: 0 0 4px;
  color: #7c3aed;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.apply-page .apply-title {
  margin: 0;
  color: #111827;
  font-size: clamp(25px, 3vw, 32px);
  line-height: 1.25;
  font-weight: 700;
}

.apply-page .apply-subtitle {
  max-width: 520px;
  margin: 6px auto 0;
  color: #6b7280;
  font-size: 11px;
  line-height: 1.5;
}

.apply-page .apply-section {
  margin-top: 16px;
}

.apply-page .apply-section-heading {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 10px;
  color: #1f2937;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.apply-page .apply-section-heading::after {
  content: "";
  height: 1px;
  flex: 1;
  background: #e5e7eb;
}

.apply-page .apply-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 14px;
}

.apply-page .apply-field {
  min-width: 0;
}

.apply-page .apply-field label {
  display: block;
  margin: 0 0 4px;
  color: #374151;
  font-size: 11px;
  font-weight: 500;
}

.apply-page .apply-required {
  color: #7c3aed;
}

.apply-page .apply-field input,
.apply-page .apply-field select,
.apply-page .apply-field textarea {
  display: block;
  width: 100%;
  min-height: 38px;
  padding: 8px 10px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  outline: none;
  color: #1f2937;
  background: #fff;
  font: 400 11px 'Poppins', sans-serif;
}

.apply-page .apply-field textarea {
  min-height: 72px;
  resize: vertical;
  line-height: 1.5;
}

.apply-page .apply-field input::placeholder,
.apply-page .apply-field textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

.apply-page .apply-field input:focus,
.apply-page .apply-field select:focus,
.apply-page .apply-field textarea:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
}

.apply-page .apply-field select option {
  color: #1f2937;
  background: #fff;
}

.apply-page .apply-full {
  grid-column: 1 / -1;
}

.apply-page .apply-upload {
  padding: 15px 12px;
  border: 1.5px dashed #c4b5fd;
  border-radius: 9px;
  text-align: center;
  background: #fff;
  cursor: pointer;
}

.apply-page .apply-upload:hover,
.apply-page .apply-upload:focus-visible,
.apply-page .apply-upload.dragging {
  border-color: #7c3aed;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.07);
}

.apply-page .apply-upload-title {
  margin: 0;
  color: #374151;
  font-size: 11px;
  font-weight: 500;
}

.apply-page .apply-browse {
  color: #7c3aed;
  font-weight: 600;
}

.apply-page .apply-upload-help {
  margin: 5px 0 0;
  color: #6b7280;
  font-size: 10px;
}

.apply-page .apply-file-name {
  margin-top: 7px;
  color: #15803d;
  font-size: 11px;
  overflow-wrap: anywhere;
}

.apply-page .apply-file-error {
  margin-top: 7px;
  color: #dc2626;
  font-size: 11px;
}

.apply-page .apply-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4b5563;
  font-size: 10px;
  line-height: 1.6;
  cursor: pointer;
}

.apply-page .apply-checkbox input {
  width: 15px;
  height: 15px;
  margin: 2px 0 0;
  flex: 0 0 auto;
  accent-color: #7c3aed;
}

.apply-page .apply-submit {
  width: 100%;
  min-height: 42px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 7px;
  color: #fff;
  background: linear-gradient(100deg, #7c3aed, #2563eb);
  font: 600 12px 'Poppins', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.apply-page .apply-submit:hover:not(:disabled) {
  opacity: 0.9;
}

.apply-page .apply-submit:disabled {
  opacity: 0.7;
  cursor: wait;
}

.apply-page .apply-loader {
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-top-color: transparent;
  border-radius: 50%;
  animation: applySpin 0.7s linear infinite;
}

.apply-page .apply-message {
  margin-top: 10px;
  padding: 9px 11px;
  border-radius: 7px;
  font-size: 11px;
  line-height: 1.5;
}

.apply-page .apply-message.success {
  color: #166534;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.apply-page .apply-message.error {
  color: #991b1b;
  background: #fef2f2;
  border: 1px solid #fecaca;
}

.apply-page .apply-footnote {
  margin: 6px 0 0;
  color: #6b7280;
  font-size: 9px;
  line-height: 1.5;
  text-align: center;
}

@keyframes applySpin {
  to { transform: rotate(360deg); }
}

@media (max-width: 620px) {
  .apply-page {
    padding: 10px;
  }

  .apply-page .apply-container {
    padding: 16px 12px;
    border-radius: 10px;
  }

  .apply-page .apply-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }

  .apply-page .apply-full {
    grid-column: auto;
  }

  .apply-page .apply-heading {
    margin-bottom: 14px;
  }

  .apply-page .apply-section {
    margin-top: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .apply-page .apply-loader {
    animation: none;
  }
}
`;

export default function Apply() {
  const [formData, setFormData] = useState(initialFormData);
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Application Form";
    document.body.classList.add("theme-warm", "page-apply");

    return () => {
      document.body.classList.remove("page-apply", "theme-warm");
    };
  }, []);

  usePageEffects("Apply");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleResumeChange = (file) => {
    setResumeError("");

    if (!file) {
      setResume(null);
      return;
    }

    const extension = file.name.split(".").pop().toLowerCase();

    if (!["pdf", "doc", "docx"].includes(extension)) {
      setResume(null);
      setResumeError("Please select a PDF, DOC, or DOCX file.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setResume(null);
      setResumeError("The resume must be 2 MB or smaller.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setResume(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];
    if (file) handleResumeChange(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage({ type: "", text: "" });

    if (resumeError) {
      setMessage({
        type: "error",
        text: "Please correct the resume file selection.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Server returned status ${response.status}.`);
      }

      setMessage({
        type: "success",
        text: "Your application has been submitted successfully!",
      });

      setFormData({ ...initialFormData });
      setResume(null);
      setResumeError("");

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Application submission error:", error);

      setMessage({
        type: "error",
        text:
          error instanceof TypeError
            ? "Cannot connect to the backend. Make sure Spring Boot is running on port 8080 and CORS is configured."
            : `Submission failed: ${error.message || "Please try again."}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="apply-page">
      <style>{css}</style>

      <section className="apply-container" aria-labelledby="apply-title">
        <header className="apply-heading">
          <p className="apply-eyebrow">Career opportunities</p>
          <h1 className="apply-title" id="apply-title">Apply Now</h1>
          <p className="apply-subtitle">
            Take the next step in your career. Complete the details below and
            our team will review your application.
          </p>
        </header>

        <form id="form" onSubmit={handleSubmit}>
          <section className="apply-section">
            <h2 className="apply-section-heading">Personal information</h2>
            <div className="apply-grid">
              <div className="apply-field">
                <label htmlFor="fullName">Full name <span className="apply-required">*</span></label>
                <input id="fullName" name="fullName" type="text" autoComplete="name" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
              </div>

              <div className="apply-field">
                <label htmlFor="email">Email address <span className="apply-required">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="apply-field">
                <label htmlFor="phone">Phone number <span className="apply-required">*</span></label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="apply-field">
                <label htmlFor="location">Location <span className="apply-required">*</span></label>
                <input id="location" name="location" type="text" placeholder="City, State" value={formData.location} onChange={handleChange} required />
              </div>
            </div>
          </section>

          <section className="apply-section">
            <h2 className="apply-section-heading">Application details</h2>
            <div className="apply-grid">
              <div className="apply-field">
                <label htmlFor="applicationType">Application type <span className="apply-required">*</span></label>
                <select id="applicationType" name="applicationType" value={formData.applicationType} onChange={handleChange} required>
                  <option value="">Choose an application type</option>
                  {applicationTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="apply-field">
                <label htmlFor="role">Preferred role <span className="apply-required">*</span></label>
                <select id="role" name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Choose a role</option>
                  {roles.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="apply-field">
                <label htmlFor="experience">Experience <span className="apply-required">*</span></label>
                <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="">Select your experience</option>
                  {experienceOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="apply-field">
                <label htmlFor="availability">Availability to join <span className="apply-required">*</span></label>
                <select id="availability" name="availability" value={formData.availability} onChange={handleChange} required>
                  <option value="">Select availability</option>
                  {availabilityOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div className="apply-field">
                <label htmlFor="skills">Skills <span className="apply-required">*</span></label>
                <input id="skills" name="skills" type="text" placeholder="e.g. Java, React, MySQL" value={formData.skills} onChange={handleChange} required />
              </div>

              <div className="apply-field">
                <label htmlFor="portfolioUrl">Portfolio / GitHub / LinkedIn</label>
                <input id="portfolioUrl" name="portfolioUrl" type="text" placeholder="Paste your profile or portfolio link" value={formData.portfolioUrl} onChange={handleChange} />
              </div>

              <div className="apply-field apply-full">
                <label htmlFor="reason">Why should we hire you? <span className="apply-required">*</span></label>
                <textarea id="reason" name="reason" placeholder="Tell us about your strengths, experience, and what you bring to this role." value={formData.reason} onChange={handleChange} required />
              </div>
            </div>
          </section>

          <section className="apply-section">
            <h2 className="apply-section-heading">Resume</h2>
            <div
              className={`apply-upload${isDragging ? " dragging" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <p className="apply-upload-title">
                Drag and drop your resume, or <span className="apply-browse">browse files</span>
              </p>
              <p className="apply-upload-help">PDF, DOC, or DOCX · Maximum file size 2 MB</p>

              {resume && <div className="apply-file-name">✓ {resume.name}</div>}
              {resumeError && <div className="apply-file-error" role="alert">{resumeError}</div>}

              <input
                ref={fileInputRef}
                type="file"
                id="fileInput"
                accept=".pdf,.doc,.docx"
                hidden
                onClick={(event) => event.stopPropagation()}
                onChange={(event) => handleResumeChange(event.target.files?.[0])}
              />
            </div>
            <p className="apply-footnote">
              Note: The resume is selected in this form but is not uploaded to
              the server by the current JSON API.
            </p>
          </section>

          <section className="apply-section">
            <h2 className="apply-section-heading">Confirmation</h2>
            <label className="apply-checkbox">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
              <span>
                I agree to the Terms &amp; Conditions and confirm that the
                information provided is accurate. <span className="apply-required">*</span>
              </span>
            </label>
          </section>

          <button className="apply-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting && <span className="apply-loader" aria-hidden="true" />}
            {isSubmitting ? "Submitting application..." : "Submit application"}
          </button>

          {message.text && (
            <div className={`apply-message ${message.type}`} role="status" aria-live="polite">
              {message.text}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}