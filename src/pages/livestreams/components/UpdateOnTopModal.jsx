import { RiUnpinFill } from "react-icons/ri";
import { TiPin } from "react-icons/ti";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Typography } from "antd";
import useLivestreamUpdateOnTop from "../../../hooks/useLivestreamUpdateOnTop";
import { toast } from "react-toastify";

function UpdateOnTopForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { title, userId, onTop } = record || {};
  const { mutate: updateOnTop } = useLivestreamUpdateOnTop();

  function handleFinish() {
    updateOnTop(
      { userId },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Đã " + (onTop ? "gỡ ghim" : "ghim") + "!");
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
          Ghim phòng "{title}" lên top?
        </Typography.Title>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          {onTop ? "Gỡ ghim" : "Ghim"}
        </button>
      </Form.Item>
    </Form>
  );
}

export default function UpdateOnTopModal({ record }) {
  const { onTop } = record || {};

  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => {
          return (
            <button
              onClick={openModal}
              className={`flex cursor-pointer items-center justify-center gap-1 rounded-lg ${onTop ? "bg-amber-600" : "bg-cyan-500"} px-2 py-1 text-white`}
            >
              {onTop ? (
                <RiUnpinFill className="text-xl" />
              ) : (
                <TiPin className="text-xl" />
              )}
              <p>{onTop ? "Gỡ ghim" : "Ghim"}</p>
            </button>
          );
        }}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdateOnTopForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
