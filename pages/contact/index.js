import { useFormik } from "formik";

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
      <div className="flex justify-center my-6">
        <form className="pt-6 pb-8 mx-4" onSubmit={formik.handleSubmit}>
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
    </>
  );
}

export default Contact;
