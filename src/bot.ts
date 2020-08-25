// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {ActivityHandler, MessageFactory} from 'botbuilder';
import {botReaction, getWochentag} from './bot-helper.func';

export class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const userName = context?.activity?.name || '';
            const replyText = botReaction(userName, context.activity.text);

            await context.sendActivity(MessageFactory.text(replyText, replyText));
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = `Hallo ${context.activity.name}, ich wünsche dir einen wundervollen ${getWochentag()}!`;

            if (membersAdded != null) {
                for (const member of membersAdded) {
                    if (member.id !== context.activity.recipient.id) {
                        await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                    }
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}
