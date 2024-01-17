

@extends('layouts.app')

@section('title', 'Tasks List')

@section('content')
    @if(count($tasks)) 
        <div>There are tasks</div>
        <div>Here is the list</div>
        @foreach($tasks as $task)
            <div><a href="{{ route('tasks.show', ['id' => $task->id]) }}">{{$task->title}}</a></div>
        @endforeach
    @else
        <div>There are no tasks</div>
    @endif
    <hr />
    @forelse($tasks as $task)
        <div>{{$task->title}}</div>
    @empty
        <div>There are no tasks</div>
    @endforelse
@endsection