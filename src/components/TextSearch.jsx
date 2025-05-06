import { Form, Input } from "antd";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router";

export default function TextSearch() {
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFinish(values) {
    searchParams.set("textSearch", values.textSearch);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      className="!my-5 w-[50%]"
    >
      <Form.Item name="textSearch" className="!m-0">
        <Input
          placeholder="Tìm kiếm"
          prefix={<FaSearch className="text-[var(--color-brand-primary)]" />}
          className="w-full"
          onChange={(value) => {
            handleFinish({
              textSearch: value.target.value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
}
