import Folder from "./Components/Folder";
import "./styles.css";
import explorer from "./FolderData/Data";

export default function App() {
  return <Folder explorer={explorer} />;
}
