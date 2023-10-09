controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.y = 10
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverMessage(false, "falled")
    game.gameOver(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f d d f f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f 9 f . . . . . . . 
    . . . . . f f 9 f f . . . . . . 
    . . . . f . f 9 f . f . . . . . 
    . . . f . . f f f . . f . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 160
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite.vx = 80
    info.changeScoreBy(1)
})
