import { useEffect } from "react";

import useLessonStore from "../../../../../stores/lessonStore";
import { api } from "../../../../../utils/api";

type Props = {
  commentsOpened: boolean;
};

const LessonCommentsItems = ({ commentsOpened }: Props) => {
  const lesson = useLessonStore((state) => state.lesson);
  const setComments = useLessonStore((state) => state.setComments);
  const { data } = api.comment.getAll.useQuery(
    { lessonId: lesson?.id || "" },
    { enabled: !!lesson?.id },
  );

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);

  const comments = useLessonStore((state) => state.comments);

  return (
    <div className="flex flex-col gap-2 text-sm">
      {comments.map((comment) => (
        <div className="rounded bg-gray-100 p-2" key={comment.id}>
          <div className="flex justify-between  text-gray-700 ">
            <div className="cursor-pointer font-bold hover:underline">
              {comment.author.name} {comment.author.surname}
            </div>
            <div className="text-gray-500">
              {comment.createdAt.toLocaleString()}
            </div>
          </div>
          <div>{comment.content}</div>
        </div>
      ))}
    </div>
  );
};

export default LessonCommentsItems;
