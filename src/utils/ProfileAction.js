import { redirect } from "react-router-dom";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const user = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    phoneNumber: formData.get("phoneNumber"),
    address: formData.get("address"),
  };

  const errors = {};
  if (!isValidPhone(user.phoneNumber))
    errors.phoneNumber =
      "Please write a valid phone number. Contact maybe needed for your orders.";
  if (Object.keys(errors).length > 0) return errors;

  localStorage.setItem("user", JSON.stringify(user));
  return redirect("/profile");
}
