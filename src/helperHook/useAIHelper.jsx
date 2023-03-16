import React, { useState, useEffect } from 'react';

import status from './status';

import { states, actions } from '~/recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { gameState, handleGameState } from '~/recoil/listState';

const path = [0, 1, 2, 3, 4, 7, 8, 9];

const useAIHelper = () => {
    const [isWin, setIsWin] = useState(false);
    const stateMovement = useSetRecoilState(states.handleGameState);
    const setGo = useSetRecoilState(handleGameState);
    const val = useRecoilValue(gameState);
    const [current, setCurrent] = useState(0);

    const getStatus = (tiger, sheep, carrot, farmer) => {
        const statusCur = [tiger, sheep, carrot, farmer].join(',');
        if (status[statusCur] >= 0 && status[statusCur] < 10) return status[statusCur];
        alert('Bạn không thể hoàn thành công việc');
    };

    const goStep = (cur, next) => {
        setGo(actions.setRaft({ pos: val.raft.pos === 1 ? 2 : 1, ref: val.raft.ref }));
    };

    const handleHelp = () => {
        const currentStatus = getStatus(val.tiger.river, val.sheep.river, val.carot.river, val.farmer.river);
        setCurrent(currentStatus);
        goStep(0, 1);
    };

    return { isWin, handleHelp };
};

export default useAIHelper;
