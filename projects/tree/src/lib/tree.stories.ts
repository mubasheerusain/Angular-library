import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TreeModule } from './tree.module';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
    selector:'lib-tree-wrapper',
    template: `
      <lib-tree [dataSource]="dataSource" [treeControl]="treeControl">
         <lib-tree-node *libTreeNodeDef="let node" libTreeNodePadding>
           <button (click)="handleClick(node.name)">{{node.name}}</button>
         </lib-tree-node>
         <lib-tree-node *libTreeNodeDef="let node;when: hasChild" libTreeNodePadding>
           <button libTreeNodeToggle
                   [attr.aria-label]="'Toggle ' + node.name">
             <svg [ngStyle]="treeControl.isExpanded(node) ? {'transform': 'rotate(90deg)'} : null" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.7736 9.00497L7.35849 2.23881C7.0566 1.9204 6.5283 1.9204 6.22642 2.23881C5.92453 2.55721 5.92453 3.11443 6.22642 3.43284L12.2642 9.80099L6.22642 16.5672C5.92453 16.8856 5.92453 17.4428 6.22642 17.7612C6.5283 18.0796 7.0566 18.0796 7.35849 17.7612L13.7736 10.597C14 10.3582 14 10.1194 14 9.8806C14 9.48259 13.9245 9.16418 13.7736 9.00497Z" fill="black"/>
             </svg>
            </button>
            <button (click)="handleClick(node.name)">{{node.name}}</button>
         </lib-tree-node>
       </lib-tree>
    `
})
class TreeWrapperComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  handleClick = (data: string) => {
    console.log(data);
  }

}

export default {
    title: 'Tree',
    decorators: [
        moduleMetadata({
            declarations: [TreeWrapperComponent],
            imports: [TreeModule],
        }),
    ]
} as Meta;

const TreeStory: Story = () => ({
    template: `
    <lib-tree-wrapper></lib-tree-wrapper>
    `,
});

export const Tree = TreeStory.bind({});