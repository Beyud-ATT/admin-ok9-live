import { Form, Typography } from "antd";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { FaTrashAlt } from "react-icons/fa";
import useNewsDelete from "../../../hooks/useNewsDelete";
import { toast } from "react-toastify";

function DeleteForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { id } = record || {};
  const { mutate: newsDelete } = useNewsDelete();

  function handleFinish() {
    newsDelete(id, {
      onSuccess: () => {
        closeModal();
        toast.success("Xóa tin tức thành công!");
      },
    });
  }

  return (
    <Form form={form} onFinish={handleFinish} className="!p-8">
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          Bạn muốn xóa tin này?
        </Typography.Title>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Xóa
        </button>
      </Form.Item>
    </Form>
  );
}

export default function DeleteModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-red-500 px-2 py-1 text-white"
          >
            <FaTrashAlt className="text-lg" />

            <p>Xóa</p>
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <DeleteForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
