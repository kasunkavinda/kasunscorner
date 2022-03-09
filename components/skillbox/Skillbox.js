import classses from "./Skillbox.module.css";
function Skillbox() {
  return (
    <div>
      <h1 className={classses.skillboxheader}>Skills</h1>
      <div className={`relative pt-1 border ${classses.skillboxx}`}>
        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              NextJS
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              ReactJS
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Angular
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Typescript
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              NodeJS
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-2/4"></div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              User Experience Design
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillbox;
