import { NgModule } from '@angular/core';

// a b c d e f g h i j k l m n ñ o p q r s t u v w x y z

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  exports: [
    AutoCompleteModule,
    CarouselModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    DividerModule,
    DynamicDialogModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputMaskModule,
    MessagesModule,
    MessageModule,
    MenubarModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    RippleModule,
    SelectButtonModule,
    ScrollTopModule,
    SidebarModule,
    SplitButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    TooltipModule,
    SlideMenuModule,
  ],
  providers: [DialogService],
})
export class PrimengModule {}
