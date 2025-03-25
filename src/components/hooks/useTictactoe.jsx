import {useState} from "react";
import X from '../../assets/X.png';
import O from '../../assets/O.png';

const initialBoard = () => Array(9).fill(null);
const useTictactoe = () => {
    const[board, setBoard] = useState(initialBoard());
    const[isXNext, setIsXNext] = useState(true);
    const WinningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]];

    const calculateWinner =(currentBoard)=>{
        for(let pattern of WinningPatterns){
            const [a,b,c] = pattern;
            if(currentBoard[a] && 
                currentBoard[a]?.props?.alt === currentBoard[b]?.props?.alt && 
                currentBoard[a]?.props?.alt === currentBoard[c]?.props?.alt
            ){
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick =(index)=>{
        const winner = calculateWinner(board);
        if(winner || board[index]){
            return;
        };
        
        const newBoard = [...board];
        if(isXNext){
            newBoard[index] = <img src={X} alt = "X"/>
        }
        else{
            newBoard[index] = <img src={O} alt = "O"/>
        }
        
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const getStatusMessage =()=>{
        const winner = calculateWinner(board)?.props?.alt;
        if(winner){
            return `Winner: ${winner}`;
        }
        if(!board.includes(null)){
            return `It's a draw!`;
        }
        return `It is ${isXNext ? "X" : "O"}'s turn`;
    };

    const resetGame =()=>{
        setBoard(initialBoard());
        setIsXNext(true);
    };

    return {board, handleClick, calculateWinner, getStatusMessage, resetGame};
}

export default useTictactoe;