import React, { useState } from "react";
import "./CForm.scss";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import emailjs from "emailjs-com"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling

export default function CForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State to track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the specific field when user starts typing
    setErrors({
      ...errors,
      [name]: "", // Reset error for the specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let errorMessages = {};

    // Validation checks
    Object.keys(formData).forEach((key) => {
      const value = formData[key].trim();
      if (!value) {
        errorMessages[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
        valid = false;
      } else {
        errorMessages[key] = "";
      }
    });

    // Specific validation for email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!valid) {
      setErrors(errorMessages);
      return;
    }

    // Set loading state to true to show loader
    setLoading(true);

    // Prepare data for the EmailJS template
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      companyName: formData.companyName,
      product: formData.product,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "service_c3lt4lb", // Your EmailJS Service ID
        "template_98xn03s", // Your EmailJS Template ID
        templateParams,
        "gdIU42i5qHH-naiRa" // Your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          toast.success("Form submitted successfully!"); // Show success toast
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            companyName: "",
            product: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          console.log("Failed to send email", error);
          toast.error("Something went wrong, please try again."); // Show error toast
        }
      )
      .finally(() => {
        // Hide loader after request is completed (either success or failure)
        setLoading(false);
      });
  };

  return (
    <div className="CForm m-t">
      <div className="container">
        <div className="row justify-content-center align-items-center">

            <div className="cf-dwn">
              <div className="cf-cont" align="center">
                <div className="cf-hd">
                  <h3>Free Quote</h3>
                </div>

                <div className="cf-txt">
                  <p>
                    After we get some information from you, we’ll set up a time
                    to discuss your requirements in further detail.
                  </p>
                </div>
              </div>
              <div className="cf-form">
                <form onSubmit={handleSubmit}>
                  {/* Form fields */}
                  <div className="form-row row">
                    <div className="form-group col-md-6 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <small className="text-danger">
                          {errors.firstName}
                        </small>
                      )}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <small className="text-danger">{errors.lastName}</small>
                      )}
                    </div>
                  </div>

                  <div className="form-row row">
                    <div className="form-group col-md-6 mt-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                  </div>

                  <div className="form-row row">
                    <div className="form-group col-md-6 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                      {errors.companyName && (
                        <small className="text-danger">
                          {errors.companyName}
                        </small>
                      )}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                      <select
                        className="form-control"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                      >
                        <option value="">Select Product</option>
                        <option value="product1">Ply Laminated Foil</option>
                        <option value="product2">Insulation Industries</option>
                        <option value="product3">
                          Metalized Film Laminated Material
                        </option>
                        <option value="product4">
                          Barrier Film Insulation Material
                        </option>
                        <option value="product5">
                          Food & Baverages Industries
                        </option>
                        <option value="product6">PE Coated Paper</option>
                      </select>
                      {errors.product && (
                        <small className="text-danger">{errors.product}</small>
                      )}
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>

                  <div className="col-12 mt-3" align="center">
                    <button className="fbtn" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>

                {/* Loader Bar */}
                {loading && (
                  <div className="loader-container">
                    <div className="loader-bar"></div>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* ToastContainer to display the toast notifications */}
      <ToastContainer />
    </div>
  );
}
