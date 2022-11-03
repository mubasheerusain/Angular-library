import { NgModule } from '@angular/core';
import { LibTree } from './tree.component';
import {MatTreeModule} from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { LibTreeNode, LibTreeNodeDef, LibTreeNodeOutlet, LibTreeNodePadding, LibTreeNodeToggle } from './treeNode.component';
@NgModule({
  declarations: [
    LibTree,
    LibTreeNode,
    LibTreeNodeDef,
    LibTreeNodeToggle,
    LibTreeNodeOutlet,
    LibTreeNodePadding
  ],
  imports: [MatTreeModule, CommonModule],
  exports: [
    LibTree,
    LibTreeNode,
    LibTreeNodeDef,
    LibTreeNodeToggle,
    LibTreeNodeOutlet,
    LibTreeNodePadding
  ]
})
export class TreeModule { }
