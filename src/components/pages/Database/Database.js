import React from "react";
import BasicCard from "../../BasicCard/BasicCard";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import ProgressStepper from "../../commons/ProgressStepper/ProgressStepper";

const steps = ["Step 1", "Step 2", "Step 3"];
const stepDescription = ["Description 1", "Description 2", "Description 3"];

const Database = () => {
  return (
    <GridWrapper>
            <BasicCard
                content={
                    <ProgressStepper
                        steps={steps}
                        stepDescription={stepDescription}
                    />
                } 
            />
        </GridWrapper>
  );
};

export default Database;
