const explorer = {
  name: "root",
  isFolder: true,
  item: [
    {
      name: "public",
      isFolder: true,
      item: [
        {
          name: "Nested",
          isFolder: true,
          item: [
            { name: "Nested1.js", isFolder: false },
            { name: "Nested2.js", isFolder: false },
            { name: "Nested3.js", isFolder: false }
          ]
        },
        { name: "NestedFile.js", isFolder: false }
      ]
    },
    {
      name: "scr",
      isFolder: true,
      item: [
        { name: "App.js", isFolder: false },
        { name: "index.js", isFolder: false }
      ]
    }
  ]
};

export default explorer;
