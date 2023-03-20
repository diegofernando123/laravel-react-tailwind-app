@php
$class = isset($bold) ? 'bg-gray-800 hover:bg-gray-700 text-white' : ' active:bg-gray-50 hover:text-gray-700 text-gray-400 group';

$class .= ' flex justify-center items-center flex-grow uppercase focus:outline-none text-xs rounded relative';
$class .= isset($compact) ? ' py-2 px-3' : ' py-3 px-8';
$class .= isset($flat) ? '' : ' ';
@endphp
@if (isset($href))
    <a href="{{ $href }}" class="{{ $class }}">{{ $slot ?? '' }}</a>
@else
    <button type="{{ $type ?? 'button' }}" {!! isSet($id) ? 'id="'.$id.'"' : "" !!} class="{{ $class }}"
        {{ $attributes->whereStartsWith('wire:click') }}>
        {{ $slot ?? '' }}
        @if ($attributes->has('wire:click') || $attributes->has('wire:click.stop') || (isset($loading) && $loading))
            <div class="absolute inset-0 rounded overflow-hidden" wire:loading wire:target="{!! $attributes->get('wire:click') ?? $attributes->get('wire:click.stop') !!}">
                <x-ui.loading-indicator :loading="true" bg="bg-white" spinner="border-gray-500" />
            </div>
        @endif
    </button>
@endif
