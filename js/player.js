class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.positionX = 0;
        this.positionY = 0;
    }

    addPlayer() {
        var pi = "players/player" + this.index
        database.ref(pi).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY
        })
    }

    getCount() {
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    update(count) {
        database.ref("/").update({
            playerCount: count
        });
    }

    static getPlayersInfo() {
        var playerRef = database.ref("players")
        playerRef.on("value", (data) => {
            allPlayers = data.val()
        })
    }
}