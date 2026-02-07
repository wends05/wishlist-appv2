import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

function Links() {
  return (
    <div className="flex w-max flex-col space-y-2 py-5">
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
    <div className="flex items-center gap-3 text-sm">
      Created By:
      <a className="flex items-center gap-1" href="http://github.com/wends05">
        <span className="flex size-5 items-center justify-center rounded-full border border-black">
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
      <div className="fixed bottom-0 flex h-150 w-full flex-col justify-between bg-neutral-400 px-10 pt-20 pb-10">
        <Links />
        <div className="flex justify-between">
          <CreatedByArea />
          <Title />
        </div>
      </div>
      <div className="absolute top-0 h-10 w-full rounded-b-3xl bg-background" />
    </footer>
  );
}
