import { useState, useEffect } from "react";

const EmailProtector = ({ email, label, ...props }) => {
  const [emailAddress, setEmailAddress] = useState("#");

  useEffect(() => {
    if (typeof window !== "undefined" && email?.length) {
      setEmailAddress(email.join("@"));
    }
  }, []);

  return (
    <a
      {...props}
      href={emailAddress !== "#" ? "mailto:" + emailAddress : emailAddress}
    >
      {label || emailAddress}
    </a>
  );
};

export default EmailProtector;
