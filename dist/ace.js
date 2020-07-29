'use strict';

$(document).ready(function () {
  // CheckBox
  $("input[data-style='checkbox']").click(function () {
    if ($(this).parent().hasClass('checkbox-checked')) {
      $(this).attr('checked', false).parent().removeClass('checkbox-checked');
    } else {
      $(this).attr('checked', true).parent().addClass('checkbox-checked');
    }
  });

  // Radio
  $("input[data-style='radio']").click(function () {
    $("input[type='radio'][name='" + $(this).attr('name') + "']").parent().removeClass('radio-checked');
    $(this).parent().addClass('radio-checked');
  });

  // Switch
  $("input[data-style='switch']").click(function () {
    if ($(this).parent().hasClass('switch-checked')) {
      $(this).attr('checked', false).parent().removeClass('switch-checked');
    } else {
      $(this).attr('checked', true).parent().addClass('switch-checked');
    }
  });

  // Select
  $('.ace-select').on('click', '.ace-select-frame', function (e) {
    var parent = $(this).next().closest('.ace-select-dropdown');
    var parent2 = $(this).children('.ace-select-suffix');
    // if (!parent.hasClass('dropdown-open')) {
    parent.toggleClass('dropdown-open');
    $('.ace-select-dropdown.dropdown-open').not(parent).toggleClass('dropdown-open');
    parent2.toggleClass('select-reversed');
    $('.ace-select-suffix.select-reversed').not(parent2).toggleClass('select-reversed');
    // } else {
    // 	parent.removeClass('dropdown-open');
    // 	parent2.removeClass("select-reversed");
    // }
    e.stopPropagation();
  }).on('click', '.ace-select-dropdown > dd', function () {
    var parent = $(this).closest('.ace-select-dropdown');
    var c = parent.children('dd');
    for (var i = 0; i < c.size(); i++) {
      this === c.get(i) ? c.eq(i).addClass('actived') : c.eq(i).removeClass('actived');
    }

    parent.removeClass('dropdown-open').siblings('.ace-select-frame').children('.ace-input-select').val($(this).text());
  });

  $('.ace-select-dropdown > dt').click(function () {
    return false;
  });

  $('body').on('click', function () {
    $('.ace-select-dropdown.dropdown-open').toggleClass('dropdown-open');
    $('.ace-select-suffix.select-reversed').toggleClass('select-reversed');
  });
});