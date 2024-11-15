import { z } from 'zod';

export const schema = z.object({
	name: z
		.string()
		.min(1, 'Name is required')
		.max(55, 'Name must be 55 characters or less')
		.default(''),
	email: z
		.string()
		.email('Please enter a valid email address')
		.max(255, 'Email must be 255 characters or less')
		.default(''),
	phone: z
		.string()
		.regex(/^(\+1\s?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/, 'Please enter a valid phone number')
		.max(20, 'Phone number must be 20 characters or less')
		.default(''),
	inquiry: z
		.string()
		.min(1, 'A message is required')
		.max(5000, 'Additional comments must be 5000 characters or less')
		.default('')
});
