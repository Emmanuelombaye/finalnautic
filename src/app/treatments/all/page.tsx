import { redirect } from "next/navigation";

/** Pricing lives on /treatments — keep this path for old links. */
export default function AllTreatmentsRedirect() {
  redirect("/treatments");
}
