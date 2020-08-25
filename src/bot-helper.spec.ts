import {getWochentag} from './bot-helper.func';
import mockDate from 'mockdate';

describe('Wochentags Test', () => {
    it.each`
    date            | result
    ${'2020-09-01'} | ${'Dienstag'}
    ${'2020-08-26'} | ${'Mittwoch'}
    ${'2020-08-27'} | ${'Donnerstag'}
    ${'2020-08-28'} | ${'Freitag'}
    ${'2020-08-29'} | ${'Samstag'}
    ${'2020-08-30'} | ${'Sonntag'}
    ${'2020-08-31'} | ${'Montag'}
    `('text', ({date, result}) => {
        mockDate.set(new Date(date));
        expect(getWochentag()).toBe(result);
    })
})
