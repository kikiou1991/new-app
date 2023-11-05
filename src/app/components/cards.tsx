"use client"
import { Card } from '@nextui-org/react'

import React, { useEffect } from 'react'
import Coloumns from './Coloumns'
import {DragDropContext, Draggable, DropResult, Droppable} from '@hello-pangea/dnd';
import { useBoardStore} from '../../../store/BoardStore';
import { Coloumn} from '../../../typing';
import { projectConfig } from '../../../databaseConfig';


interface CardsProps {
  project: string;
}


const Cards: React.FC<CardsProps> = ({project}) => {
  const {
    projectId,
    databaseId,
    todosCollectionId,
  } = projectConfig[project]

const[board, getBoard, setBoardState, updateTodoInDB] = useBoardStore((state) => [
  state.board,
  state.getBoard,
  state.setBoardState,
  state.updateTodoInDB,
])

  useEffect(() => {
    getBoard();
  }, [getBoard, project])

 
  
  const handleOnDragEnd = (result: DropResult) => {
    // Extract relevant information from the result
    const { destination, source, type } = result;
  
    // Check if the user dragged the card outside the board
    if (!destination) return;
  
    // Handle column drag
    if (type === "coloumn") {
      // Create an array of column entries
      const entries = Array.from(board.coloumns.entries());
  
      // Remove the column from the source index
      const [removed] = entries.splice(source.index, 1);
  
      // Insert the column at the destination index
      entries.splice(destination.index, 0, removed);
  
      // Create a new Map with rearranged columns
      const rearrangedColoumns = new Map(entries);
  
      // Update the board state with the rearranged columns
      setBoardState({
        ...board,
        coloumns: rearrangedColoumns,
      });
    }
  
    // Handle item drag
    const coloumns = Array.from(board.coloumns);
    const startColIndex = coloumns[Number(source.droppableId)];
    const finishColIndex = coloumns[Number(destination.droppableId)];
  
    // Create column objects from the source and destination
    const startCol = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };
    const finishCol = {
      id: finishColIndex[0],
      todos: finishColIndex[1].todos,
    };
  
    // Check if the source or destination column is missing
    if (!startCol || !finishCol) return;
  
    // Check if the card was dropped in the same position in the same column
    if (source.index === destination.index && startCol === finishCol) return;
  
    // Create a copy of the todos in the source column
    const newTodos = [...startCol.todos];
  
    // Remove the dragged todo from the source column
    const [todoMoved] = newTodos.splice(source.index, 1);
  
    // Handle the case where the card is dragged within the same column
    if (startCol.id === finishCol.id) {
      // Reorder todos in the same column
      newTodos.splice(destination.index, 0, todoMoved);
  
      // Create a new column object with updated todos
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
  
      // Create a new Map with the updated column
      const newColoumns = new Map(board.coloumns);
      newColoumns.set(startCol.id, newCol);
  
      // Update the board state with the rearranged column
      setBoardState({ ...board, coloumns: newColoumns });
    } else {
      // Handle the case where the card is dragged to another column
      const finishTodos = [...finishCol.todos];
  
      // Insert the dragged todo into the destination column
      finishTodos.splice(destination.index, 0, todoMoved);
  
      // Create a copy of the columns map
      const newColoumns = new Map(board.coloumns);
  
      // Create a new column object with updated todos for the source column
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
  
      // Update the source column in the map
      newColoumns.set(startCol.id, newCol);
  
      // Create a new column object for the destination column with updated todos
      newColoumns.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });
  
      // Update the board state with the rearranged columns
      setBoardState({ ...board, coloumns: newColoumns });
  
      // Update the todo in the database to reflect its new column
      updateTodoInDB(todoMoved, finishCol.id);
    }
  };
  


  return (
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='board' direction='horizontal' type='coloumn'>
        {(provided) => 
        <div
        className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >{
        Array.from(board.coloumns.entries()).map(([id, coloumn], index) => (
            <Coloumns
            key={id}
            id={id}
            todos={coloumn.todos}
            index={index}
           />


        ))
        }
          </div>}
      </Droppable>
    </DragDropContext>

  )
}

export default Cards