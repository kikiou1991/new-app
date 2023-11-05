"use client"
import React from 'react'
import { Prio, Todo, TypedColoumn } from '../../../typing';
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from '@hello-pangea/dnd';
import { Chip } from '@nextui-org/react';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColoumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    priority: Todo;
    
}


const TodoCard = ({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
    priority,
    
    
    
}: Props) => {
    
  return (
    <div
        className='bg-white rounded-md space-y-2 drop-shadow-md'
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
    >
        <div className='p-3'>
            <Chip color="warning" variant="dot">{todo.priority}</Chip>
            <p>{todo.title}</p>
            
        </div>
     
    </div>
  )
}

export default TodoCard