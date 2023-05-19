import { useState } from "react";

import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import useLessonStore from "../../../../../stores/lessonStore";
import { api } from "../../../../../utils/api";

const LessonCommentInputForm = () => {
  const lessonId = useLessonStore((state) => state.lesson?.id);
  const setComments = useLessonStore((state) => state.setComments);
  const [commentContent, setCommentContent] = useState("");

  const postCommentMutation = api.comment.create.useMutation();

  const handlePostComment = async () => {
    if (!lessonId || !commentContent) {
      return null;
    }
    const updatedComments = await postCommentMutation.mutateAsync({
      lessonId,
      content: commentContent,
    });

    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <Input
        multiline
        className="h-24 border"
        type="text"
        placeholder="Write a comment here..."
        value={commentContent}
        onChange={(e: any) => setCommentContent(e.target.value)}
      />
      <Button
        className="w-min whitespace-pre border bg-emerald-600 px-2 py-1 text-white"
        type="submit"
        onClick={handlePostComment}
      >
        Post comment
      </Button>
    </div>
  );
};

export default LessonCommentInputForm;
