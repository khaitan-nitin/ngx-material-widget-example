import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';
import { MaterialWidgetModule } from 'ngx-material-widget';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTypeComponent } from './example/component/button/button-type/button-type.component';
import { ButtonSizeComponent } from './example/component/button/button-size/button-size.component';
import { ButtonColorComponent } from './example/component/button/button-color/button-color.component';
import { ButtonWithBadgeComponent } from './example/component/button/button-with-badge/button-with-badge.component';
import { ButtonWithWidthComponent } from './example/component/button/button-with-width/button-with-width.component';
import { AutocompleteComponent } from './example/component/field/autocomplete/component/autocomplete/autocomplete.component';
import { CalendarComponent } from './example/component/field/calendar/component/calendar/calendar.component';
import { CheckboxComponent } from './example/component/field/checkbox/component/checkbox/checkbox.component';
import { ChipComponent } from './example/component/field/chip/component/chip/chip.component';
import { DropdownComponent } from './example/component/field/dropdown/component/dropdown/dropdown.component';
import { HtmlEditorComponent } from './example/component/field/html-editor/component/html-editor/html-editor.component';
import { ParagraphComponent } from './example/component/field/paragraph/component/paragraph/paragraph.component';
import { RadioButtonComponent } from './example/component/field/radio-button/component/radio-button/radio-button.component';
import { TextareaComponent } from './example/component/field/textarea/component/textarea/textarea.component';
import { TextboxComponent } from './example/component/field/textbox/component/textbox/textbox.component';
import { MultiImageComponent } from './example/component/field/multi-image/component/multi-image/multi-image.component';
import { BasicFormComponent } from './example/component/form/basic-form/basic-form.component';
import { FormWithSectionComponent } from './example/component/form/form-with-section/form-with-section.component';
import { FormSectionExpandableComponent } from './example/component/form/form-section-expandable/form-section-expandable.component';
import { FormHeaderVariationComponent } from './example/component/form/form-header-variation/form-header-variation.component';
import { FormDisplayInColumnComponent } from './example/component/form/form-display-in-column/form-display-in-column.component';
import { FormAddMoreInFieldComponent } from './example/component/form/form-add-more-in-field/form-add-more-in-field.component';
import { FormActionCustomLayoutComponent } from './example/component/form/form-action-custom-layout/form-action-custom-layout.component';
import { FormWithHelpComponent } from './example/component/form/form-with-help/form-with-help.component';
import { FormAsCardComponent } from './example/component/form/form-as-card/form-as-card.component';
import { FormInModalComponent } from './example/component/form/form-in-modal/form-in-modal.component';
import { StaticListWithFilterComponent } from './example/component/list/static-list-with-filter/static-list-with-filter.component';
import { MasterDataService, PropertyService } from './example/setting/service';
import { StaticListWithoutFilterComponent } from './example/component/list/static-list-without-filter/static-list-without-filter.component';
import { StaticListPageWiseComponent } from './example/component/list/static-list-page-wise/static-list-page-wise.component';
import { DynamicListComponent } from './example/component/list/dynamic-list/dynamic-list.component';
import { ListWithNestedListComponent } from './example/component/list/list-with-nested-list/list-with-nested-list.component';
import { ListWithNestedFormComponent } from './example/component/list/list-with-nested-form/list-with-nested-form.component';
import { EditableListComponent } from './example/component/list/editable-list/editable-list.component';
import { ListAlternateRowShadeComponent } from './example/component/list/list-alternate-row-shade/list-alternate-row-shade.component';
import { ListHoverRowShadeComponent } from './example/component/list/list-hover-row-shade/list-hover-row-shade.component';
import { ListWithoutHeaderComponent } from './example/component/list/list-without-header/list-without-header.component';
import { ListWithoutColumnHeadingComponent } from './example/component/list/list-without-column-heading/list-without-column-heading.component';
import { ListWithoutCardComponent } from './example/component/list/list-without-card/list-without-card.component';
import { ListWithoutFooterComponent } from './example/component/list/list-without-footer/list-without-footer.component';
import { ListStickyHeaderComponent } from './example/component/list/list-sticky-header/list-sticky-header.component';
import { ListHeaderVariationComponent } from './example/component/list/list-header-variation/list-header-variation.component';
import { ListWithColumnSortComponent } from './example/component/list/list-with-column-sort/list-with-column-sort.component';
import { ListColumnWidthComponent } from './example/component/list/list-column-width/list-column-width.component';
import { ListWithColumnSelectorComponent } from './example/component/list/list-with-column-selector/list-with-column-selector.component';
import { ListCustomColumnTextColorComponent } from './example/component/list/list-custom-column-text-color/list-custom-column-text-color.component';
import { ListCustomColumnBgColorComponent } from './example/component/list/list-custom-column-bg-color/list-custom-column-bg-color.component';
import { ListCustomLayoutComponent } from './example/component/list/list-custom-layout/list-custom-layout.component';
import { ListRowHoverComponent } from './example/component/list/list-row-hover/list-row-hover.component';
import { ListDiabledRowComponent } from './example/component/list/list-diabled-row/list-diabled-row.component';
import { ListCustomRowBgColorComponent } from './example/component/list/list-custom-row-bg-color/list-custom-row-bg-color.component';
import { ListCustomRowTextColorComponent } from './example/component/list/list-custom-row-text-color/list-custom-row-text-color.component';
import { ListPaginationAllRowsComponent } from './example/component/list/list-pagination-all-rows/list-pagination-all-rows.component';
import { ListPaginationPageWiseComponent } from './example/component/list/list-pagination-page-wise/list-pagination-page-wise.component';
import { ListPaginationInfiniteScrollComponent } from './example/component/list/list-pagination-infinite-scroll/list-pagination-infinite-scroll.component';
import { ListMobileLayoutComponent } from './example/component/list/list-mobile-layout/list-mobile-layout.component';
import { ListRowSelectableComponent } from './example/component/list/list-row-selectable/list-row-selectable.component';
import { ListColumnCustomLayoutComponent } from './example/component/list/list-column-custom-layout/list-column-custom-layout.component';
import { ListActionButtonInDropdownComponent } from './example/component/list/list-action-button-in-dropdown/list-action-button-in-dropdown.component';
import { BasicCrudComponent } from './example/component/crud/basic-crud/basic-crud.component';
import { CrudSearchRightModalComponent } from './example/component/crud/crud-search-right-modal/crud-search-right-modal.component';
import { CrudSearchLeftModalComponent } from './example/component/crud/crud-search-left-modal/crud-search-left-modal.component';
import { CrudSearchBottomSheetComponent } from './example/component/crud/crud-search-bottom-sheet/crud-search-bottom-sheet.component';
import { CrudFormTabComponent } from './example/component/crud/crud-form-tab/crud-form-tab.component';
import { CrudFormAccordionComponent } from './example/component/crud/crud-form-accordion/crud-form-accordion.component';
import { CrudFormTabHeaderVariationComponent } from './example/component/crud/crud-form-tab-header-variation/crud-form-tab-header-variation.component';
import { CrudFormAccordionHeaderVariationComponent } from './example/component/crud/crud-form-accordion-header-variation/crud-form-accordion-header-variation.component';
import { CrudListCustomComponentAboveComponent } from './example/component/crud/crud-list-custom-component-above/crud-list-custom-component-above.component';
import { CrudListCustomComponentBelowComponent } from './example/component/crud/crud-list-custom-component-below/crud-list-custom-component-below.component';
import { CrudFormCustomComponentBelowComponent } from './example/component/crud/crud-form-custom-component-below/crud-form-custom-component-below.component';
import { CrudFormCustomComponentAboveComponent } from './example/component/crud/crud-form-custom-component-above/crud-form-custom-component-above.component';

export function init_app(masterDataService: MasterDataService, propertyService: PropertyService) {
  return () => {
    masterDataService.setMasterDataToLocalStore();
    propertyService.setPropertiesToLocalStore();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ButtonTypeComponent,
    ButtonSizeComponent,
    ButtonColorComponent,
    ButtonWithBadgeComponent,
    ButtonWithWidthComponent,
    AutocompleteComponent,
    CalendarComponent,
    CheckboxComponent,
    ChipComponent,
    DropdownComponent,
    HtmlEditorComponent,
    ParagraphComponent,
    RadioButtonComponent,
    TextareaComponent,
    TextboxComponent,
    MultiImageComponent,
    BasicFormComponent,
    FormWithSectionComponent,
    FormSectionExpandableComponent,
    FormHeaderVariationComponent,
    FormDisplayInColumnComponent,
    FormAddMoreInFieldComponent,
    FormActionCustomLayoutComponent,
    FormWithHelpComponent,
    FormAsCardComponent,
    FormInModalComponent,
    StaticListWithFilterComponent,
    StaticListWithoutFilterComponent,
    StaticListPageWiseComponent,
    DynamicListComponent,
    ListWithNestedListComponent,
    ListWithNestedFormComponent,
    EditableListComponent,
    ListStickyHeaderComponent,
    ListAlternateRowShadeComponent,
    ListHoverRowShadeComponent,
    ListWithoutHeaderComponent,
    ListWithoutColumnHeadingComponent,
    ListWithoutCardComponent,
    ListWithoutFooterComponent,
    ListHeaderVariationComponent,
    ListWithColumnSortComponent,
    ListColumnWidthComponent,
    ListWithColumnSelectorComponent,
    ListCustomColumnTextColorComponent,
    ListCustomColumnBgColorComponent,
    ListCustomLayoutComponent,
    ListRowHoverComponent,
    ListDiabledRowComponent,
    ListCustomRowBgColorComponent,
    ListCustomRowTextColorComponent,
    ListPaginationAllRowsComponent,
    ListPaginationPageWiseComponent,
    ListPaginationInfiniteScrollComponent,
    ListMobileLayoutComponent,
    ListRowSelectableComponent,
    ListColumnCustomLayoutComponent,
    ListActionButtonInDropdownComponent,
    BasicCrudComponent,
    CrudSearchRightModalComponent,
    CrudSearchLeftModalComponent,
    CrudSearchBottomSheetComponent,
    CrudFormTabComponent,
    CrudFormAccordionComponent,
    CrudFormTabHeaderVariationComponent,
    CrudFormAccordionHeaderVariationComponent,
    CrudListCustomComponentAboveComponent,
    CrudListCustomComponentBelowComponent,
    CrudFormCustomComponentBelowComponent,
    CrudFormCustomComponentAboveComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    AbilityModule,
    MaterialWidgetModule,
    MatSnackBarModule,
    LocalStorageModule.forRoot({
      prefix: 'mx-app',
      storageType: 'localStorage'
  })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [MasterDataService, PropertyService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
