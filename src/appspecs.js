const isValidPassword = require('./passwordChecker');
describe('Password validation', () => {
    it('should be at least 8 characters ', () => {
        expect(isValidPassword('short1')).toBe(false);
        expect(isValidPassword('loughlough1!')).toBe(true);
    });
    it('should have at least 1 special char ', () => {
        expect(isValidPassword('cuba1cuba1')).toBe(false);
        expect(isValidPassword('luca1%luca1')).toBe(true);
    });
    it('should have at least 1 digit char ', () => {
        expect(isValidPassword('cubacuba%%')).toBe(false);
        expect(isValidPassword('cuba9cuba%%')).toBe(true);
    });
    it('should not contain ipl ', () => {
        expect(isValidPassword('trouva1%trouvaipl')).toBe(false);
        expect(isValidPassword('trouva%%1trou')).toBe(true);
    });

})