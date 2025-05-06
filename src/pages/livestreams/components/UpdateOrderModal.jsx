import { FcHighPriority } from "react-icons/fc";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Input, Typography } from "antd";
import useLivestreamUpdateOrder from "../../../hooks/useLivestreamUpdateOrder";

function UpdateOrderForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { mutate: updateOrder } = useLivestreamUpdateOrder();

  function handleFinish(values) {
    const data = {
      ...values,
      userId: record?.userId,
    };
    updateOrder(data, {
      onSuccess: closeModal,
    });
  }

  return (
    <Form form={form} onFinish={handleFinish} className="!p-8">
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          Cập nhật thứ tự ưu tiên
        </Typography.Title>
      </Form.Item>
      <Form.Item name="order" label="Thứ tự ưu tiên">
        <Input
          type="number"
          rules={[
            { required: true },
            {
              validator(_, value) {
                if (value < 0) {
                  return Promise.reject(new Error("Chỉ nhập số dương"));
                }
                return Promise.resolve();
              },
            },
          ]}
        />
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

export default function UpdateOrderModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => {
          return (
            <button
              onClick={openModal}
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-yellow-500 px-2 py-1 text-white"
            >
              <FcHighPriority className="text-lg" />
              <p>Ưu tiên</p>
            </button>
          );
        }}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdateOrderForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
