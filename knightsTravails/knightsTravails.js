class Node{
    constructor(x,y, parent = null){
        this.x = x;
        this.y = y;
        this.parent = parent
    }
    
    getChildren(){
        let children = [];
        let potentialMoves = [
            [-2,-1],
            [-1,-2],
            [1,-2],
            [2,-1],
            [-2,1],
            [-1,2],
            [1,2],
            [2,1]
        ]
        for (let move of potentialMoves){
            let x = this.x + move[0];
            let y = this.y + move[1];
            if (x>=0 && x<=7 && y>=0 && y<=7){
                children.push(new Node(x,y,this));
            }
        }
        return children;
    }
}


function knightMoves(start,end){
        let queue = [];
        let visited = new Set();
        queue.push(start);
        while(queue.length){
            let node = queue.shift();
                if(node.x == end.x && node.y == end.y){
                    const path = [];
                    while (node){
                        path.push([node.x,node.y]);
                        node = node.parent;
                    }
                    return path.reverse()
                }
                visited.add((`${node.x}, ${node.y}`))
                for (const child of node.getChildren()){
                    if (!visited.has(`${child.x}, ${child.y}`)){
                        queue.push(child);
                }
            }
          
        }      
    return null
}



const startNode = new Node(3,3);
const endNode = new Node(4,3);
const moves = knightMoves(startNode,endNode);
console.log(`You made it in ${moves.length} moves! Here's your path:`);
moves.forEach(move => console.log(move));

