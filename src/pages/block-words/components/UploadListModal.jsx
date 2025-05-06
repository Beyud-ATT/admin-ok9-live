import { Button, Form, Select, Typography, Upload } from "antd";
import { CompoundModal } from "../../../components/CompoundModal";
import { FaUpload } from "react-icons/fa";
import { useModal } from "../../../components/CompoundModal";
import { toast } from "react-toastify";
import { WORD_TYPE } from "../../../utils/constants";
import { MdCloudUpload } from "react-icons/md";
import * as XLSX from "xlsx";
import { useState } from "react";
import useBlockWordAddList from "../../../hooks/useBlockWordAddList";

function UploadBtn({ onChange }) {
  const [data, setData] = useState([]);

  onChange && typeof onChange === "function" && onChange(data);

  const props = {
    name: "file",
    accept: ".xlsx, .xls",
    beforeUpload: (file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const workbook = XLSX.read(e.target.result, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_txt(worksheet);

          setData(parsedData);
          toast.success(`${file.name} file parsed successfully`);
        } catch (error) {
          toast.error(`Error parsing ${file.name}: ${error.message}`);
        }
      };

      reader.readAsArrayBuffer(file);
      return false;
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<MdCloudUpload />}>Click to Upload</Button>
    </Upload>
  );
}

function UploadListForm() {
  const [form] = Form.useForm();
  const { closeModal } = useModal();
  const [fileData, setFileData] = useState();
  const { mutate: addBlockWordList } = useBlockWordAddList();

  function handleFinish(values) {
    const data = {
      ...values,
      words: fileData.split("\n"),
    };
    addBlockWordList(data, {
      onSuccess: () => {
        closeModal();
        form.resetFields();
        toast.success("Đã upload danh sách từ chặn thành công!");
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
      <Form.Item>
        <UploadBtn onChange={setFileData} />
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

export default function UploadListModal() {
  return (
    <CompoundModal>
      <CompoundModal.Trigger
        render={(openModal) => (
          <button
            onClick={openModal}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-700 px-2 py-1 text-white"
          >
            <FaUpload />
            <p>Tải file lên</p>
          </button>
        )}
      />
      <CompoundModal.Content
        classNames={{
          content: "gradient-bg !border-2 !border-[var(--color-brand-primary)]",
        }}
      >
        <UploadListForm />
      </CompoundModal.Content>
    </CompoundModal>
  );
}
