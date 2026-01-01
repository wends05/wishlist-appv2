import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

function Links() {
  return (
    <div className="py-5 space-y-2 flex flex-col w-max">
      <Link to="/">
        <Button variant={"link"}>Home</Button>
      </Link>
      <Link to="/about">
        <Button variant={"link"}>About</Button>
      </Link>
      <SignedIn>
        <Link to="/home">
          <Button>Go to Dashboard</Button>
        </Link>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button variant={"link"}>Get Started</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
function CreatedByArea() {
  return (
    <div className="flex items-center text-sm gap-3">
      Created By:
      <a href="http://github.com/wends05" className="flex items-center gap-1">
        <span className="rounded-full border size-5 border-black flex items-center justify-center">
          <GithubLogoIcon />
        </span>
        <h4>wends05</h4>
      </a>
    </div>
  );
}

function Title() {
  return <h1 className="text-5xl">Wish App</h1>;
}

export default function Footer() {
  return (
    <footer
      className="relative h-150"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 pt-20 pb-10 px-10 h-150 w-full flex flex-col bg-neutral-400 justify-between">
        <Links />
        <div className="flex justify-between ">
          <CreatedByArea />
          <Title />
        </div>
      </div>
      <div className="absolute top-0 h-10 w-full rounded-b-3xl bg-background" />
    </footer>
  );
}
