import React from 'react'
import { BlueDot } from './svgs/bluedot';
import { YellowDot } from './svgs/yellowdot';
import { LightBlueDot } from './svgs/lightblue-dot';
import { BlueLine } from './svgs/blue-line';
import { OrangeLine } from './svgs/orangeline';
import { GreenLine } from './svgs/green-line';
import { Add } from './svgs/add';
import { Button } from '@nextui-org/react';
import {  Todo, TypedColoumn } from '../../../typing';
import TodoCard from './todocard';
import { Draggable, DraggableProvided, Droppable } from '@hello-pangea/dnd';

type Props = {
    id: TypedColoumn;
    todos: Todo[];
    index: number;
    
     }

const idToColoumnText: {
    [key in TypedColoumn]: string;
} = {
    todo: 'To Do',
    inprogress: 'In Progress',
    done: 'Done'
}

function Coloumns({id,todos, index}: Props) {

    const renderDot = (id: TypedColoumn) => {
        switch (id) {
          case 'todo':
            return <BlueDot />;
          case 'inprogress':
            return <YellowDot />;
          case 'done':
            return <LightBlueDot />;
          default:
            return null;
        }
      }
 const renderLine = (id: TypedColoumn) => {
    switch (id) {
        case 'todo':
          return <BlueLine />;
        case 'inprogress':
          return <OrangeLine />;
        case 'done':
          return <GreenLine />;
        default:
          return null;
      }
 }

  return (

    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                <Droppable droppableId={index.toString()} type='card'>
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver ? " bg-green-200" : "bg-white/50"}`}
                        >
                         <div className='flex flex-row justify-between items-center'>
                                <div className='flex gap-1 items-center'>
                                    {renderDot(id)}
                                    <h2 className='font-bold text-xl'>{idToColoumnText[id]}</h2>
                                </div>
                                <span className='text-gray-500 bg-gray-200 font-normal rounded-full px-2 py-1 text-sm'>
                                    {todos.length}
                                </span>
                         </div>
                         <div className='mx-auto p-2'>
                            {renderLine(id)}

                         </div>

                        <div className='space-y-2'>
                            {todos.map((todo, index) => (
                                <Draggable
                                    key={todo.$id}
                                    draggableId={todo.$id}
                                    index={index}
                                >
                                {(provided) => (
                                    <TodoCard
                                        todo={todo}
                                        index={index}
                                        id={id}
                                        innerRef={provided.innerRef}
                                        draggableProps={provided.draggableProps}
                                        dragHandleProps={provided.dragHandleProps}
                                        priority={todo}
                                    />
                                )}

                                </Draggable>
                            ))}

                            {provided.placeholder}
                            <div>
                                <Button isIconOnly size='sm' className='bg-slate-100 flex items-end justify-end p-2'>
                                    <Add/>
                                </Button>
                            </div>
                        </div>

                        </div>
                    )}
                </Droppable>
            </div>
        )}

    </Draggable>
  
  )
}

export default Coloumns;

