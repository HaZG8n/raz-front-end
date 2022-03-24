import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Routing(props) {
  // user: seller || user
  // type: public || private

  const router = useRouter();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("user", user);
  });
  return <></>;
}

export default Routing;
