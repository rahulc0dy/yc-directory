import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupCardType } from "@/components/StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <div>
      {startups.length > 0 ? (
        startups.map((startup: StartupCardType) => (
          <StartupCard post={startup} key={startup._id} />
        ))
      ) : (
        <p className="no-result">No posts found.</p>
      )}
    </div>
  );
};
export default UserStartups;
