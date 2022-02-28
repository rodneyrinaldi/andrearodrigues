import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    console.log(navigator.userAgent);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  return { deviceType };
};

export default useDeviceDetect;
