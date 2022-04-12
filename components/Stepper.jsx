import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoWrapper from './InfoWrapper';

export default function HorizontalNonLinearStepper(props) {
  const { steps, updateEmail, ...restProps } = props;
  const { email } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [showInfo, setShowInfo] = React.useState({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const stepHasInfo = () => !!steps[activeStep]?.info;

  const handleNext = () => {
    // disclaimer step
    if (activeStep === 1) updateEmail();
    else if (stepHasInfo() && !showInfo[activeStep]) {
      const newInfo = { ...showInfo };
      newInfo[activeStep] = true;
      setShowInfo(newInfo);
      return;
    }
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const completeStep = (step) => {
    const newCompleted = completed;
    newCompleted[step] = true;
    setCompleted(newCompleted);
  };

  const handleComplete = () => {
    completeStep(activeStep);
    handleNext();
  };

  const completeAllSteps = () => {
    steps.map((_, index) => completeStep(index));
  };

  const handleFinish = () => {
    completeAllSteps();
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const StepComponent = steps[activeStep]?.component;
  const StepInfo = steps[activeStep]?.info;
  const StepStats = steps[activeStep]?.stats;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: '100%', height: '100vh' }}
    >
      <Box flexGrow={0} pt={5} pb={3}>
        <Stepper nonLinear alternativeLabel activeStep={activeStep}>
          {steps.map(({ label, hidden = false, stepLabel }, index) => (
            <Step key={label} completed={completed[index]} hidden={hidden}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                icon={stepLabel}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        flexGrow={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {allStepsCompleted() ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed TODO: add a finished results blurb
          </Typography>
        ) : stepHasInfo() ? (
          <InfoWrapper
            component={StepComponent}
            info={showInfo[activeStep] && StepInfo}
            stats={showInfo[activeStep] && StepStats}
            {...restProps}
          />
        ) : (
          <StepComponent {...restProps} />
        )}
      </Box>
      <Box flexGrow={0} pb={3}>
        {allStepsCompleted() ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button color="inherit" onClick={handleReset} sx={{ mr: 1 }}>
              Restart
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
              Next
            </Button> */}
            {activeStep !== steps.length && (
              <Button
                onClick={
                  // eslint-disable-next-line no-nested-ternary
                  isLastStep()
                    ? handleFinish
                    : completed[activeStep]
                    ? handleNext
                    : handleComplete
                }
                disabled={activeStep !== 0 && (!email || email === '')}
              >
                {isLastStep() ? 'Finish' : 'Next'}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
