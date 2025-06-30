import { byValueKey } from "appium-flutter-finder";

export class Selectors {
  // App Bar: App Navigation
  static readonly backButton = byValueKey("back_button");
  static readonly appbarTitle = byValueKey("appbar_title");

  // Bottom Bar: Tabs
  static readonly browseTab = byValueKey("browse_tab");
  static readonly browseWorkOrder = byValueKey("browse_work_order");

  // Dynamic selectors for list items
  static workOrderItem(index: number) {
    return byValueKey(`work_order_${index}`);
  }

  static workOrderUnitItem(index: number) {
    return byValueKey(`work_order_vehicle_${index}`);
  }

  static workOrderNumberItem(index: number) {
    return byValueKey(`work_order_reference_${index}`);
  }

  // Work Order: Detail Page
  static readonly scrollView = byValueKey("work_order_detail_scroll_view");
  static readonly editButton = byValueKey("edit_button");
  static readonly workOrderNumber = byValueKey("work_order_detail_number");
  static readonly startWorkButton = byValueKey("start_work_button");
  static readonly showMoreButton = byValueKey("work_order_show_more_button");
  static readonly workOrderVehicle = byValueKey("work_order_detail_vehicle");
  static readonly workOrderYear = byValueKey("work_order_detail_year");
  static readonly workOrderVin = byValueKey("work_order_detail_vin");
  static readonly workOrderMeter = byValueKey("work_order_detail_meter");
  static readonly workOrderStartDate = byValueKey("work_order_detail_start_date");
  static readonly workOrderCompletionDate = byValueKey("work_order_detail_completion_date");

  }