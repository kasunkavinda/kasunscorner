import { useFormik } from "formik";
import Image from "next/image";
import contactMe from "../../public/images/contact-me/contact-me.jpg";

async function submitHandlerApi(enteredContactData) {
  const response = await fetch("/api/contact-me", {
    method: "POST",
    body: JSON.stringify(enteredContactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
}

function Contact(props) {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: (values) => {
      console.log(values.name);

      const contactData = {
        name: values.name,
        email: values.email,
        country: values.message,
      };
      submitHandlerApi(contactData);
    },
  });

  return (
    <>
      <div className="flex justify-center my-6">
        <h1 className="text-4xl font-extrabold">Say Hello!</h1>
      </div>
      <div className="grid grid-cols-2 place-content-center">
        <div className="grid-cols">
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
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="grid-cols mt-6">
          <div className="grid-cols" style={{ width: "20rem" }}>
            <Image src={contactMe} placeholder="blur" alt="image1" />
          </div>
          <div className="grid-cols">
            <p className="break-words">
              Care about the details and consider the motion design of
              affordances to be crucial in creating effective, intuitive
              interfaces. I consider prototyping to be my weapon of choice in
              thinking through interaction models and new possibilities. I
              thrive on learning new things — I enjoy exploring new paths to
              familiar places. I really love snowboarding (I like both park and
              powder days). I also really enjoy exploring the amazing trails and
              landscapes around the bay area on my mountain bike. I’ve travelled
              a lot and enjoy seeing things from a fresh perspective :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
