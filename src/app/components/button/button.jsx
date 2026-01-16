import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function Button({ text, href }) {
  return (
    <button className="relative z-50">
      <Link
        href={href}
        className="group border border-[#979797] inline-flex items-center gap-5 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
      >
        <span className="text-nowrap relative top-[0.5px] font-sora text-[14px] xl:text-[20px]">
          {text}
        </span>
        <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
          <LiaLongArrowAltRightSolid className="lg:w-4 lg:h-4 xl:w-6 xl:h-6 group-hover:text-black" />
        </span>
      </Link>
    </button>
  );
}
