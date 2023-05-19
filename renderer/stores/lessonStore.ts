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
        id: true;
        name: true;
        content: true;
        expectedResult: true;
      };
    };
  };
}>;

export type CommentInfo = Prisma.CommentGetPayload<{
  select: {
    content: true;
    id: true;
    author: true;
    createdAt: true;
  };
}>;

interface lessonState {
  lesson?: LessonInfo;
  setLesson(course: LessonInfo): void;

  comments: CommentInfo[];
  setComments(comments: CommentInfo[]): void;
}

const useLessonStore = create<lessonState>()(
  devtools((set) => ({
    lesson: undefined,
    setLesson: (lesson) => set({ lesson: lesson }),

    comments: [],
    setComments: (comments) => set({ comments }),
  })),
);

export default useLessonStore;
