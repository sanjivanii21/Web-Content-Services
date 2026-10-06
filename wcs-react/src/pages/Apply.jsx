import { useEffect } from "react";
import usePageEffects from "../hooks/usePageEffects";

export default function Apply() {
  useEffect(() => {
    document.title = "Application Form";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "");
    document.body.className = "theme-warm page-apply";
  }, []);

  usePageEffects("Apply");

  return (
    <>

      <div className="container">
      <h1>Apply Now</h1>
      <form id="form">

      <div className="grid grid-2">
      <div className="input-group">
      <input type="text" required />
      <label>Full Name</label>
      </div>
      <div className="input-group">
      <input type="email" required />
      <label>Email Address</label>
      </div>
      <div className="input-group">
      <input type="text" required />
      <label>Phone Number</label>
      </div>
      <div className="input-group">
      <input type="text" required />
      <label>Location</label>
      </div>
      </div>
      <br />

      <div className="grid grid-2">
      <select required>
      <option value="">Apply For</option>
      <option>Internship</option>
      <option>Full-Time</option>
      <option>Remote</option>
      <option>Freelancing</option>
      </select>
      <select id="role" required>
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
      <option>Model | Artist | Talent for Brand Shoots</option>
      <option>Content Creator</option>
      </select>
      <select required>
      <option value="">Experience</option>
      <option>Fresher</option>
      <option>1-2 Years</option>
      <option>3+ Years</option>
      </select>
      </div>
      <br />

      <div className="grid grid-2">
      <div className="input-group">
      <input type="text" required />
      <label>Skills (comma separated)</label>
      </div>
      <div className="input-group">
      <input type="text" required />
      <label>Portfolio / GitHub / LinkedIn</label>
      </div>
      </div>
      <br />

      <div className="upload-box" id="uploadBox">
      <p>Drag & Drop Resume or <label className="ut-41">Browse</label></p>
      <input type="file" id="fileInput" />
      <div className="file-name" id="fileName"></div>
      </div>
      <br />

      <div className="input-group">
      <textarea rows="3" required></textarea>
      <label>Why should we hire you?</label>
      </div>
      <br />
      <select required>
      <option value="">Availability</option>
      <option>Immediate</option>
      <option>15 Days</option>
      <option>1 Month</option>
      </select>
      <br />
      <label>
      <input type="checkbox" required /> I agree to Terms & Conditions
      </label>
      <br /><br />
      <button type="submit" id="submitBtn">Submit Application</button>
      </form>
      </div>



    </>
  );
}
