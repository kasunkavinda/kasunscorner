import { useRef } from "react";

async function submitHandlerApi(enteredContactData) {
  const response = await fetch("/api/contact-me", {
    method: "POST",
    body: JSON.stringify(enteredContactData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(enteredContactData);
  const data = await response.json();
  console.log(data);
}

function Contact(props) {
  const nameInputref = useRef();
  const emailInputref = useRef();
  const countryInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const nameInput = nameInputref.current.value;
    const emailInput = emailInputref.current.value;
    const countryInput = countryInputref.current.value;

    const contactData = {
      name: nameInput,
      email: emailInput,
      country: countryInput,
    };

    submitHandlerApi(contactData);
  }

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={submitHandler}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="nameInputref"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        id="nameInputref"
                        ref={nameInputref}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="emailInputref"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        id="emailInputref"
                        ref={emailInputref}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="countryInputref"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contry
                      </label>
                      <input
                        type="text"
                        required
                        id="countryInputref"
                        ref={countryInputref}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
