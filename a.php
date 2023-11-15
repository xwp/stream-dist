<?php

$list = [ 1, 'two', false, null, 0 ];

$rules = array_filter(
    $list,
    'strlen'
);

var_dump( $rules );
