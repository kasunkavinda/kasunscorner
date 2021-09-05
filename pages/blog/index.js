import { useRef } from "react";

async function submitHandlerApi(enteredBlogData) {
  const response = await fetch("/api/blog-list", {
    method: "POST",
    body: JSON.stringify(enteredBlogData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(enteredBlogData);
  const data = await response.json();
  console.log(data);
}

function Blog() {
  const blogTitleInputref = useRef();
  const blogDetailsInputref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const blogTitleInput = blogTitleInputref.current.value;
    const blogDetailsInput = blogDetailsInputref.current.value;

    const blogData = {
      name: blogTitleInput,
      email: blogDetailsInput,
    };

    submitHandlerApi(blogData);
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
                        htmlFor="blogTitleInputref"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Blog Title
                      </label>
                      <input
                        type="text"
                        required
                        id="blogTitleInputref"
                        ref={blogTitleInputref}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="blogDetailsInputref"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Blog Detaills
                      </label>
                      <textarea
                        id="blogDetailsInputref"
                        name="blogDetailsInputref"
                        rows={25}
                        ref={blogDetailsInputref}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={""}
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

export default Blog;
