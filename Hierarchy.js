import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;

    if (treeItemData.value && treeItemData.value.length > 0) {
      children = getTreeItemsFromData(treeItemData.value);
    }

    return (
      <TreeItem
        key={treeItemData.key}
        nodeId={treeItemData.key}
        label={treeItemData.key}
        children={children}
      />
    );
  });
};

const Hierarchy = ({ treeItems }) => {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

export default Hierarchy;
