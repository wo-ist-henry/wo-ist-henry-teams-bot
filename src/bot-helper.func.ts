import moment = require('moment');

export function getWochentag(): string {
    let wochentag = 'Tag';
    switch ( moment().isoWeekday()) {
        case 1:
            wochentag = 'Montag';
            break;
        case 2:
            wochentag = 'Dienstag';
            break;
        case 3:
            wochentag = 'Mittwoch';
            break;
        case 4:
            wochentag = 'Donnerstag';
            break;
        case 5:
            wochentag = 'Freitag';
            break;
        case 6:
            wochentag = 'Samstag';
            break;
        case 7:
            wochentag = 'Sonntag';
            break;
    }
    return wochentag;
}
