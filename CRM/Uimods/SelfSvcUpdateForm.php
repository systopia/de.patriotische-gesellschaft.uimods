<?php
/*-------------------------------------------------------+
| Patriotische Gesellschaft UI Modififications           |
| Copyright (C) 2017 SYSTOPIA                            |
| Author: P. Batroff (batroff@systopia.de)               |
| http://www.systopia.de/                                |
+--------------------------------------------------------+
| This program is released as free software under the    |
| Affero GPL license. You can redistribute it and/or     |
| modify it under the terms of this license which you    |
| can read by viewing the included agpl.txt or online    |
| at www.gnu.org/licenses/agpl.html. Removal of this     |
| copyright header is strictly prohibited without        |
| written permission from the original author(s).        |
+--------------------------------------------------------*/

/**
 * Changes german translation 'abbrechen' to 'stornieren (en: cancel)
 * See #7508
 */
class CRM_Uimods_SelfSvcUpdateForm {

  public static function buildFormHook($formName, &$form) {

    $script = file_get_contents(__DIR__ . '/../../js/self_service_update_form.js');
    CRM_Core_Region::instance('page-body')->add(array(
      'script' => $script
    ));
  }
}