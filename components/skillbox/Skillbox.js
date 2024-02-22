import React from "react";
import classses from "./Skillbox.module.css";
import { styled } from "@stitches/react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: "relative",
  overflow: "hidden",
  background: "white",
  borderRadius: "99999px",
  height: 10,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: "#3360FF",
  height: "100%",
  transition: "width 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});

// Exports
export const Progress = StyledProgress;
export const ProgressIndicator = StyledIndicator;
function Skillbox() {
  const [progress1, setProgress1] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress1(80), 500), []);
  const [progress2, setProgress2] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress2(80), 500), []);
  const [progress3, setProgress3] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress3(80), 500), []);
  const [progress4, setProgress4] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress4(70), 500), []);
  const [progress5, setProgress5] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress5(75), 500), []);
  const [progress6, setProgress6] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress6(75), 500), []);
  const [progress7, setProgress7] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress7(80), 500), []);
  const [progress8, setProgress8] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress8(80), 500), []);
  const [progress9, setProgress9] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress9(80), 500), []);
  const [progress10, setProgress10] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress10(80), 500), []);
  const [progress11, setProgress11] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress11(80), 500), []);
  return (
    <div>
      <h1 className={classses.skillboxheader}>Skills</h1>

      <div className={`relative pt-1 border ${classses.skillboxx}`}>
        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Node.js
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress1}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Express.js
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress2}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Fastify
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress3}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Nest.js
            </span>
            <Progress value={70}>
              <ProgressIndicator style={{ width: `${progress4}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Next.js
            </span>
            <Progress value={75}>
              <ProgressIndicator style={{ width: `${progress5}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              React
            </span>
            <Progress value={75}>
              <ProgressIndicator style={{ width: `${progress6}%` }} />
            </Progress>
          </div>
        </div>
      

      <div>
        <div>
          <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
            PostgreSQL
          </span>
          <Progress value={80}>
            <ProgressIndicator style={{ width: `${progress7}%` }} />
          </Progress>
        </div>
      </div>

      <div>
        <div>
          <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
            MySQL
          </span>
          <Progress value={80}>
            <ProgressIndicator style={{ width: `${progress8}%` }} />
          </Progress>
        </div>
      </div>

      <div>
        <div>
          <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
            Typescript
          </span>
          <Progress value={80}>
            <ProgressIndicator style={{ width: `${progress9}%` }} />
          </Progress>
        </div>
      </div>

      <div>
        <div>
          <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
            Prisma
          </span>
          <Progress value={80}>
            <ProgressIndicator style={{ width: `${progress10}%` }} />
          </Progress>
        </div>
      </div>

      <div>
        <div>
          <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
            Tailwind CSS
          </span>
          <Progress value={80}>
            <ProgressIndicator style={{ width: `${progress11}%` }} />
          </Progress>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Skillbox;
