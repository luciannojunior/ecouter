export const SELECT_CD = 'SELECT_CD';

export function selectCd(cd){
    return {
        type: SELECT_CD,
        payload: cd
    };
};