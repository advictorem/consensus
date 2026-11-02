import Image from "next/image";
import type { TeamMember } from "@/content/types";

export default function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article className="group" data-reveal style={{ ["--reveal-delay" as string]: `${(index % 3) * 100}ms` }}>
      <div className="relative aspect-[4/5] overflow-hidden bg-near-black">
        {member.portrait ? (
          <Image
            src={member.portrait.src}
            alt={member.portrait.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale transition-[transform,filter] duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.03] group-hover:grayscale-[40%]"
            style={{ objectPosition: member.portrait.position ?? "50% 20%" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center" data-placeholder="portrait">
            <span className="display text-[4rem] text-white/15">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="t-label absolute bottom-4 left-4 !text-[0.62rem] text-white/30">Portrait pending</span>
          </div>
        )}
        <div className="gradient-rule absolute inset-x-0 bottom-0 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
      </div>
      <h3 className="display mt-5 text-[1.75rem] leading-none">{member.name}</h3>
      <p className="t-label mt-2 text-white/55">{member.title}</p>
      <p className="mt-4 text-[0.95rem] text-white/70">{member.bio}</p>
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="link-line t-label mt-4 inline-block !text-[0.7rem] text-white/60">
          LinkedIn
        </a>
      )}
    </article>
  );
}
