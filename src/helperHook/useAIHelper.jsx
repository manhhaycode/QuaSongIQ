import React, { useState, useEffect } from 'react';

import { status, graph, BFS } from './util';

import { states, actions } from '~/recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameState, handleGameState } from '~/recoil/listState';

const renderPath = (start) => {
    const path = BFS(graph, start, 9);

    return path.map((node) => Object.keys(status).find((key) => status[key] === node));
};

const useAIHelper = () => {
    const stateMovement = useSetRecoilState(states.handleGameState);
    const setGo = useSetRecoilState(handleGameState);
    const val = useRecoilValue(gameState);

    const getStatus = (tiger, sheep, carrot, farmer) => {
        const statusCur = [tiger, sheep, carrot, farmer].join(',');
        if (status[statusCur] >= 0 && status[statusCur] < 10) return status[statusCur];
        alert('Bạn không thể hoàn thành công việc');
    };

    const goStep = (cur, next) => {
        const [curTiger, curSheep, curCarrot, curFarmer] = cur.split(',').map((item) => parseInt(item));
        const [nextTiger, nextSheep, nextCarrot, nextFarmer] = next.split(',').map((item) => parseInt(item));
        stateMovement(actions.setTigerOnBoat({ status: curTiger !== nextTiger, pos: 2 }));
        stateMovement(actions.setSheepOnBoat({ status: curSheep !== nextSheep, pos: 2 }));
        stateMovement(actions.setCarotOnBoat({ status: curCarrot !== nextCarrot, pos: 2 }));
        stateMovement(actions.setfarmerOnBoat({ status: curFarmer !== nextFarmer, pos: 1 }));

        setTimeout(() => {
            setGo(actions.setRaft({ pos: nextFarmer, ref: val.raft.ref }));
            stateMovement(actions.setTigerRiver(nextTiger));
            stateMovement(actions.setSheepRiver(nextSheep));
            stateMovement(actions.setCarotRiver(nextCarrot));
        }, [1000]);
    };

    const handleHelp = () => {
        const currentStatus = getStatus(val.tiger.river, val.sheep.river, val.carot.river, val.farmer.river);
        const path = renderPath(currentStatus);
        for (let i = 0; i < path.length - 1; i++) {
            setTimeout(() => {
                goStep(path[i], path[i + 1]);
            }, [1000 * i]);
        }
    };

    return { handleHelp };
};

export default useAIHelper;
