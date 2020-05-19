let top = [];
let side = [];
let bot = [];

for(let i = 0;  i<32; i++){
    top.push(   i+(32*3));
    bot.push(  i+(32*2));
    side.push(  i+32);
    side.push(   i);
}

export default [
    {
        id: 0,
        idList: bot
    },
    {
        id: 1,
        idList: side
    },
    {
        id: 2,
        idList: top
    }
]