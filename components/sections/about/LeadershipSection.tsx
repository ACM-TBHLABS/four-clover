"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchLeadershipTeamMembers } from "@/services/api/teamMeberService";
import { TeamMember } from "@/types/teamMember";
import React, { useEffect, useState } from "react";

const LeadershipSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      try {
        const members = await fetchLeadershipTeamMembers();
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
    <div className="px-6 md:px-[50px] lg:px-[150px] md:py-[50px] lg:py-[100px] flex flex-col justify-start items-start">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[64px] whitespace-nowrap">
        Leadership
      </h1>
      <div className="w-full h-fit md:h-[500px] flex flex-col md:flex-row justify-start items-stretch gap-8 overflow-x-scroll overflow-y-hidden">
        {teamMembers.map((member) => (
          <div
            key={member._id}
            className="w-full md:min-w-[600px] h-full flex flex-col p-3 md:p-5 justify-between items-start bg-gray-100 gap-8"
          >
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-2">
              <div className="w-full flex justify-between items-start gap-2">
                <div className="w-[65px] h-[65px] flex justify-center items-center bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={urlFor(member.profile_image).url()}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 w-full h-full flex flex-col justify-start items-start">
                  <h1 className="font-helvetica font-normal text-[24px] md:text-[32px] whitespace-nowrap">
                    {member.name}
                  </h1>
                  <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                    {member.position}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start items-start">
                <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                  {member.bio}
                </p>
              </div>
            </div>
            {member.quote && (
              <p className="font-helvetica font-normal text-[24px] md:text-[32px] leading-[1.2]">
                “{member.quote}”{" "}
                <span className="font-helvetica font-light text-[18px] leading-[1.2] italic">
                  - {member.name}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
