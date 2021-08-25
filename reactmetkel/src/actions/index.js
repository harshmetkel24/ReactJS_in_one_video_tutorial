// incNumver is action creator method
// actions define what to do

export const incNumver = (num) => {
    return {
        type: 'INCREMENT',
        payload: num,
    };
};

export const decNumber = (num) => {
    return {
        type: 'DECREMENT',
        payload: num,
    };
};
