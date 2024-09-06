import TeacherSidebar from "@/components/Teacher/Common/TeacherSidebar";

export const metadata = {
  title: "Teacher Portal - NeuroNex",
  description: "Created by Amjad Ali",
};

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 grid grid-cols-12 bg-gray-100">
      <div className="col-span-2">
        <TeacherSidebar />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
}