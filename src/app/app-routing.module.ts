import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonColorComponent } from './example/component/button/button-color/button-color.component';
import { ButtonSizeComponent } from './example/component/button/button-size/button-size.component';
import { ButtonTypeComponent } from './example/component/button/button-type/button-type.component';
import { ButtonWithBadgeComponent } from './example/component/button/button-with-badge/button-with-badge.component';
import { ButtonWithWidthComponent } from './example/component/button/button-with-width/button-with-width.component';
import { BasicCrudComponent } from './example/component/crud/basic-crud/basic-crud.component';
import { CrudFormAccordionHeaderVariationComponent } from './example/component/crud/crud-form-accordion-header-variation/crud-form-accordion-header-variation.component';
import { CrudFormAccordionComponent } from './example/component/crud/crud-form-accordion/crud-form-accordion.component';
import { CrudFormCustomComponentAboveComponent } from './example/component/crud/crud-form-custom-component-above/crud-form-custom-component-above.component';
import { CrudFormCustomComponentBelowComponent } from './example/component/crud/crud-form-custom-component-below/crud-form-custom-component-below.component';
import { CrudFormTabHeaderVariationComponent } from './example/component/crud/crud-form-tab-header-variation/crud-form-tab-header-variation.component';
import { CrudFormTabComponent } from './example/component/crud/crud-form-tab/crud-form-tab.component';
import { CrudListCustomComponentAboveComponent } from './example/component/crud/crud-list-custom-component-above/crud-list-custom-component-above.component';
import { CrudListCustomComponentBelowComponent } from './example/component/crud/crud-list-custom-component-below/crud-list-custom-component-below.component';
import { CrudSearchBottomSheetComponent } from './example/component/crud/crud-search-bottom-sheet/crud-search-bottom-sheet.component';
import { CrudSearchLeftModalComponent } from './example/component/crud/crud-search-left-modal/crud-search-left-modal.component';
import { CrudSearchRightModalComponent } from './example/component/crud/crud-search-right-modal/crud-search-right-modal.component';
import { AutocompleteComponent } from './example/component/field/autocomplete/component/autocomplete/autocomplete.component';
import { CalendarComponent } from './example/component/field/calendar/component/calendar/calendar.component';
import { CheckboxComponent } from './example/component/field/checkbox/component/checkbox/checkbox.component';
import { ChipComponent } from './example/component/field/chip/component/chip/chip.component';
import { DropdownComponent } from './example/component/field/dropdown/component/dropdown/dropdown.component';
import { HtmlEditorComponent } from './example/component/field/html-editor/component/html-editor/html-editor.component';
import { MultiImageComponent } from './example/component/field/multi-image/component/multi-image/multi-image.component';
import { ParagraphComponent } from './example/component/field/paragraph/component/paragraph/paragraph.component';
import { RadioButtonComponent } from './example/component/field/radio-button/component/radio-button/radio-button.component';
import { TextareaComponent } from './example/component/field/textarea/component/textarea/textarea.component';
import { TextboxComponent } from './example/component/field/textbox/component/textbox/textbox.component';
import { BasicFormComponent } from './example/component/form/basic-form/basic-form.component';
import { FormActionCustomLayoutComponent } from './example/component/form/form-action-custom-layout/form-action-custom-layout.component';
import { FormAddMoreInFieldComponent } from './example/component/form/form-add-more-in-field/form-add-more-in-field.component';
import { FormAsCardComponent } from './example/component/form/form-as-card/form-as-card.component';
import { FormDisplayInColumnComponent } from './example/component/form/form-display-in-column/form-display-in-column.component';
import { FormHeaderVariationComponent } from './example/component/form/form-header-variation/form-header-variation.component';
import { FormInModalComponent } from './example/component/form/form-in-modal/form-in-modal.component';
import { FormSectionExpandableComponent } from './example/component/form/form-section-expandable/form-section-expandable.component';
import { FormWithHelpComponent } from './example/component/form/form-with-help/form-with-help.component';
import { FormWithSectionComponent } from './example/component/form/form-with-section/form-with-section.component';
import { DynamicListComponent } from './example/component/list/dynamic-list/dynamic-list.component';
import { EditableListComponent } from './example/component/list/editable-list/editable-list.component';
import { ListActionButtonInDropdownComponent } from './example/component/list/list-action-button-in-dropdown/list-action-button-in-dropdown.component';
import { ListAlternateRowShadeComponent } from './example/component/list/list-alternate-row-shade/list-alternate-row-shade.component';
import { ListColumnCustomLayoutComponent } from './example/component/list/list-column-custom-layout/list-column-custom-layout.component';
import { ListColumnWidthComponent } from './example/component/list/list-column-width/list-column-width.component';
import { ListCustomColumnBgColorComponent } from './example/component/list/list-custom-column-bg-color/list-custom-column-bg-color.component';
import { ListCustomColumnTextColorComponent } from './example/component/list/list-custom-column-text-color/list-custom-column-text-color.component';
import { ListCustomLayoutComponent } from './example/component/list/list-custom-layout/list-custom-layout.component';
import { ListCustomRowBgColorComponent } from './example/component/list/list-custom-row-bg-color/list-custom-row-bg-color.component';
import { ListCustomRowTextColorComponent } from './example/component/list/list-custom-row-text-color/list-custom-row-text-color.component';
import { ListDiabledRowComponent } from './example/component/list/list-diabled-row/list-diabled-row.component';
import { ListHeaderVariationComponent } from './example/component/list/list-header-variation/list-header-variation.component';
import { ListHoverRowShadeComponent } from './example/component/list/list-hover-row-shade/list-hover-row-shade.component';
import { ListMobileLayoutComponent } from './example/component/list/list-mobile-layout/list-mobile-layout.component';
import { ListPaginationAllRowsComponent } from './example/component/list/list-pagination-all-rows/list-pagination-all-rows.component';
import { ListPaginationInfiniteScrollComponent } from './example/component/list/list-pagination-infinite-scroll/list-pagination-infinite-scroll.component';
import { ListPaginationPageWiseComponent } from './example/component/list/list-pagination-page-wise/list-pagination-page-wise.component';
import { ListRowHoverComponent } from './example/component/list/list-row-hover/list-row-hover.component';
import { ListRowSelectableComponent } from './example/component/list/list-row-selectable/list-row-selectable.component';
import { ListStickyHeaderComponent } from './example/component/list/list-sticky-header/list-sticky-header.component';
import { ListWithColumnSelectorComponent } from './example/component/list/list-with-column-selector/list-with-column-selector.component';
import { ListWithColumnSortComponent } from './example/component/list/list-with-column-sort/list-with-column-sort.component';
import { ListWithNestedFormComponent } from './example/component/list/list-with-nested-form/list-with-nested-form.component';
import { ListWithNestedListComponent } from './example/component/list/list-with-nested-list/list-with-nested-list.component';
import { ListWithoutCardComponent } from './example/component/list/list-without-card/list-without-card.component';
import { ListWithoutColumnHeadingComponent } from './example/component/list/list-without-column-heading/list-without-column-heading.component';
import { ListWithoutFooterComponent } from './example/component/list/list-without-footer/list-without-footer.component';
import { ListWithoutHeaderComponent } from './example/component/list/list-without-header/list-without-header.component';
import { StaticListPageWiseComponent } from './example/component/list/static-list-page-wise/static-list-page-wise.component';
import { StaticListWithFilterComponent } from './example/component/list/static-list-with-filter/static-list-with-filter.component';
import { StaticListWithoutFilterComponent } from './example/component/list/static-list-without-filter/static-list-without-filter.component';

const routes: Routes = [
  {
    path: 'example',
    children: [
      {
        path: 'component/button/button-type',
        component: ButtonTypeComponent,
      },
      {
        path: 'component/button/button-size',
        component: ButtonSizeComponent,
      },
      {
        path: 'component/button/button-color',
        component: ButtonColorComponent,
      },
      {
        path: 'component/button/button-with-badge',
        component: ButtonWithBadgeComponent,
      },
      {
        path: 'component/button/button-with-width',
        component: ButtonWithWidthComponent,
      },
      {
        path: 'component/field/autocomplete',
        component: AutocompleteComponent,
      },
      {
        path: 'component/field/calendar',
        component: CalendarComponent,
      },
      {
        path: 'component/field/checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'component/field/chip',
        component: ChipComponent,
      },
      {
        path: 'component/field/dropdown',
        component: DropdownComponent,
      },
      {
        path: 'component/field/html-editor',
        component: HtmlEditorComponent,
      },
      {
        path: 'component/field/multi-image',
        component: MultiImageComponent,
      },
      {
        path: 'component/field/paragraph',
        component: ParagraphComponent,
      },
      {
        path: 'component/field/radio-button',
        component: RadioButtonComponent,
      },
      {
        path: 'component/field/textarea',
        component: TextareaComponent,
      },
      {
        path: 'component/field/textbox',
        component: TextboxComponent,
      },
      {
        path: 'component/form/basic-form',
        component: BasicFormComponent,
      },
      {
        path: 'component/form/form-with-section',
        component: FormWithSectionComponent,
      },
      {
        path: 'component/form/form-section-expandable',
        component: FormSectionExpandableComponent,
      },
      {
        path: 'component/form/form-header-variation',
        component: FormHeaderVariationComponent,
      },
      {
        path: 'component/form/form-display-in-column',
        component: FormDisplayInColumnComponent,
      },
      {
        path: 'component/form/form-add-more-in-field',
        component: FormAddMoreInFieldComponent,
      },
      {
        path: 'component/form/form-action-custom-layout',
        component: FormActionCustomLayoutComponent,
      },
      {
        path: 'component/form/form-with-help',
        component: FormWithHelpComponent,
      },
      {
        path: 'component/form/form-as-card',
        component: FormAsCardComponent,
      },
      {
        path: 'component/form/form-in-modal',
        component: FormInModalComponent,
      },
      {
        path: 'component/list/static-list-with-filter',
        component: StaticListWithFilterComponent,
      },
      {
        path: 'component/list/static-list-without-filter',
        component: StaticListWithoutFilterComponent,
      },
      {
        path: 'component/list/static-list-page-wise',
        component: StaticListPageWiseComponent,
      },
      {
        path: 'component/list/dynamic-list',
        component: DynamicListComponent,
      },
      {
        path: 'component/list/editable-list',
        component: EditableListComponent,
      },
      {
        path: 'component/list/list-with-nested-form',
        component: ListWithNestedFormComponent,
      },
      {
        path: 'component/list/list-with-nested-list',
        component: ListWithNestedListComponent,
      },
      {
        path: 'component/list/list-alternate-row-shade',
        component: ListAlternateRowShadeComponent,
      },
      {
        path: 'component/list/list-hover-row-shade',
        component: ListHoverRowShadeComponent,
      },
      {
        path: 'component/list/list-sticky-header',
        component: ListStickyHeaderComponent,
      },
      {
        path: 'component/list/list-without-card',
        component: ListWithoutCardComponent,
      },
      {
        path: 'component/list/list-without-column-heading',
        component: ListWithoutColumnHeadingComponent,
      },
      {
        path: 'component/list/list-without-footer',
        component: ListWithoutFooterComponent,
      },
      {
        path: 'component/list/list-without-header',
        component: ListWithoutHeaderComponent,
      },
      {
        path: 'component/list/list-column-width',
        component: ListColumnWidthComponent,
      },
      {
        path: 'component/list/list-header-variation',
        component: ListHeaderVariationComponent,
      },
      {
        path: 'component/list/list-pagination-all-rows',
        component: ListPaginationAllRowsComponent,
      },
      {
        path: 'component/list/list-pagination-infinite-scroll',
        component: ListPaginationInfiniteScrollComponent,
      },
      {
        path: 'component/list/list-pagination-page-wise',
        component: ListPaginationPageWiseComponent,
      },
      {
        path: 'component/list/list-with-column-selector',
        component: ListWithColumnSelectorComponent,
      },
      {
        path: 'component/list/list-with-column-sort',
        component: ListWithColumnSortComponent,
      },
      {
        path: 'component/list/list-custom-column-bg-color',
        component: ListCustomColumnBgColorComponent,
      },
      {
        path: 'component/list/list-custom-column-text-color',
        component: ListCustomColumnTextColorComponent,
      },
      {
        path: 'component/list/list-custom-row-bg-color',
        component: ListCustomRowBgColorComponent,
      },
      {
        path: 'component/list/list-custom-row-text-color',
        component: ListCustomRowTextColorComponent,
      },
      {
        path: 'component/list/list-row-hover',
        component: ListRowHoverComponent,
      },
      {
        path: 'component/list/list-mobile-layout',
        component: ListMobileLayoutComponent,
      },
      {
        path: 'component/list/list-custom-layout',
        component: ListCustomLayoutComponent,
      },
      {
        path: 'component/list/list-action-button-in-dropdown',
        component: ListActionButtonInDropdownComponent,
      },
      {
        path: 'component/list/list-column-custom-layout',
        component: ListColumnCustomLayoutComponent,
      },
      {
        path: 'component/list/list-diabled-row',
        component: ListDiabledRowComponent,
      },
      {
        path: 'component/list/list-row-selectable',
        component: ListRowSelectableComponent,
      },
      {
        path: 'component/crud/basic-crud',
        component: BasicCrudComponent,
      },
      {
        path: 'component/crud/basic-crud/:id',
        component: BasicCrudComponent,
      },
      {
        path: 'component/crud/crud-search-right-modal',
        component: CrudSearchRightModalComponent,
      },
      {
        path: 'component/crud/crud-search-right-modal/:id',
        component: CrudSearchRightModalComponent,
      },
      {
        path: 'component/crud/crud-search-left-modal',
        component: CrudSearchLeftModalComponent,
      },
      {
        path: 'component/crud/crud-search-left-modal/:id',
        component: CrudSearchLeftModalComponent,
      },
      {
        path: 'component/crud/crud-search-bottom-sheet',
        component: CrudSearchBottomSheetComponent,
      },
      {
        path: 'component/crud/crud-search-bottom-sheet/:id',
        component: CrudSearchBottomSheetComponent,
      },
      {
        path: 'component/crud/crud-form-accordion',
        component: CrudFormAccordionComponent,
      },
      {
        path: 'component/crud/crud-form-accordion/:id',
        component: CrudFormAccordionComponent,
      },
      {
        path: 'component/crud/crud-form-accordion-header-variation',
        component: CrudFormAccordionHeaderVariationComponent,
      },
      {
        path: 'component/crud/crud-form-accordion-header-variation/:id',
        component: CrudFormAccordionHeaderVariationComponent,
      },
      {
        path: 'component/crud/crud-form-custom-component-above',
        component: CrudFormCustomComponentAboveComponent,
      },
      {
        path: 'component/crud/crud-form-custom-component-above/:id',
        component: CrudFormCustomComponentAboveComponent,
      },
      {
        path: 'component/crud/crud-form-custom-component-below',
        component: CrudFormCustomComponentBelowComponent,
      },
      {
        path: 'component/crud/crud-form-custom-component-below/:id',
        component: CrudFormCustomComponentBelowComponent,
      },
      {
        path: 'component/crud/crud-form-tab',
        component: CrudFormTabComponent,
      },
      {
        path: 'component/crud/crud-form-tab/:id',
        component: CrudFormTabComponent,
      },
      {
        path: 'component/crud/crud-form-tab-header-variation',
        component: CrudFormTabHeaderVariationComponent,
      },
      {
        path: 'component/crud/crud-form-tab-header-variation/:id',
        component: CrudFormTabHeaderVariationComponent,
      },
      {
        path: 'component/crud/crud-list-custom-component-above',
        component: CrudListCustomComponentAboveComponent,
      },
      {
        path: 'component/crud/crud-list-custom-component-above/:id',
        component: CrudListCustomComponentAboveComponent,
      },
      {
        path: 'component/crud/crud-list-custom-component-below',
        component: CrudListCustomComponentBelowComponent,
      },
      {
        path: 'component/crud/crud-list-custom-component-below/:id',
        component: CrudListCustomComponentBelowComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
