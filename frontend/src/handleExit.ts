
type HandleExitParams = {
  isConfirmingExit: boolean;
  setIsConfirmingExit: (v: boolean) => void;
  isConfirmingExit_time: number | null;
  setIsConfirmingExit_time: (t: number) => void;
  setInMatch: (v: boolean) => void;
};

const handleExit = ({
  isConfirmingExit,
  setIsConfirmingExit,
  isConfirmingExit_time,
  setIsConfirmingExit_time,
  setInMatch,
}: HandleExitParams) => {
  if (!isConfirmingExit) {
    window.alert(
      "Are you sure you want to exit the match? Click exit again within 5 seconds to confirm."
    );
    setIsConfirmingExit(true);
    setIsConfirmingExit_time(Date.now());
  } else if (
    isConfirmingExit_time &&
    Date.now() - isConfirmingExit_time < 5000
  ) {
    setInMatch(false);
    setIsConfirmingExit(false);
  } else {
    window.alert("Exit confirmation timed out, please confirm again.");
    setIsConfirmingExit(false);
  }
};

export default handleExit;
