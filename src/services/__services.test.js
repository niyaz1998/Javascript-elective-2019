import * as helpers from './timeHelper';


describe('Testing time helpers', () => {
    it('should compute correctly', () => {


        expect(helpers.HH_MMtoMinutes("10:20")).toBe(620);
        expect(helpers.MinutesToHH_MM(620)).toBe("10:20");
    })
});