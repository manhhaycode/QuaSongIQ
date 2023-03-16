/* Danh sách status của graph
    <Sói>,<Dê>,<Cà rốt>,<Người>
*/
export const status = {
    '1,1,1,1': 0,
    '1,2,1,2': 1,
    '1,2,1,1': 2,
    '2,2,1,2': 3,
    '2,1,1,1': 4,
    '1,2,2,2': 5,
    '1,1,2,1': 6,
    '2,1,2,2': 7,
    '2,1,2,1': 8,
    '2,2,2,2': 9,
};

export const graph = {
    0: [1],
    1: [0, 2],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 7],
    5: [2, 6],
    6: [5, 7],
    7: [4, 6, 8],
    8: [7, 9],
    9: [8],
};

export const BFS = (graph, startNode, endNode) => {
    const visited = {};
    const queue = [[startNode, []]];

    while (queue.length) {
        const [currentNode, path] = queue.shift();

        if (!visited[currentNode]) {
            visited[currentNode] = true;

            if (currentNode === endNode) {
                path.push(currentNode);
                return path;
            }

            path.push(currentNode);

            for (let neighbor of graph[currentNode]) {
                queue.push([neighbor, [...path]]);
            }
        }
    }

    return null;
};
