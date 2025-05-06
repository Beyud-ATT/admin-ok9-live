import { Route, Routes, useNavigate } from "react-router";
import MainLayout from "./layout/Index";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Index";
import Livestreams from "./pages/livestreams/Index";
import News from "./pages/news/Index";
import Users from "./pages/users/Index";
import Idol from "./pages/idols/Index";
import { Flex } from "antd";
import BlockWords from "./pages/block-words/Index";
import GeneralLinks from "./pages/general-links/Index";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/livestreams" element={<Livestreams />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<Users />} />
          <Route path="/idols" element={<Idol />} />
          <Route path="/block-words" element={<BlockWords />} />
          <Route path="/general-links" element={<GeneralLinks />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <Flex
              vertical
              justify="center"
              align="center"
              gap={20}
              className="h-screen"
            >
              <p className="text-6xl font-bold text-[var(--color-brand-primary)] uppercase">
                404 rồi
              </p>
              <button
                onClick={() => navigate("/")}
                className="animate-wiggle cursor-pointer rounded-xl bg-[var(--color-brand-primary)] px-4 py-2 text-white uppercase hover:underline"
              >
                quay về đi
              </button>
            </Flex>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
export default App;
