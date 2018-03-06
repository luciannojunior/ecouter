export const SELECT_CD = 'SELECT_CD';
export const SELECT_AUDIO = 'SELECT_AUDIO';

export function selectCd(cd){
    return {
        type: SELECT_CD,
        payload: cd
    };
};

export function selectAudio(audio){
    return {
        type: SELECT_AUDIO,
        payload: audio
    };
};