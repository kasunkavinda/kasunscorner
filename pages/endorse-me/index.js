import { useRef } from "react";
import { MongoClient } from "mongodb";
import { FaLinkedinIn } from "react-icons/fa";

async function submitHandlerApi(endorsementData) {
  const response = await fetch("/api/endorse-me", {
    method: "POST",
    body: JSON.stringify(endorsementData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(endorsementData);
  const data = await response.json();
  console.log(data);
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kasunkavinda:kasunkavinda123456@cluster0.oxj4i.mongodb.net/myPortfolio?retryWrites=true&w=majority"
  );

  const db = client.db();
  const myEndorsementDetailsCollection = db.collection("myEndorsementDetails");
  const myEndorsementDetails = await myEndorsementDetailsCollection
    .find()
    .toArray();
  client.close();

  return {
    props: {
      myEndorsementDetails: myEndorsementDetails.map((myEndorsementDetail) => ({
        name: myEndorsementDetail.name,
        job: myEndorsementDetail.job,
        feedback: myEndorsementDetail.feedback,
        gitlink: myEndorsementDetail.gitlink,
        id: myEndorsementDetail._id.toString(),
      })),
    },
    revalidate: 1,
  };

  console.log(name);
}

function EndorseMe({ myEndorsementDetails }) {
  const nameInputref = useRef();
  const jobInputref = useRef();
  const feedbackInputref = useRef();
  const gitInputref = useRef();

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

    submitHandlerApi(endorsementData);
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-evenly flex-wrap grid grid-cols-3 items-start my-6">
          {myEndorsementDetails.map((myEndorsementDetail) => (
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
                <a href={myEndorsementDetail.gitlink} className="text-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row my-6">
          <form className="pt-6 pb-8 mx-4" onSubmit={submitHandler}>
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
                GiHub Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gitlink"
                type="text"
                placeholder="GiHub Link"
                ref={gitInputref}
              />
            </div>
            <div className="flex items-center justify-between">
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
    </>
  );
}

export default EndorseMe;
