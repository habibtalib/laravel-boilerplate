@if(isset($length))data-balloon-length="{{ $length }}" @endif
data-balloon="{{ $tooltip }}" 
data-balloon-pos="{{ isset($pos) ? $pos : 'up' }}"