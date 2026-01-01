import { Button } from "@/components/ui/button";
import { headerVariants } from "@/lib/animations/base";
import { useAuth } from "@clerk/clerk-react";
import { SpinnerIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Header() {
  const { isLoaded, isSignedIn } = useAuth();
  return (
    <motion.nav
      initial={"initial"}
      animate={"in"}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      variants={headerVariants}
      className="w-full flex justify-between p-4"
    >
      <div>Wishlist App</div>
      <div>
        <Button variant={"secondary"}>
          {!isLoaded && (
            <>
              <SpinnerIcon />
            </>
          )}
          {isLoaded && isSignedIn ? (
            <Link to="/home">Home</Link>
          ) : (
            <Link to="/sign-in/$">Sign In</Link>
          )}
        </Button>
      </div>
    </motion.nav>
  );
}
