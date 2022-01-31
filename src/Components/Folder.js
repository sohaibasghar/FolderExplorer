import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {explorer.name}
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {explorer.item.map((exp) => (
            <Folder explorer={exp} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
};
export default Folder;
