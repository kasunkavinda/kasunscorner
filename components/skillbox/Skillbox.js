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
  React.useEffect(() => setTimeout(() => setProgress3(60), 500), []);
  const [progress4, setProgress4] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress4(70), 500), []);
  const [progress5, setProgress5] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress5(50), 500), []);
  const [progress6, setProgress6] = React.useState(13);
  React.useEffect(() => setTimeout(() => setProgress6(80), 500), []);
  return (
    <div>
      <h1 className={classses.skillboxheader}>Skills</h1>

      <div className={`relative pt-1 border ${classses.skillboxx}`}>
        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              NextJS
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress1}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              ReactJS
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress2}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Angular
            </span>
            <Progress value={60}>
              <ProgressIndicator style={{ width: `${progress3}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              Typescript
            </span>
            <Progress value={70}>
              <ProgressIndicator style={{ width: `${progress4}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              NodeJS
            </span>
            <Progress value={50}>
              <ProgressIndicator style={{ width: `${progress5}%` }} />
            </Progress>
          </div>
        </div>

        <div>
          <div>
            <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-teal-600 bg-teal-200">
              User Experience Design
            </span>
            <Progress value={80}>
              <ProgressIndicator style={{ width: `${progress6}%` }} />
            </Progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillbox;
