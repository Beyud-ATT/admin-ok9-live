import { Form, Input, Typography } from "antd";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { TbPasswordUser } from "react-icons/tb";
import useUsersUpdatePassword from "../../../hooks/useUsersUpdatePassword";
import { toast } from "react-toastify";

function UpdatePasswordForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { id, displayName } = record || {};
  const { mutate: updatePassword } = useUsersUpdatePassword();

  function handleFinish(values) {
    const data = { userId: id, ...values };
    updatePassword(data, {
      onSuccess: () => {
        toast.success(`Cập nhật mật khẩu của ${displayName} thành công!`);
        closeModal();
      },
    });
  }

  return (
    <Form form={form} onFinish={handleFinish} className="!p-8">
      <Form.Item>
        <Typography.Title
          level={4}
          className="!text-[var(--color-brand-primary)]"
        >
          Đổi mật khẩu của {displayName}?
        </Typography.Title>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password placeholder="Nhập mật khẩu mới" />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Cập nhật mật khẩu
        </button>
      </Form.Item>
    </Form>
  );
}

export default function UpdatePasswordModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-cyan-500 px-2 py-1 text-white"
          >
            <TbPasswordUser className="text-lg" />
            <p>Cập nhật mật khẩu</p>
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdatePasswordForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
