const ScoreBoard = {
    ctx: undefined,

    init: function (ctx) {
        this.ctx = ctx
        this.ctx.font = "30px sans-serif"
    },

    update: function (score) {


        this.ctx.fillStyle = "white";
        this.ctx.fillText("SCORE", 20, 50);
        this.ctx.fillText(Math.floor(score), 200, 50);
    }
};