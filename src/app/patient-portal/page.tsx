import { redirect } from "next/navigation";

export default function PatientPortalRedirect() {
  redirect("/assessment");
}
