import React, { useState } from "react";

// import React, { useState } from "react";

// const ContactForm = () => {
//   // 1. State for form fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // 2. Handle input changes and update state
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // 3. Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents the default browser form submission

//     // In a real application, you would send this data to a server (e.g., using fetch or axios)
//     console.log("Form submitted:", formData);

//     // Basic form validation (optional)
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     // Clear the form after submission
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });

//     alert("Thank you for your message! We will be in touch soon.");
//   };

//   // 4. Render the form
//   return (
//     <div style={styles.container}>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         {/* Name Input */}
//         <div style={styles.formGroup}>
//           <label htmlFor="name" style={styles.label}>
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name" // Important: Matches the key in formData state
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>

//         {/* Email Input */}
//         <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>

//         {/* Message Textarea */}
//         <div style={styles.formGroup}>
//           <label htmlFor="message" style={styles.label}>
//             Message:
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="5"
//             style={styles.textarea}
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" style={styles.button}>
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// // 5. Basic Inline Styles (You'd typically use a separate CSS file)
// const styles = {
//   container: {
//     Width: "800px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     marginBottom: "5px",
//     fontWeight: "bold",
//   },
//   input: {
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   textarea: {
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "16px",
//     resize: "vertical",
//   },
//   button: {
//     padding: "10px 15px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//     marginTop: "10px",
//   },
// };

// export default ContactForm;

const TailwindContactUs = () => {
  const [values, setValues] = useState({
    fullName: "",
    emailAddress: "",
    messageText: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
    if (name === "emailAddress") {
      setErrors((prev) => ({
        ...prev,
        emailAddress:
          value && /^\S+@\S+\.\S+$/.test(value)
            ? ""
            : "Please enter a valid email",
      }));
    }
  };

  const validateAll = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Name is required";
    if (!values.emailAddress.trim()) next.emailAddress = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.emailAddress))
      next.emailAddress = "Email looks invalid";
    if (!values.messageText.trim() || values.messageText.trim().length < 10)
      next.messageText = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 700));
      setSubmitted(true);
      setValues({ fullName: "", emailAddress: "", messageText: "" });
      setErrors({});
    } catch {
      setErrors({ form: "Unable to send message. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    loading ||
    !values.fullName.trim() ||
    !values.emailAddress.trim() ||
    !values.messageText.trim();

  return (
    <div className="max-w-2xl mx-auto my-10 px-6 py-7 bg-white dark:bg-green-50 rounded-xl shadow-lg font-sans">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
        Contact support
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
        Have a question or need help? Send us a message and we'll get back to
        you as soon as possible.
      </p>

      <form onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm text-slate-700 mb-1">
              Your name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={onInput}
              placeholder="Jane Doe"
              aria-invalid={!!errors.fullName}
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-slate-900 dark:text-slate-100"
            />
            {errors.fullName && (
              <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="emailAddress"
              className="text-sm text-slate-700 mb-1"
            >
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              value={values.emailAddress}
              onChange={onInput}
              placeholder="you@example.com"
              aria-invalid={!!errors.emailAddress}
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-slate-900 dark:text-slate-100"
            />
            {errors.emailAddress && (
              <div className="text-red-600 text-sm mt-1">
                {errors.emailAddress}
              </div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="messageText"
            className="text-sm text-slate-700 mb-1 block"
          >
            Message
          </label>
          <textarea
            id="messageText"
            name="messageText"
            value={values.messageText}
            onChange={onInput}
            placeholder="Describe the issue or question..."
            aria-invalid={!!errors.messageText}
            className="w-full min-h-[110px] px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-vertical bg-transparent text-slate-900 dark:text-slate-100"
          />
          {errors.messageText && (
            <div className="text-red-600 text-sm mt-1">
              {errors.messageText}
            </div>
          )}
        </div>

        {errors.form && (
          <div className="text-red-600 text-sm mb-2">{errors.form}</div>
        )}

        <div className="flex items-center gap-4 mt-3">
          <button
            type="submit"
            disabled={isDisabled}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition ${
              isDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
          {submitted && (
            <span className="text-green-600 text-sm">
              Message sent — thank you!
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export { TailwindContactUs };
const ContactUs = () => {
  const [values, setValues] = useState({
    fullName: "",
    emailAddress: "",
    messageText: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
    // live simple validation for email
    if (name === "emailAddress") {
      setErrors((prev) => ({
        ...prev,
        emailAddress:
          value && /^\S+@\S+\.\S+$/.test(value)
            ? ""
            : "Please enter a valid email",
      }));
    }
  };

  const validateAll = () => {
    const next = {};
    if (!values.fullName.trim()) next.fullName = "Name is required";
    if (!values.emailAddress.trim()) next.emailAddress = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(values.emailAddress))
      next.emailAddress = "Email looks invalid";
    if (!values.messageText.trim() || values.messageText.trim().length < 10)
      next.messageText = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    try {
      // Simulate network request. Replace with real API call (fetch/axios) if needed.
      await new Promise((res) => setTimeout(res, 700));
      setSubmitted(true);
      setValues({ fullName: "", emailAddress: "", messageText: "" });
      setErrors({});
    } catch (err) {
      // show simple error
      setErrors({ form: "Unable to send message. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    loading ||
    !values.fullName.trim() ||
    !values.emailAddress.trim() ||
    !values.messageText.trim();

  const styles = {
    sheet: {
      maxWidth: 600,
      margin: "40px auto",
      marginLeft: 30,
      marginRight: 20,
      padding: 22,
      borderRadius: 10,
      background: "white",
      boxShadow: "0 6px 18px rgba(17,24,39,0.08)",
      fontFamily: "Inter, Roboto, Arial, sans-serif",
      color: "black",
    },
    header: { margin: 0, marginBottom: 12, fontSize: 22, color: "#0f172a" },
    hint: { margin: 0, marginBottom: 18, color: "#475569", fontSize: 14 },
    row: { display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" },
    field: { flex: 1, minWidth: 220, display: "flex", flexDirection: "column" },
    label: { marginBottom: 6, fontSize: 13, color: "#1f2937" },
    input: {
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #e6e9ee",
      fontSize: 14,
      outline: "none",
    },
    textarea: {
      padding: 12,
      borderRadius: 8,
      border: "1px solid #e6e9ee",
      minHeight: 110,
      fontSize: 14,
      resize: "vertical",
    },
    error: { color: "#dc2626", fontSize: 13, marginTop: 6 },
    actions: { display: "flex", alignItems: "center", gap: 12, marginTop: 8 },
    button: (active) => ({
      padding: "10px 16px",
      borderRadius: 8,
      border: "none",
      cursor: active ? "pointer" : "not-allowed",
      background: active ? "#0ea5a4" : "#94a3b8",
      color: "#fff",
      fontWeight: 600,
    }),
    success: { color: "#047857", fontSize: 14, marginLeft: 6 },
  };

  return (
    <div style={styles.sheet}>
      <h2 style={styles.header}>Contact support</h2>
      <p style={styles.hint}>
        Have a question or need help? Send us a message and we'll get back to
        you as soon as possible.
      </p>

      <form onSubmit={onSubmit} noValidate>
        <div style={styles.row}>
          <div style={styles.field}>
            <label htmlFor="fullName" style={styles.label}>
              Your name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={onInput}
              style={styles.input}
              placeholder="Jane Doe"
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <div style={styles.error}>{errors.fullName}</div>
            )}
          </div>

          <div style={styles.field}>
            <label htmlFor="emailAddress" style={styles.label}>
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              value={values.emailAddress}
              onChange={onInput}
              style={styles.input}
              placeholder="you@example.com"
              aria-invalid={!!errors.emailAddress}
            />
            {errors.emailAddress && (
              <div style={styles.error}>{errors.emailAddress}</div>
            )}
          </div>
        </div>

        <div style={{ ...styles.field, marginBottom: 6 }}>
          <label htmlFor="messageText" style={styles.label}>
            Message
          </label>
          <textarea
            id="messageText"
            name="messageText"
            value={values.messageText}
            onChange={onInput}
            style={styles.textarea}
            placeholder="Describe the issue or question..."
            aria-invalid={!!errors.messageText}
          />
          {errors.messageText && (
            <div style={styles.error}>{errors.messageText}</div>
          )}
        </div>

        {errors.form && <div style={styles.error}>{errors.form}</div>}

        <div style={styles.actions}>
          <button
            type="submit"
            style={styles.button(!isDisabled)}
            disabled={isDisabled}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
          {submitted && (
            <span style={styles.success}>Message sent — thank you!</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
