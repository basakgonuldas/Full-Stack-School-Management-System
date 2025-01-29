import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const ParentPage = async () => {
  const { userId } = await auth();
  const currentUserId = userId;

  const students = await prisma.student.findMany({
    where: {
      parentId: currentUserId!,
    },
  });

  return (
    <div className="flex-1 p-4 flex gap-8 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="flex flex-col gap-8 flex-grow">
        {students.map((student, index) => (
          <div
            key={student.id}
            className={`flex flex-col bg-white p-6 rounded-lg shadow-lg ${
              index % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
            }`}
          >
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Schedule ({student.name + " " + student.surname})
            </h1>
            <div className="border rounded-lg overflow-hidden">
              <BigCalendarContainer type="classId" id={student.classId} />
            </div>
          </div>
        ))}
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
