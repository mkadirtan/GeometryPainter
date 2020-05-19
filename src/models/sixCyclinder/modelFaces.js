let top = [];
let side = [];
let bot = [];
let sides = 6;

for(let i = 0; i < sides ; i++){
    top.push(i+(sides*3));
    bot.push(i+(sides*2));
    side.push(i+sides);
    side.push(i);
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