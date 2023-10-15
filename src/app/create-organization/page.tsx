"use client";
import { CreateOrganization } from "@clerk/nextjs";
import Box from "@mui/material/Box";

export default function CreateOrganizationPage() {
  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <CreateOrganization />
    </Box>
  );
}
