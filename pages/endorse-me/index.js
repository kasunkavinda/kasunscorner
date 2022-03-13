import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import prisma from "../../prisma";
import toast, { Toaster } from "react-hot-toast";
import { useSession, signIn, signOut } from "next-auth/react";

const database_url = process.env.DATABBASE_URL;

export async function getStaticProps() {
  const posts = await prisma.post.findMany();
  return {
    props: {
      myEndorsementDetails: posts,
    },
    revalidate: 3600,
  };
}

function EndorseMe({ myEndorsementDetails }) {
  const { data: session } = useSession();
  const nameInputref = useRef();
  const jobInputref = useRef();
  const feedbackInputref = useRef();
  const gitInputref = useRef();
  const { data, mutate } = useSWR("/api/endorse-me", fetcher, {
    fallbackData: myEndorsementDetails,
  });
  function submitHandler(event) {
    event.preventDefault();

    const nameInput = nameInputref.current.value;
    const jobInput = jobInputref.current.value;
    const feedbackInput = feedbackInputref.current.value;
    const gitInput = gitInputref.current.value;

    const endorsementData = {
      name: nameInput,
      job: jobInput,
      feedback: feedbackInput,
      gitlink: gitInput,
    };

    async function submitHandlerApi(endorsementData) {
      const response = await fetch("/api/endorse-me", {
        method: "POST",
        body: JSON.stringify(endorsementData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      mutate();
    }

    submitHandlerApi(endorsementData);
    nameInputref.current.value = "";
    jobInputref.current.value = "";
    feedbackInputref.current.value = "";
    gitInputref.current.value = "";
    toast.success("Successfully submitted");
  }

  return (
    <>
      <div className="container mx-auto sm:px-4">
        <h1 className="text-center text-lg">
          Are you happy with my programming work?
        </h1>
        <div className="flex flex-row justify-evenly flex-wrap grid sm:grid-cols-3 items-start my-6">
          {data.map((myEndorsementDetail) => (
            <div
              className="flex-1 bg-green-400 font-grey justify-evenly mx-4 my-4 text-center rounded p-6"
              key={myEndorsementDetail.id}
            >
              <p className="mb-4">{myEndorsementDetail.feedback}</p>
              <small className="text-lg">{myEndorsementDetail.name}</small>
              <p className="text-xs font-bold text-red-700">
                {myEndorsementDetail.job}
              </p>

              <div className="text-center">
                <a
                  href={myEndorsementDetail.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
        {session && (
          <div className="sm: w-1/2 m-auto my-6">
            <div className="sm:mx-4 mb-4 text-center">
              <span className="mr-4">
                You are signed in as {session.user.name}
              </span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
            <div className="">
              <form className="pt-6 pb-8 sm:mx-4" onSubmit={submitHandler}>
                <div className="mb-4">
                  <label
                    className="block font-pink text-sm font-bold mb-2"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="text"
                    placeholder="Name"
                    ref={nameInputref}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-pink text-sm font-bold mb-2"
                    htmlFor="job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="job-title"
                    type="text"
                    placeholder="Job Title"
                    ref={jobInputref}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-pink text-sm font-bold mb-2"
                    htmlFor="feedack"
                  >
                    Feedback
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feedback"
                    name="feedback"
                    type="textarea"
                    placeholder="Feedback"
                    rows="10"
                    cols="50"
                    maxLength="300"
                    ref={feedbackInputref}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-pink text-sm font-bold mb-2"
                    htmlFor="gitlink"
                  >
                    Linkedin Profile
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gitlink"
                    type="text"
                    placeholder="Linkedin Profile"
                    ref={gitInputref}
                  />
                </div>
                <div className="text-center mt-12">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Endorse Kasun
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {!session && (
          <div className="sm:mx-4 mb-4">
            <div className="">
              <span className="mr-4">Sign into endorse me</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EndorseMe;
