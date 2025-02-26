import { useEffect, useRef } from "react";

const LinksBtn = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      
      script.onerror = (error) => {
        console.error("Error loading Devfolio SDK:", error);
      };
      
      script.onload = () => {
        console.log("Devfolio SDK Loaded Successfully");
      };
      
      document.body.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (
    <div className="butHolder">
      <div
        className="apply-button"
        data-hackathon-slug="hackatron-k"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      />
    </div>
  );
};

export default LinksBtn;
