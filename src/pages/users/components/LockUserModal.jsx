import { FaLock, FaLockOpen } from "react-icons/fa";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Input, Select, Typography } from "antd";
import useUsersLock from "../../../hooks/useUsersLock";
import { toast } from "react-toastify";
import { LOCK_REASON } from "../../../utils/constants";
import { useState } from "react";
import useUsersUnlock from "../../../hooks/useUsersUnlock";

function LockUserForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { id, displayName } = record || {};
  const { mutate: lockUser } = useUsersLock();

  const [current, setCurrent] = useState();

  function handleFinish(values) {
    lockUser(
      { ...values, userId: id },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Đã khóa người dùng!");
        },
      },
    );
  }

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      className="!p-8"
    >
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          Khóa người dùng {displayName}?
        </Typography.Title>
      </Form.Item>
      <Form.Item name="lockType" label="Lý do">
        <Select
          value={current}
          options={[
            { value: LOCK_REASON.SPAM.value, label: LOCK_REASON.SPAM.label },
            {
              value: LOCK_REASON.BAD_CONTENT.value,
              label: LOCK_REASON.BAD_CONTENT.label,
            },
            { value: LOCK_REASON.OTHER.value, label: LOCK_REASON.OTHER.label },
          ]}
          onChange={(value) => {
            setCurrent(value);
          }}
        />
      </Form.Item>
      {current === LOCK_REASON.OTHER.value && (
        <Form.Item name="reason" label="Lý do khác">
          <Input.TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
        </Form.Item>
      )}
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Khóa tài khoản
        </button>
      </Form.Item>
    </Form>
  );
}

function UnlockUserForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { id, displayName } = record || {};
  const { mutate: unlockUser } = useUsersUnlock();

  function handleFinish() {
    unlockUser(
      { userId: id },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Đã mở khóa người dùng!");
        },
      },
    );
  }

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleFinish}
      className="!p-8"
    >
      <Form.Item>
        <Typography.Title
          level={3}
          className="!text-[var(--color-brand-primary)]"
        >
          Mở khóa người dùng {displayName}?
        </Typography.Title>
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Mở khóa tài khoản
        </button>
      </Form.Item>
    </Form>
  );
}

export default function LockUserModal({ record }) {
  const { locked } = record;
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className={`flex items-center justify-center gap-1 rounded-lg px-2 py-1 font-semibold text-white ${!locked ? "bg-red-500" : "bg-green-500"}`}
          >
            {!locked ? <FaLock /> : <FaLockOpen />}
            {!locked ? "Khóa" : "Mở"}
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        {locked ? (
          <UnlockUserForm record={record} />
        ) : (
          <LockUserForm record={record} />
        )}
      </CompoundModal.Content>
    </CompoundModal>
  );
}
