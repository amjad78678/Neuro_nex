"use client";

import { usePathname } from "next/navigation";
import TeacherSidebar from "@/components/Teacher/Common/TeacherSidebar";

export default function TeacherLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar =
    !pathname?.startsWith("/teacher/login") &&
    !pathname?.startsWith("/teacher/signup");

  return (
    <div className="p-5 grid grid-cols-12 bg-gray-100">
      {showSidebar && (
        <div className="col-span-2">
          <TeacherSidebar />
        </div>
      )}
      <div className={showSidebar ? "col-span-10 px-6" : "col-span-12"}>
        {children}
      </div>
    </div>
  );
}
