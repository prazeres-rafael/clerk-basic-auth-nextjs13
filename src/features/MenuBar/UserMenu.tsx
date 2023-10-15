"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

const UserMenu = () => {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="text" sx={{ color: "white" }}>
            <PersonIcon />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default UserMenu;
