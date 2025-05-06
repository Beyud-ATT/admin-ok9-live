import { Form, Input, Typography } from "antd";
import useGeneralLinksGet from "../../hooks/useGeneralLinksGet";
import { useEffect } from "react";
import useGeneralLinksUpdate from "../../hooks/useGeneralLinksUpdate";

function GeneralLinksForm() {
  const [form] = Form.useForm();
  const { generalLinks, isLoading } = useGeneralLinksGet();
  const { mutate: updateGeneralLink } = useGeneralLinksUpdate();

  function handleFinish(values) {
    updateGeneralLink(values);
  }

  useEffect(() => {
    form.setFieldsValue(generalLinks?.data);
  }, [generalLinks?.data, form]);

  return (
    <div className="mx-auto w-[50%]">
      <Typography.Title
        level={2}
        className="text-center !text-[var(--color-brand-primary)]"
      >
        Tùy chỉnh link
      </Typography.Title>
      <Form
        form={form}
        disabled={isLoading}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item label="Link trang chủ" name="linkWeb">
          <Input placeholder="Điền link trang chủ" />
        </Form.Item>
        <Form.Item label="Link tải app" name="linkApp">
          <Input placeholder="Điền link tải app" />
        </Form.Item>
        <Form.Item label="Link nhận code" name="linkCode">
          <Input placeholder="Điền link nhận code" />
        </Form.Item>
        <Form.Item label="Link telegram phát code" name="linkTelegramCode">
          <Input placeholder="Điền lin telegram phát code" />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <button
            type="submit"
            className="py- rounded-lg bg-[var(--color-brand-primary)] px-4 py-1 text-white"
          >
            Lưu
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default function GeneralLinks() {
  return (
    <div>
      <GeneralLinksForm />
    </div>
  );
}
