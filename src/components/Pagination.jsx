import { Pagination as AntdPagination } from "antd";
import { useSearchParams } from "react-router";

export default function Pagination({ pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;

  function handlePageChange(page, pageSize) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);
    newSearchParams.set("pageSize", pageSize);
    setSearchParams(newSearchParams);
  }

  return (
    <div className="mt-4">
      <AntdPagination
        align="end"
        current={page}
        pageSize={pageSize}
        {...pagination}
        onChange={handlePageChange}
        showSizeChanger={true}
        pageSizeOptions={["20", "50", "100"]}
      />
    </div>
  );
}
