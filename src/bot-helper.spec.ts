import {getWochentag} from './bot-helper.func';

describe('Wochentags Test', () => {
    it.each`
    date
    ${'2020-08-25'}
    `('text', (date) => {
       jest.mock('moment', () =>{
           return () => jest.requireActual('moment')(date)
       })
        expect(getWochentag()).toBe('Dienstag');
    })
})
