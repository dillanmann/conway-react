import GameOfLifeSimulator from '../GameOfLifeSimulator';

let simulator = null;

beforeEach(() => {
    simulator = new GameOfLifeSimulator();
})

describe('CalculateNextStateTests', () => {
    it('IsAlive_Has1Neighbour_Dies', () => {
        const currentState = true;
        const neighbours = 0;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(false);
    });

    it('IsAlive_Has2Neighbours_StaysAlive', () => {
        const currentState = true;
        const neighbours = 2;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(true);
    });

    it('IsAlive_Has3Neighbours_StaysAlive', () => {
        const currentState = true;
        const neighbours = 3;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(true);
    });

    it('IsAlive_Has4Neighbours_Dies', () => {
        const currentState = true;
        const neighbours = 4;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(false);
    });

    it('IsDead_Has1Neighbour_StaysDead', () => {
        const currentState = false;
        const neighbours = 1;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(false);
    });

    it('IsDead_Has2Neighbours_StaysDead', () => {
        const currentState = false;
        const neighbours = 2;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(false);
    });

    it('IsDead_Has3Neighbours_BecomesAlive', () => {
        const currentState = false;
        const neighbours = 3;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(true);
    });

    it('IsDead_Has4Neighbours_StaysDead', () => {
        const currentState = false;
        const neighbours = 4;
        expect(simulator.calculateNextState(currentState, neighbours)).toBe(false);
    });
});

describe('AliveNeighboursTests', () => {
    let grid = null;
    beforeEach(() => {
        grid = [
            [true, false, true],
            [true, true, true],
            [false, false, false]
        ]
    });
    it('Origin_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 0, 0)).toBe(2);
    });
    it('TopMiddle_Has5AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 0, 1)).toBe(5);
    });
    it('TopRight_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 0, 2)).toBe(2);
    });
    it('MiddleLeft_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 1, 0)).toBe(2);
    });
    it('Center_Has4AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 1, 1)).toBe(4);
    });
    it('MiddleRight_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 1, 2)).toBe(2);
    });
    it('BottomLeft_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 2, 0)).toBe(2);
    });
    it('BottomMiddle_Has3AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 2, 1)).toBe(3);
    });
    it('BottomRight_Has2AliveNeighbours', () => {
        expect(simulator.getAliveNeighbours(grid, 2, 2)).toBe(2);
    });
});

describe('SimulateTickTests', () => {
    it('ChangeState', () => {
        const grid = [
            [true, false, false, true],
            [true, true, false, false],
            [false, false, true, true],
            [false, true, true, true]
        ];
        const expected = [
            [true, true, false, false],
            [true, true, false, true],
            [true, false, false, true],
            [false, true, false, true]
        ];
        const nextFrame = simulator.simulateTick(grid);
        expect(nextFrame).toEqual(expected);
    })
});