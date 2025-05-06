import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Typography } from "antd";
import { PiGearSixBold } from "react-icons/pi";
import useLivestreamUpdateDefault from "../../../hooks/useLivestreamUpdateDefault";
import { toast } from "react-toastify";

function UpdateDefaultForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { title, userId } = record || {};
  const { mutate: updateDefault } = useLivestreamUpdateDefault();

  function handleFinish() {
    updateDefault(
      { userId },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Cập nhật thành công!");
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
          Đặt "{title}" mặc định?
        </Typography.Title>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Lưu
        </button>
      </Form.Item>
    </Form>
  );
}

export default function UpdateDefaultModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => {
          return (
            <button
              onClick={openModal}
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-green-700 px-2 py-1 text-white"
            >
              <PiGearSixBold className="text-xl" />
              <p>Mặc định</p>
            </button>
          );
        }}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdateDefaultForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
