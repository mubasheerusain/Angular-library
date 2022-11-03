import { NumberInput } from "@angular/cdk/coercion";
import { CdkTree, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodePadding, CdkTreeNodeToggle, CDK_TREE_NODE_OUTLET_NODE } from "@angular/cdk/tree";
import { Attribute, Directive, ElementRef, Inject, Input, OnDestroy, OnInit, Optional, ViewContainerRef } from "@angular/core";
import { CanDisable, HasTabIndex, mixinDisabled, mixinTabIndex } from "@angular/material/core";


const _LibTreeNodeBase = mixinTabIndex(mixinDisabled(CdkTreeNode));

@Directive({
    selector: 'lib-tree-node',
    exportAs: 'libTreeNode',
    inputs: ['role', 'disabled', 'tabIndex'],
    providers: [{provide: CdkTreeNode, useExisting: LibTreeNode}],
    host: {
      'class': 'lib-tree-node',
    },
  })
  export class LibTreeNode<T, K = T> extends _LibTreeNodeBase<T, K> implements CanDisable, HasTabIndex, OnInit, OnDestroy {
    constructor(
      elementRef: ElementRef<HTMLElement>,
      tree: CdkTree<T, K>,
      @Attribute('tabindex') tabIndex: string,
    ) {
      super(elementRef, tree);
      this.tabIndex = Number(tabIndex) || 0;
    }

    override ngOnInit() {
      super.ngOnInit();
    }
  
    override ngOnDestroy() {
      super.ngOnDestroy();
    }
  }
  
  @Directive({
    selector: '[libTreeNodeDef]',
    inputs: ['when: libTreeNodeDefWhen'],
    providers: [{provide: CdkTreeNodeDef, useExisting: LibTreeNodeDef}],
  })
  export class LibTreeNodeDef<T> extends CdkTreeNodeDef<T> {
    @Input('libTreeNode') data!: T;
  }

  @Directive({
    selector: '[libTreeNodeToggle]',
    providers: [{provide: CdkTreeNodeToggle, useExisting: LibTreeNodeToggle}],
    inputs: ['recursive: libTreeNodeToggleRecursive'],
  })
  export class LibTreeNodeToggle<T, K = T> extends CdkTreeNodeToggle<T, K> {}

  @Directive({
    selector: '[libTreeNodeOutlet]',
    providers: [
      {
        provide: CdkTreeNodeOutlet,
        useExisting: LibTreeNodeOutlet,
      },
    ],
  })
  export class LibTreeNodeOutlet implements CdkTreeNodeOutlet {
    constructor(
      public viewContainer: ViewContainerRef,
      @Inject(CDK_TREE_NODE_OUTLET_NODE) @Optional() public _node?: any,
    ) {}
  }

  @Directive({
    selector: '[libTreeNodePadding]',
    providers: [{provide: CdkTreeNodePadding, useExisting: LibTreeNodePadding}],
  })
  export class LibTreeNodePadding<T, K = T> extends CdkTreeNodePadding<T, K> {
    @Input('libTreeNodePadding')
    override get level(): number {
      return this._level;
    }
    override set level(value: NumberInput) {
      this._setLevelInput(value);
    }
  
    @Input('libTreeNodePaddingIndent')
    override get indent(): number | string {
      return this._indent;
    }
    override set indent(indent: number | string) {
      this._setIndentInput(indent);
    }
  }