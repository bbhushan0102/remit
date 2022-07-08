import React from "react";
import ActivityDetector from "activity-detector";
// import "./styles.css";

function useIdle(options) {
  const [isIdle, setIsIdle] = React.useState(false);

  React.useEffect(() => {
    const activityDetector = ActivityDetector(options);
    activityDetector.on("idle", () => setIsIdle(true));
    activityDetector.on("active", () => setIsIdle(false));

    return () => activityDetector.stop();
  }, []);
  return isIdle;
}

export default function IdleTime() {
  const isIdle = useIdle({ timeToIdle:  30000});

  return <div>{isIdle ? `darkTheme` : `lightTheme`}</div>;
}
