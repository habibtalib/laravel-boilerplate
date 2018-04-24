@push('styles')
	<link rel="stylesheet" href="{{ asset('css/datatable.css') }}">
@endpush

@push('scripts')
	<script type="text/javascript" src="{{ asset('js/datatable.js') }}"></script>
	<script type="text/javascript">
		jQuery(document).ready(function($) {
			var table_{{ str_slug($table_id, '_') }} = $('#{{ $table_id }}').DataTable({
				@isset($lang)
				language: {
					url: '{{ asset($lang) }}'
				},
				@endisset
				processing: true,
				serverSide: true,
				responsive: true,
				deferRender: false,
				ajax: {
					url:'{!! route($route_name, $param ?? null) !!}',
					{{ $datatable_data or ''}}
				},
				columns: @json($columns),
				columnDefs: [
					{
						{{ $actions or '' }}
						"targets": -1
					}
				]
			});
			{{ $datatable_handler or ''}}
		});
	</script>
@endpush

@component('components.table', ['table_id' => $table_id])
	@isset($headers)
		@slot('thead')
			@foreach($headers as $header)
				<th>{{ $header }}</th>
			@endforeach
		@endslot
	@endisset
	
	@isset($footers)
		@slot('tfoot')
			@foreach($footers as $footer)
				<th>{{ $footer }}</th>
			@endforeach
		@endslot
	@endisset
@endcomponent
