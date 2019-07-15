
import { IsPhoneNumberValid } from './index';

describe('Phone Number Validator', () => {
	test('should be valid if the given format is (xxx)xxx-xxxx', () => {
		var input = '(911)911-4545';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be valid if the given format is (xxx) xxx-xxxx', () => {
		var input = '(911) 911-4545';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be valid if the given format is xxx-xxx-xxxx', () => {
		var input = '123-456-7890';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be valid if the given format is xxx.xxx.xxxx', () => {
		var input = '123.456.7890';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be valid if the given format is xxxxxxxxxx', () => {
		var input = '1234567890';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be invalid if the given the input is a 9 digit number', () => {
		var input = 123456789;
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(false);
	});


	test('should be valid if the given the input is a 10 digit number', () => {
		var input = 1234567890;
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(true);
	});

	test('should be invalid if the given format is xxx-xxx-xxx', () => {
		var input = '222-222-222';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(false);
	});

	test('should be invalid if the given format is xxx-xx-xxx', () => {
		var input = '222-22-222';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(false);
	});

	test('should be invalid if the given format is xx-xx-xxx', () => {
		var input = '22-22-222';
		var actual = IsPhoneNumberValid(input);

		expect(actual).toBe(false);
	});
});
