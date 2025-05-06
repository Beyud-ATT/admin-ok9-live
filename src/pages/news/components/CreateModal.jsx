import { Flex, Form, Input, Typography, Upload } from "antd";
import { CompoundModal } from "../../../components/CompoundModal";
import { FaCamera, FaPlus } from "react-icons/fa";
import useNewsCreate from "../../../hooks/useNewsCreate";
import { useModal } from "../../../components/CompoundModal";
import { useState } from "react";
import { toast } from "react-toastify";

function CreateForm() {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const [image, setImage] = useState("");
  const { mutate: createNews } = useNewsCreate();

  function handleFinish(values) {
    const data = {
      ...values,
      file: image,
    };
    createNews(data, {
      onSuccess: () => {
        closeModal();
        form.resetFields();
        setImage("");
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
      <Form.Item name="content" label="Nội dung">
        <Input.TextArea autoSize={{ minRows: 5, maxRows: 5 }} />
      </Form.Item>
      <Form.Item label={"Hình ảnh"}>
        <Upload
          listType="picture-card"
          maxCount={1}
          beforeUpload={(file) => {
            setImage(file);
            return false;
          }}
          showUploadList={{ showPreviewIcon: false }}
        >
          <Flex
            justify="center"
            align="center"
            className="gap-2 hover:text-[var(--color-brand-primary)]"
          >
            <FaCamera className="h-full w-full !text-lg text-[var(--color-brand-primary)]" />
            <span className="text-lg text-white">Thêm</span>
          </Flex>
        </Upload>
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
            className="flex h-fit cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-700 px-2 py-1 text-white"
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
