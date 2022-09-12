import { useState } from "react";
import SortableTree, { NodeRendererProps } from "react-sortable-tree";

const treeData = {
  treeData: [
    { title: "Chicken", children: [{ title: "Egg" }] },
    { title: "Fish", children: [{ title: "fingerline" }] },
  ],
};

interface ReactSortableTree {
  style?: React.CSSProperties;
}

export default function ReactSortableTree(props: ReactSortableTree) {
  const [tree, setTree] = useState(treeData.treeData);
  const nodeRenderer = (props: NodeRendererProps) => {
    console.log('scrolling');

    return <span>{props.node.title}</span>
    
  }
  return (
    <>
      <div style={props?.style && props.style}>
        <SortableTree
          treeData={tree}
          onChange={(tree: any) => setTree(tree)}
          rowHeight={50}
        //   nodeContentRenderer={nodeRenderer}
        />
      </div>
    </>
  );
}
