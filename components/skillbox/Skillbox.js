import classses from "./Skillbox.module.css";
function Skillbox() {
  return (
    <div>
      <h1 className={classses.skillboxheader}>Skills</h1>
      <div className={`relative pt-1 border ${classses.skillboxx}`}>
        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              User Experience Design
            </span>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              NextJs
            </span>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              React Js
            </span>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              Tailwind CSS
            </span>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              HTML/cSS
            </span>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              WordPress & Woocommerce
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillbox;
