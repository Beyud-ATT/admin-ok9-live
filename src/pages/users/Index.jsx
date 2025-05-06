import UsersTable from "./components/UsersTable";
import TextSearch from "../../components/TextSearch";

export default function Users() {
  return (
    <div>
      <TextSearch />
      <UsersTable />
    </div>
  );
}
