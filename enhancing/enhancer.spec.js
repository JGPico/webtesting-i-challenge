const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', function(){
    it('Should run tests without errors', function(){
    });
    describe('repair()', function(){
        it("Should accept an object argument and set it's durability key to have a value of 100", 
        function(){
            const item = {
                name: "Stick",
                durability: 4,
                enhancement: 0
            }
            let repairedItem = enhancer.repair(item);
            expect(repairedItem.durability).toBe(100);
        });
    });

    describe('succeed()', function(){
        it("Should modify the accepted object according to specifications, with the enhanced value increasing", 
        function(){
            const item = {
                name: "Stick",
                durability: 4,
                enhancement: 0
            }
            const coolItem = {
                name: "Stick of Doom",
                durability: 100,
                enhancement: 20
            } 
            let enhancedItem = enhancer.succeed(item);
            let enhancedCoolItem = enhancer.succeed(coolItem);
            expect(enhancedItem.enhancement).toBe(1);
            expect(enhancedItem.durability).toBe(4);
            expect(enhancedCoolItem.enhancement).toBe(20);
        });
    });

    describe('fail()', function(){
        it("Should modify the object argument according to specifications, with enhancment and durability decreasing in value", 
        function(){
            const item = {
                name: "Stick",
                durability: 4,
                enhancement: 0
            }
            const midItem = {
                name: "Stick of Whacking",
                durability: 20,
                enhancement: 4
            }
            const coolItem = {
                name: "Stick of Doom",
                durability: 100,
                enhancement: 20
            } 
            let failItem = enhancer.fail(item);
            let failMidItem = enhancer.fail(midItem);
            let failCoolItem = enhancer.fail(coolItem);
            expect(failMidItem.durability).toBe(15);
            expect(failMidItem.enhancement).toBe(4);
            expect(failCoolItem.durability).toBe(90);
            expect(failCoolItem.enhancement).toBe(19);
            expect(failItem.durability).toBe(0);
            expect(failItem.enhancement).toBe(0);
        });
    });

    describe('get()', function(){
        it("Should change the name to have a plus value equal to the enhancement level", 
        function(){
            const item = {
                name: "Stick",
                durability: 4,
                enhancement: 0
            }
            const midItem = {
                name: "Stick of Whacking",
                durability: 20,
                enhancement: 4
            }
            let gotItem = enhancer.get(item);
            let gotMidItem = enhancer.get(midItem);
            expect(gotItem.name).not.toContain('[+0]');
            expect(gotMidItem.name).toContain('[+4]');
        });
    });
});
