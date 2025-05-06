import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Typography } from "antd";
import useUsersBanChat from "../../../hooks/useUsersBanChat";
import { toast } from "react-toastify";

function BanChatForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { displayName, id, chatBlocked } = record || {};
  const { mutate: banChat } = useUsersBanChat();

  function handleFinish() {
    banChat(
      { userId: id },
      {
        onSuccess: () => {
          closeModal();
          toast.success(
            "Đã " + (chatBlocked ? "mở" : "cấm") + " chat người dùng!",
          );
        },
      },
    );
  }

  return (
    <Form form={form} onFinish={handleFinish} className="!p-8">
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          {chatBlocked ? "Mở" : "Cấm"} chat người dùng {displayName}?
        </Typography.Title>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          {chatBlocked ? "Mở" : "Cấm"} chat
        </button>
      </Form.Item>
    </Form>
  );
}

export default function BanChatModal({ record }) {
  const { chatBlocked } = record;
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className={`flex items-center justify-center gap-1 rounded-lg px-2 py-1 font-semibold text-white ${!chatBlocked ? "bg-red-500" : "bg-green-500"}`}
          >
            {!chatBlocked ? (
              <HiSpeakerXMark className="text-xl" />
            ) : (
              <HiSpeakerWave className="text-xl" />
            )}
            {!chatBlocked ? "Mute" : "Unmute"}
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <BanChatForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
