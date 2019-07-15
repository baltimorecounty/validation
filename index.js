/**
 * Determines whether or not a phone number is in a valid format
 *
 * Valid Formats
 * - (123)456-7890
 * - (123) 456-7890
 * - 123-456-7890
 * - 123.456.7890
 * - 1234567890 (string and number)
 *
 * @param {string|number} phoneNumber
 */
const IsPhoneNumberValid = (phoneNumber) => {
	const validPhoneNumberRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
	return validPhoneNumberRegex.test(phoneNumber);
};

export { IsPhoneNumberValid };
