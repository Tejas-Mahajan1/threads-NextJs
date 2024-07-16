import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <center className="my-48">
      <SignIn />;
    </center>
  )
}