import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";


const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-Sky py-3 px-3 rounded-md flex gap-3 w-full lg:w-2/3">
            <div className="w-1/5">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={72}
                height={72}
                className="w-18 h-18 rounded-full object-cover"
              />
            </div>
            <div className="w-4/5 flex flex-col justify-between gap-1">
              <h1 className="text-base font-semibold">Cameron Moran</h1>
              <p className="text-xs text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-1 flex-wrap text-xs font-medium">
                <div className="flex items-center gap-1">
                  <Image src="/blood.png" alt="" width={10} height={10} />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/date.png" alt="" width={10} height={10} />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/mail.png" alt="" width={10} height={10} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/phone.png" alt="" width={10} height={10} />
                  <span>+1234567</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex flex-wrap gap-2 w-full lg:w-1/3">
            {/* CARD */}
            <div className="bg-white p-3 rounded-md flex gap-2 w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <div>
                <h1 className="text-sm font-semibold">90%</h1>
                <span className="text-xs text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 rounded-md flex gap-2 w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <div>
                <h1 className="text-sm font-semibold">6th</h1>
                <span className="text-xs text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 rounded-md flex gap-2 w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <div>
                <h1 className="text-sm font-semibold">18</h1>
                <span className="text-xs text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 rounded-md flex gap-2 w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
              <div>
                <h1 className="text-sm font-semibold">6A</h1>
                <span className="text-xs text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-SkyLight" 
          href={`/list/lessons?classId=${2}`}
          >Student's Lessons</Link>
          <Link className="p-3 rounded-md bg-PurpleLight" href={`/list/teachers?classId=${2}`}>Student's Teachers</Link>
          <Link  className="p-3 rounded-md bg-yellow-200"
          href={`/list/exams?classId=${2}`}>
            Student's Exams
            </Link>
          <Link className="p-3 rounded-md bg-pink-50"
          href={`/list/assignments?classId=${2}`}>
            Student's Assignments</Link>
          <Link className="p-3 rounded-md bg-SkyLight" 
           href={`/list/results?studentId=${"student2"}`}
          >Student's Results</Link>
        </div>
      </div>
      <Performance/>
      <Announcements/>
      </div>
    </div>
  );
};

export default SingleStudentPage;
