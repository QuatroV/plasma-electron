import LessonComments from "./lessonComments/components/LessonComments";
import LessonInfo from "./lessonInfo/components/LessonInfo";
import LessonTasks from "./lessonTasks/components/LessonTasks";

const LessonMainView = () => {
  return (
    <main className="bg-mesh-gradient scrollbar font-rubik flex h-full flex-auto select-text flex-col gap-2 overflow-y-auto overflow-x-hidden bg-white p-2 pb-36 ">
      <LessonInfo />
      <LessonTasks />
      <LessonComments />
    </main>
  );
};

export default LessonMainView;
