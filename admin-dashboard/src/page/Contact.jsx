import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone as faPhoneIcon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeIcon } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker as faMapMarkerIcon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = ({
  firstname,
  setFirstName,
  lastname,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
  message,
  setMessage,
}) => {
   
    const [ error , setError ] = useState('');

  const handler = (e) => {
    e.preventDefault();

    if(firstname === "" || lastname === "" || phone === "") {
        setError("All Fields Are Required");
        return;
    }
    else{
    alert("Form Submitted");
    console.log("Form Submitted:", firstname , lastname , phone , email , message);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-col justify-center items-center gap-10 p-5 select-none">
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-5xl text-red-400 font-medium first-letter:text-9xl first-letter:text-[#2f3c7e] first-letter:font-bold">
            Contact Us
          </p>
          <div className="mt-5 text-slate-700 text-lg font-medium">
            <p>Feel Free To Contact With Us</p>
          </div>
          <div className="mt-5">
            <FontAwesomeIcon icon={faPhoneIcon} className="text-lg text-rose-400" />
            <span className="ml-5 text-md font-medium">9142158588</span>
          </div>
          <div className="mt-5">
            <FontAwesomeIcon icon={faEnvelopeIcon} className="text-lg text-rose-400" />
            <span className="ml-5 text-md font-medium">akshayraj3435@gmail.com</span>
          </div>
          <div className="mt-5">
            <FontAwesomeIcon icon={faMapMarkerIcon} className="text-lg text-rose-400" />
            <span className="ml-6 text-md font-medium">Jaynagar , Bihar (847226)</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 p-4 shadow rounded-sm">
        <div className="text-xl text-[#2f3c7e] font-medium text-center">Enquiry</div>
          <form onSubmit={handler}>
            <div>
              <label htmlFor="name" className="text-lg text-slate-700 font-normal">Name</label>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="h-[40px] w-full outline-0 shadow-sm pl-3 border-[1px] border-rose-200"
              />
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="h-[40px] w-full outline-0 shadow-sm pl-3 border-[1px] border-rose-200"
              />
            </div>

            <div className="mt-5 mb-4">
              <label htmlFor="phone" className="text-lg text-slate-700 font-normal">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="888 888 8888"
                className="h-[40px] w-full outline-0 shadow-sm pl-3 mt-1 border-[1px] border-rose-200"
              />
            </div>

            <div className="mt-5 mb-4">
              <label htmlFor="email" className="text-lg text-slate-700 font-normal">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="h-[40px] w-full outline-0 shadow-sm pl-3 mt-1 border-[1px] border-rose-200"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type Your Message"
                className="h-[70px] w-full outline-0 shadow-sm pl-3 mt-1 border-[1px] border-rose-200"
              />
            </div>

            <div className="mt-5">
              <input
                type="submit"
                value="Submit"
                className="h-[40px] w-full outline-0 shadow-sm text-lg text-slate-50 font-normal hover:bg-red-400 delay-100 bg-red-300 hover:shadow-red-200 hover:text-slate-100 rounded-full cursor-pointer"
              />
            </div>
            <div className="mt-[10px] pl-1.5">
                {error && <p className="text-md text-red-400 font-medium"> {error} </p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
