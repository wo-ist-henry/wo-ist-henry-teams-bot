import {arbeiten, arbeitsweg, feierabend, getWochentag, packen, schlafen, woIstHenry} from './bot-helper.func';
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
    `('$result Test', ({date, result}) => {
        mockDate.set(new Date(date));
        expect(getWochentag()).toBe(result);
    })
})

describe('woIstHenry Antwort', () => {
    it.each`
    date            | result
    ${'2020-09-01T08:00:00'} | ${arbeiten}
    ${'2020-09-01T16:35:00'} | ${packen}
    ${'2020-09-01T19:35:00'} | ${feierabend}
    ${'2020-09-01T23:30:00'} | ${schlafen}
    ${'2020-09-01T03:00:00'} | ${schlafen}
    ${'2020-09-01T07:27:00'} | ${arbeitsweg}
    `('$result Test', ({date, result}) => {
        mockDate.set(new Date(date));
        expect(woIstHenry()).toBe(result);
    })
})

