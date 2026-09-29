import { useLoaderData } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import UserAccount from "./UserAccount";

function Profile() {
  const user = useLoaderData();
  if (!user) return <CreateAccount />;
  return <UserAccount user={user} />;
}

export default Profile;
