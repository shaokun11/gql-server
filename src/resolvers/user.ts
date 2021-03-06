import {IResolvers} from "apollo-server-koa";

const user: IResolvers = {
	Query: {
		users: (parent, args, {models}) => {
			return Object.values(models.users);
		},
		user: (parent, {id}, {models}) => {
			return models.users[id];
		},
	},
	User: {
		messages: (user, args, {models}) => {
			return Object.values(models.messages).filter(
				//@ts-ignore
				(message) => message.userId === user.id
			);
		},
	},
};


export default user;
