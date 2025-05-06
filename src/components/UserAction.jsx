import { App, Avatar, Dropdown, Modal } from "antd";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthProvider";
import useAccount from "../hooks/useAccount";
import { RxAvatar } from "react-icons/rx";

function UserAvatar(props) {
  const { data: account } = useAccount();
  const accountData = account?.data;

  return (
    <div className="flex items-center justify-center gap-1">
      <p className="hidden font-bold !text-[var(--color-brand-primary)] md:block">
        {accountData?.displayName}
      </p>
      <Avatar
        size={46}
        icon={<RxAvatar />}
        src={accountData?.avatar}
        {...props}
      />
    </div>
  );
}

export default function UserAction() {
  const { logout } = useAuth();
  const { modal } = App.useApp();

  const handleSignOut = () => {
    modal.confirm({
      icon: (
        <FaSignOutAlt className="mt-0.5 mr-2 text-2xl text-[var(--color-brand-primary)]" />
      ),
      title: (
        <span className="text-lg text-[var(--color-brand-primary)]">
          Đăng xuất
        </span>
      ),
      content: "Bạn có muốn đăng xuất?",
      cancelButtonProps: {
        className:
          "hover:!text-[var(--color-brand-primary)] hover:!border-[var(--color-brand-primary)]",
      },
      okButtonProps: {
        className:
          "!bg-[var(--color-brand-primary)] hover:!bg-[var(--color-brand-primary)]",
      },
      closable: true,
      okText: "Đăng xuất",
      cancelText: "Hủy",
      onOk() {
        logout();
      },
    });
  };

  const items = [
    {
      label: (
        <div className="flex items-center gap-2">
          <FaSignOutAlt className="!text-white" />
          <span className="text-white">Đăng xuất</span>
        </div>
      ),
      key: "signout",
      onClick: handleSignOut,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      placement="bottomRight"
      overlayClassName="user-action-dropdown"
    >
      <UserAvatar />
    </Dropdown>
  );
}
