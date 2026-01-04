import { useAuth } from "@clerk/clerk-react";
import { SpinnerIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { headerVariants } from "@/lib/animations/base";

export default function Header() {
  const { isLoaded, isSignedIn } = useAuth();
  return (
    <motion.nav
      animate={"in"}
      className="flex w-full justify-between p-4"
      initial={"initial"}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      variants={headerVariants}
    >
      <div>Wishlist App</div>
      <div>
        <Button variant={"secondary"}>
          {!isLoaded ? (
            <SpinnerIcon />
          ) : isSignedIn ? (
            <Link to="/home">Home</Link>
          ) : (
            <Link to="/sign-in/$">Sign In</Link>
          )}
        </Button>
      </div>
    </motion.nav>
  );
}
