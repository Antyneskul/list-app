import { formatData } from './index';

describe('Format data helper', () => {

    it('should beautify object', () => {
        const expected = {
            'user name': 'Alex',
            'birth date': '16 of May'
        };
        expect(formatData({user_name: 'Alex', birth_date: '16 of May'})).toEqual(expected);
    });

    it('should return an empty object', () => {
        expect(formatData({})).toEqual({});
    });

    it('should format date', () => {
        const expected = {
            created: new Date('2014-12-15T12:31:42.547000Z').toLocaleDateString()
        };
        expect(formatData({created: '2014-12-15T12:31:42.547000Z'})).toEqual(expected);
    });
});
