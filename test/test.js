const util=require('../src/index');
describe('index.js',function () {
     it('isNum() should work fine',function () {
         expect(util.isNum(1)).toEqual(true);
         expect(util.isNum('1')).toEqual(false);
     })
});