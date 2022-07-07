import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionTabComponent } from "./accordionTab.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AccordionComponent, AccordionTabComponent],
    imports: [CommonModule, MatExpansionModule, BrowserAnimationsModule],
    exports: [AccordionComponent, AccordionTabComponent]
  })
  export class ModalModule {}