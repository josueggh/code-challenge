import * as functions from 'firebase-functions';

function randomNumberBetween(min: number = 1, max: number = 9999): number{
    return Math.floor(Math.random() * max) + min ;   
}

function randomDateBetween(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const generalInfo = functions.https.onRequest((request, response) => {
    const mock_data = {
        number_pigs: randomNumberBetween(),
        weeks_old: randomNumberBetween(1,9),
        group_id: randomNumberBetween(20000,99000),
        start_at: randomDateBetween( new Date(2018, 0, 1), new Date())
    };
    return response
        .set({ 'Access-Control-Allow-Origin': '*' })
        .json(mock_data);
});

export const alerts = functions.https.onRequest((request, response) => {
    const mock_data = [{
        name : 'Water const. alert',
        value: '0.48 gal avg. per day',
        reported_at: '2 hours ago',
        type: 'danger',
        icon: 'alert-icon',
        created_at: randomDateBetween( new Date(2018, 0, 1), new Date())
    }];
    return response
        .set({ 'Access-Control-Allow-Origin': '*' })
        .json(mock_data);
});