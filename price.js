$(function() {
    country = $.url(location.href).param('country');

    if (country == 'KZ') {
        kz_selected = 'selected="selected"';
    } else {
        kz_selected = '';
    }
    if (country == 'UA') {
        ua_selected = 'selected="selected"';
    } else {
        ua_selected = '';
    }

    if (country == 'MD') {
        md_selected = 'selected="selected"';
    } else {
        md_selected = '';
    }
    if (country == 'GE') {
        ge_selected = 'selected="selected"';
    } else {
        ge_selected = '';
    }
    if (country == 'BY') {
        by_selected = 'selected="selected"';
    } else {
        by_selected = '';
    }
    if (country == 'AM') {
        am_selected = 'selected="selected"';
    } else {
        am_selected = '';
    }
    if (country == 'AZ') {
        az_selected = 'selected="selected"';
    } else {
        az_selected = '';
    }
    if (country == 'KG') {
        kg_selected = 'selected="selected"';
    } else {
        kg_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="RU">Россия</option>');

    //  selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');
    //  selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');
    //selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');

    // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
    // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
    //   selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
    // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
    // selects.append('<option value="KG" ' + kg_selected + '>Кыргызстан</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'RU';
            }

            if (sel == 'RU') {
                $('.old_price_val').html('11633');
                $('.old_price_cur').html('руб');
                $('.old_price_sig').html('&#8381;');
                $('.new_price_val').html('3490');
                $('.new_price_cur').html('руб');
                $('.new_price_sig').html('&#8381;');
                $('select').val('RU').trigger('change');

            }

            if (sel == 'KZ') {
                $('.old_price_val').html('10580');
                $('.old_price_cur').html('тнг');
                $('.old_price_sig').html('тнг*');
                $('.new_price_val').html('830');
                $('.new_price_cur').html('тнг*');
                $('.new_price_sig').html('тнг*');
                $('select').val('KZ').trigger('change');
            }

            if (sel == 'UA') {
                $('.old_price_val').html('830');
                $('.old_price_cur').html('грн');
                $('.old_price_sig').html('грн*');
                $('.new_price_val').html('69');
                $('.new_price_cur').html('грн*');
                $('.new_price_sig').html('грн*');
                $('select').val('UA').trigger('change');
            }

            if (sel == 'MD') {
                $('.old_price_val').html('9');
                $('.old_price_cur').html('лей');
                $('.old_price_sig').html('лей*');
                $('.new_price_val').html('9');
                $('.new_price_cur').html('лей*');
                $('.new_price_sig').html('лей*');
                $('select').val(sel).trigger('change');
            }

            if (sel == 'GE') {
                $('.old_price_val').html('90');
                $('.old_price_cur').html('gel');
                $('.old_price_sig').html('gel*');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('gel*');
                $('.new_price_sig').html('gel*');
                $('select').val(sel).trigger('change');
            }

            if (sel == 'BY') {
                $('.old_price_val').html('140');
                $('.old_price_cur').html('р');
                $('.old_price_sig').html('р*');
                $('.new_price_val').html('5');
                $('.new_price_cur').html('р*');
                $('.new_price_sig').html('р*');
                $('select').val(sel).trigger('change');
            }

            if (sel == 'AM') {
                $('.old_price_val').html('25000');
                $('.old_price_cur').html('др');
                $('.old_price_sig').html('др*');
                $('.new_price_val').html('12890');
                $('.new_price_cur').html('др*');
                $('.new_price_sig').html('др*');
                $('select').val(sel).trigger('change');
            }

            if (sel == 'AZ') {
                $('.old_price_val').html('69');
                $('.old_price_cur').html('манат');
                $('.old_price_sig').html('манат*');
                $('.new_price_val').html('29');
                $('.new_price_cur').html('манат*');
                $('.new_price_sig').html('манат*');
                $('select').val(sel).trigger('change');
            }

            if (sel == 'KG') {
                $('.old_price_val').html('2758');
                $('.old_price_cur').html('сом');
                $('.old_price_sig').html('сом*');
                $('.new_price_val').html('1099');
                $('.new_price_cur').html('сом*');
                $('.new_price_sig').html('сом*');
                $('select').val(sel).trigger('change');
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();
});