import { Message } from 'eris';

import { IMClient } from '../../../client';
import { BotCommand, CommandGroup } from '../../../types';
import { CommandContext, IMCommand } from '../Command';

export default class extends IMCommand {
	public constructor(client: IMClient) {
		super(client, {
			name: BotCommand.prefix,
			aliases: [],
			group: CommandGroup.Info,
			defaultAdminOnly: false,
			guildOnly: true
		});
	}

	public async action(message: Message, args: any[], flags: {}, { settings, t }: CommandContext): Promise<any> {
		return this.sendReply(
			message,
			t('cmd.prefix.title', {
				prefix: settings.prefix
			})
		);
	}
}
