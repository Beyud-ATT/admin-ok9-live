import { Form, Input, Select, Typography } from "antd";
import { CompoundModal } from "../../../components/CompoundModal";
import { FaPlus } from "react-icons/fa";
import { useModal } from "../../../components/CompoundModal";
import { toast } from "react-toastify";
import useBlockWordAdd from "../../../hooks/useBlockWordAdd";
import { WORD_TYPE } from "../../../utils/constants";

function CreateForm() {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const { mutate: addBlockWord } = useBlockWordAdd();

  function handleFinish(values) {
    const data = {
      ...values,
    };
    addBlockWord(data, {
      onSuccess: () => {
        closeModal();
        form.resetFields();
        toast.success("Đã tạo tin tức thành công!");
      },
    });
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
          Tạo tin tức mới
        </Typography.Title>
      </Form.Item>
      <Form.Item name="wordType" label="Loại vi phạm">
        <Select
          options={Object.values(WORD_TYPE).map((item) => ({
            value: item.value,
            label: item.label,
          }))}
        />
      </Form.Item>
      <Form.Item name="word" label="Chữ">
        <Input.TextArea autoSize={{ minRows: 2, maxRows: 2 }} />
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

export default function CreateModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-700 px-2 py-1 text-white"
          >
            <FaPlus />
            <p>Tạo</p>
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <CreateForm />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
