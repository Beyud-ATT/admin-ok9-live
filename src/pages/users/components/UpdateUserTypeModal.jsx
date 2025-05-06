import { FaUserPen } from "react-icons/fa6";
import { CompoundModal, useModal } from "../../../components/CompoundModal";
import { Form, Select, Typography } from "antd";
import { USER_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import { useState } from "react";
import useUsersUpdateType from "../../../hooks/useUsersUpdateType";

function UpdateUserTypeForm({ record }) {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { id, displayName } = record || {};
  const { mutate: updateUserType } = useUsersUpdateType();

  const [current, setCurrent] = useState();

  function handleFinish(values) {
    updateUserType(
      { ...values, userId: id },
      {
        onSuccess: () => {
          closeModal();
          toast.success("Đã cập nhật người dùng!");
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
          Thay đổi loại người dùng {displayName}?
        </Typography.Title>
      </Form.Item>
      <Form.Item name="userType" label="Loại người dùng">
        <Select
          value={current}
          options={[
            { value: USER_TYPE.IDOL.value, label: USER_TYPE.IDOL.label },
            {
              value: USER_TYPE.USER.value,
              label: USER_TYPE.USER.label,
            },
          ]}
          onChange={(value) => {
            setCurrent(value);
          }}
        />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-3 py-1 text-white"
        >
          Cập nhật tài khoản
        </button>
      </Form.Item>
    </Form>
  );
}

export default function UpdateUserTypeModal({ record }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => {
          return (
            <button
              onClick={openModal}
              className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-fuchsia-500 px-2 py-1 text-white"
            >
              <FaUserPen className="text-lg" />
              <p>Đổi loại người dùng</p>
            </button>
          );
        }}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UpdateUserTypeForm record={record} />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
