import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    }); 
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []); //empty dep array means it will call single time after component render
  return onlineStatus;
};

export default useOnlineStatus;
