import TeacherLayoutContent from "@/components/Teacher/Common/TeacherLayoutComponent";

export const metadata = {
  title: "Teacher Portal - NeuroNex",
  description: "Created by Amjad Ali",
};

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TeacherLayoutContent>{children}</TeacherLayoutContent>;
}
