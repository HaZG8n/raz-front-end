import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Routing(props) {
  // user: seller || user
  // type: public || private

  const router = useRouter();
  const user = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.token);
  console.log("PROPS", props.type);

  useEffect(() => {
    if (props.type.toLowerCase() === "public") {
      if (token) {
        return router.replace("/");
      }
    } else if (props.type.toLowerCase() === "private") {
      if (!token) {
        return router.replace("/auth");
      } else {
        if (props.user.toLowerCase() === "all") {
          if (!token) {
            return router.replace("/auth");
          }
        } else if (props.user.toLowerCase() === "user") {
          if (user.userData.role !== "user") {
            return router.replace("/");
          }
        } else if (props.user.toLowerCase() === "seller") {
          if (user.userData.role !== "seller") {
            return router.replace("/");
          }
        }
      }
    }
  });
  return <></>;
}

export default Routing;
