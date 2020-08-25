import moment = require('moment');

export function getWochentag(): string {
    let wochentag = 'Tag';
    switch (moment().isoWeekday()) {
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

export const arbeiten = 'Am arbeitsplatz und macht die Welt von vielen Pflegekräften in Deutschland besser!';
export const packen = 'Er packt vielleicht noch seine Sachen zusammen und ist an seinem Platz';
export const feierabend = 'Henry hat Feierabend und ist überall, aber nicht mehr an seinem Schreibtisch.';
export const schlafen = 'Pscht! Henry schläft.';
export const arbeitsweg = 'Keine Sorge, Henry ist auf dem Weg zu dir und bald da.';
export const verschwunden = 'Hmm..., ich weiß gerade auch nicht wo Henry ist.';

export function woIstHenry(): string {
    const format = 'hh:mm';
    const jetzt = moment();

    if (jetzt.isBetween(moment('07:59', format), moment('16:30', format))) {
        return arbeiten;
    }
    if (jetzt.isBetween(moment('16:31', format), moment('17:00', format))) {
        return packen;
    }
    if (jetzt.isBetween(moment('17:01', format), moment('21:00', format))) {
        return feierabend;
    }
    if (jetzt.isBetween(moment('21:01', format), moment('24:00', format))
        || (jetzt.isBetween(moment('00:00', format), moment('07:00', format)))
    ) {
        return schlafen;
    }
    if (jetzt.isBetween(moment('07:01', format), moment('08:00', format))) {
        return arbeitsweg;
    }
    return verschwunden;
}

export function botReaction(username: string, frage: string): string {
    let replyText = '';
    console.log(frage);
    switch (frage) {
        case 'hallo':
            replyText = `Hallo ${username}, wie kann ich dir helfen?`;
            break;
        case 'wo':
        case 'wo ist henry':
            replyText = woIstHenry();
            break;
        case 'hilfe': {
            replyText = `Du kannst mich fragen wo Henry ist mit dem Befehl: "Wo" oder "Wo ist Henry"`;
            break;
        }
        default:
            replyText = `${username} ich habe dich leider nicht verstanden. Versuch doch bitte mal den "Hilfe" befehl`;
            break;
    }

    return replyText;
}
