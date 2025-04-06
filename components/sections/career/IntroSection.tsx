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
    <div className="flex flex-col gap-[24px] py-[100px] w-full">
      <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase">
        Our Team
      </h1>
      <div className="flex flex-wrap md:flex-row justify-start gap-3">
        {teamMembers?.map((member) => (
          <div
            className="w-[45%] md:w-1/5 flex flex-col gap-[8px]"
            key={member._id}
          >
            <img
              src={urlFor(member.profile_image).url()}
              alt={member.name}
              className="w-full md:h-[300px] object-cover rounded-md"
            />
            <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
              {member.name}
            </h1>
            <h1 className="font-helvetica text-[14px] font-light">
              {member.position}
            </h1>
          </div>
        ))}
                {teamMembers?.map((member) => (
          <div
            className="w-[45%] md:w-1/5 flex flex-col gap-[8px]"
            key={member._id}
          >
            <img
              src={urlFor(member.profile_image).url()}
              alt={member.name}
              className="w-full md:h-[300px] object-cover rounded-md"
            />
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
