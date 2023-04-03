import React, { FormEvent, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import prisma from "../../prisma";
import toast from "react-hot-toast";
import { useGetEndorsementsQuery } from "../../feautures/endorsementApiSlice";
import Loader from "../../components/loader/Loader";
import ErrorMsg from "../../components/errorMessage/ErrorMsg";
import useErrorValidationHook from "../../hooks/useErrorValidationHook";
import { SUCCESS_CODE } from "../../constants/constants";

const EndorseMe = () => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [feedback, setFeedback] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const { data: endorsementData, error, isLoading } = useGetEndorsementsQuery();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isNameValid = useErrorValidationHook(name, "name");
    const isJobTitleValid = useErrorValidationHook(jobTitle, "jobTitle");
    const isFeedbackValid = useErrorValidationHook(feedback, "feedback");
    const isLinkedinValid = useErrorValidationHook(linkedin, "linkedin");

    if (isNameValid || isJobTitleValid || isFeedbackValid || isLinkedinValid) {
      toast.error("Ouch🙄seems you missed something.");
    } else {
      const endorsementData = {
        name: name,
        job: jobTitle,
        feedback: feedback,
        gitlink: linkedin,
      };

      const endorsementSubmitHandlerApi = async (endorsementData) => {
        const response = await fetch("/api/endorse-me", {
          method: "POST",
          body: JSON.stringify(endorsementData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status === SUCCESS_CODE) {
              toast.success("Yahoo🔥successfully submitted!");
              setName("");
              setJobTitle("");
              setFeedback("");
              setLinkedin("");
            } else {
              toast.error("Ouch😖seems there is a issue. Please try again!");
            }
          })
          .catch((error) => {
            toast.error("Ouch😖seems there is a issue. Please try again!");
          });
      };
      endorsementSubmitHandlerApi(endorsementData);
    }
  };

  return (
    <>
      <div className="container mx-auto sm:px-4">
        <h1 className="text-center text-lg">
          Happy souls with my work<span>😀</span>
        </h1>

        {isLoading && (
          <div className="grid sm:grid-cols text-center">
            <Loader />
          </div>
        )}

        {error && <ErrorMsg />}

        <div className="grid sm:grid-cols-3 items-start my-6 text-center">
          {endorsementData &&
            endorsementData.map((myEndorsementDetail) => (
              <div
                className="flex-1 bg-green-400 font-grey justify-evenly mx-4 my-4 text-center rounded p-6"
                key={myEndorsementDetail.id}
              >
                <p className="mb-4">{myEndorsementDetail.feedback}</p>
                <small className="text-lg">{myEndorsementDetail["name"]}</small>
                <p className="text-xs font-bold text-red-700">
                  {myEndorsementDetail["job"]}
                </p>

                <div className="text-center">
                  <a
                    href={myEndorsementDetail["gitlink"]}
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
        <div className="sm: w-1/2 m-auto my-6">
          <div className="">
            <form
              className="pt-6 pb-8 sm:mx-4"
              onSubmit={(e: FormEvent<HTMLFormElement>) => submitHandler(e)}
            >
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                  onChange={(e) => setJobTitle(e.target.value)}
                  value={jobTitle}
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
                  placeholder="Feedback"
                  rows={10}
                  cols={50}
                  maxLength={300}
                  onChange={(e) => setFeedback(e.target.value)}
                  value={feedback}
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
                  type="url"
                  placeholder="Use this format: https://www.linkedin.com/in/kasun-kavinda"
                  onChange={(e) => setLinkedin(e.target.value)}
                  value={linkedin}
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
      </div>
    </>
  );
};

export default EndorseMe;

export async function getStaticProps() {
  const posts = await prisma.post.findMany();
  return {
    props: {
      myEndorsementDetails: posts,
    },
    revalidate: 1,
  };
}
