class Game {
    constructor() {
    }

    start() {
        player = new Player()
        player.getCount()

        form = new Form()
        form.display()

        player1 = createSprite(width / 2 - 400, height / 2 + 100)
        player1.addImage("player1", player1Img)
        player1.scale = 0.6

        player2 = createSprite(width / 2 + 400, height / 2 + 100)
        player2.addImage("player2", player2Img)

        players = [player1, player2]
    }

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val();
        })
    }

    handleElements() {
        form.hide()
        form.img.hide()
    }

    play() {
        this.handleElements()
        Player.getPlayersInfo()
        if(allPlayers !== undefined){
            drawSprites()
        }
    }

    updateState(state) {
        database.ref("/").update({
            gameState: state
        })
    }
}