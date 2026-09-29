import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const user = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
  };
  localStorage.setItem("user", JSON.stringify(user));
  return redirect("/profile");
}
