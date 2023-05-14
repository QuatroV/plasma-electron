import { type Prisma } from "@prisma/client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type LessonInfo = Prisma.LessonGetPayload<{
  select: {
    id: true;
    name: true;
    content: true;
    meta: true;
    tasks: {
      select: {
        name: true;
        content: true;
        expectedResult: true;
      };
    };
  };
}>;

interface lessonState {
  lesson?: LessonInfo;
  setLesson(course: LessonInfo): void;
}

const useLessonStore = create<lessonState>()(
  devtools((set) => ({
    lesson: undefined,
    setLesson: (lesson) => set({ lesson: lesson }),
  })),
);

export default useLessonStore;
