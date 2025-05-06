const LOCK_REASON = {
  SPAM: {
    value: 1,
    label: "Spam nội dung không hợp lệ.",
  },
  BAD_CONTENT: { value: 2, label: "Lan truyền nội dung sai lệch." },
  OTHER: { value: 3, label: "Khác" },
};

const USER_TYPE = {
  IDOL: { value: 2, label: "Idol" },
  USER: { value: 1, label: "Người dùng" },
};

const WORD_TYPE = {
  BAD_WORD: { value: 1, label: "Từ ngữ bậy bạ" },
  SITE_NAME: { value: 2, label: "Tên trang khác" },
};

export { LOCK_REASON, USER_TYPE, WORD_TYPE };
