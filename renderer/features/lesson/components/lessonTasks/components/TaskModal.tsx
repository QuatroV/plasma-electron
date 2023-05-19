import dynamic from "next/dynamic";
import useTaskStore from "../stores/tasksStore";
import TaskForm from "./TaskForm";

const Modal = dynamic(() => import("../../../components/Modal"), {
  ssr: false,
});

const TaskModal = () => {
  const isOpen = useTaskStore((state) => state.isTaskModalOpen);
  const setIsOpen = useTaskStore((state) => state.setIsTaskModalOpen);

  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <div className="flex flex-col items-center justify-center gap-4">
        <TaskForm />
      </div>
    </Modal>
  );
};

export default TaskModal;
