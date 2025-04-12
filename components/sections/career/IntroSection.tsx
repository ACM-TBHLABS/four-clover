"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllTeamMembers } from "@/services/api/teamMeberService";
import { TeamMember } from "@/types/teamMember";
import React from "react";
import { useState, useEffect } from "react";

const IntroSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      try {
        const members = await fetchAllTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
      setLoading(false);
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col w-full">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] uppercase">
        Our Team
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
        {teamMembers?.map((member) => (
          <div
            className="w-full flex flex-col gap-2"
            key={member._id}
          >
            <div className="w-full h-[200px] md:h-[300px] flex justify-center items-center rounded-lg rounded-tl-none overflow-hidden">
              <img
                src={urlFor(member.profile_image).url()}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
              {member.name}
            </h1>
            <h1 className="font-helvetica text-[14px] font-light">
              {member.position}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
