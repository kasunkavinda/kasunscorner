import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import contactMe from "../../public/images/contact-me/contact-me.jpg";

async function submitHandlerApi(enteredContactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(enteredContactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  toast.success("Successfully submitted");
}


function Contact(props) {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: (values, { resetForm }) => {

      const contactData = {
        name: values.name,
        email: values.email,
        country: values.message,
      };
      submitHandlerApi(contactData);
      resetForm({});
    },
  });

  return (
    <>
      <div className="mb-4">
        <div className="text-center my-6">
          <h1 className="text-4xl font-extrabold">Say Hello!</h1>
        </div>
        <div className="m-auto" style={{ width: "20rem" }}>
          <Image src={contactMe} placeholder="blur" alt="image1" />
        </div>
        <div className="sm:w-3/4 m-auto">
          <p className="text-center px-4">
            I thrive on learning new things. I enjoy exploring new paths to
            familiar places. I really love coding and photography. Outside of
            work, my mission is to collect pictureous snaps as many as possible.
            I also really enjoy exploring the amazing trails and landscapes
            around the area where I live. I’ve travelled a lot and enjoy seeing
            things from a fresh perspective. When this whole internet thing goes
            out of style, I will probably open a art gallery. Who knows :)
          </p>
        </div>
        <div className="sm:w-1/2 m-auto mt-12">
          <form className="pb-8 mx-4" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block font-pink text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-pink text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-pink text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="textarea"
                placeholder="Message"
                rows="10"
                cols="50"
                maxLength="300"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
