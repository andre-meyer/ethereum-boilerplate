import React, { useEffect, useState } from "react";
import { getOwner, getAccount } from "../api";

const OnlyForOwner = ({ children }) => {
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    (async () => {
      const currentOwner = await getOwner();
      const currentAccount = await getAccount();

      setIsOwner(currentOwner === currentAccount);
    })();
  }, [])

  if (!isOwner) return null;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default OnlyForOwner;