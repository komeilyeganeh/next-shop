import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button asChild>
        <Link href="/">Link</Link>
      </Button>
    </div>
  );
}
