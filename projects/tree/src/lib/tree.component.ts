import { CdkTree } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { LibTreeNodeOutlet } from './treeNode.component';

@Component({
  selector: 'lib-tree',
  exportAs: 'libTree',
  template: `<ng-container libTreeNodeOutlet></ng-container>`,
  host: {
    'class': 'lib-tree',
    'role': 'tree',
  },
  styleUrls: ['tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: CdkTree, useExisting: LibTree}],
})
export class LibTree<T, K = T> extends CdkTree<T, K> {
  @ViewChild(LibTreeNodeOutlet, {static: true}) override _nodeOutlet!: LibTreeNodeOutlet;
}