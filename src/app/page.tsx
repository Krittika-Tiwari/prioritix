
import { Button } from "@/components/ui/button";
import { createAdminClient } from "@/lib/appwrite";
export default function Home() {
  console.log(createAdminClient);
  return (
    <div className="">
      <Button disabled size={"lg"} variant={"primary"}>
        Heelo
      </Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"muted"}>muted</Button>
      <Button variant={"teritrary"}>teritrary</Button>
    </div>
  );
}
