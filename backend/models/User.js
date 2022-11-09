const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: { type: 'string', required: true },
	lastName: { type: 'string', required: true },
	password: { type: 'string', required: true},
	email: { type: 'string', required: true, unique: true},
	},
	{
	timestamps: true,
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		}
	}
)

module.exports = mongoose.model('User', userSchema);