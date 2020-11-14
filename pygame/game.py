#!/usr/bin/env/python3
import os
import pygame as pg

main_dir = os.path.split(os.path.abspath(__file__))[0]
asset_dir = os.path.join(main_dir, "assets")

print(asset_dir)

def load_image(name, colorkey=None):
    fullname = os.path.join(asset_dir, name)
    try:
        image = pg.image.load(fullname)
    except pg.error:
        print("Cannot load image:", fullname)
        raise SystemExit(str(geterror()))
    image = image.convert()
    if colorkey is not None:
        if colorkey == -1:
            colorkey = image.get_at((0, 0))
        image.set_colorkey(colorkey, pg.RLEACCEL)
    return image, image.get_rect()

class SoulsBois(pg.sprite.Sprite):
    def __init__(self):
        pg.sprite.Sprite.__init__(self)
        self.image, self.rect = load_image("gba_souls_by_cyangmou.png", -1)
        screen = pg.display.get_surface()
        # get rect bois, lol
        self.area = screen.get_rect()
        self.rect.topleft = 10, 10
    
    def update(self):
        self.rect.move_ip(2, 0)


def main():
    pg.init()
    screen = pg.display.set_mode((800, 600))
    pg.display.set_caption("Souls bois")

    # Create The Backgound
    background = pg.Surface(screen.get_size())
    background = background.convert()
    background.fill((250, 250, 250))

    # Display The Background
    screen.blit(background, (0, 0))
    pg.display.flip()

    # Prepare Game Objects
    clock = pg.time.Clock()
    soulsBois = SoulsBois()
    allsprites = pg.sprite.RenderPlain((soulsBois))


    gameRunning = True
    while gameRunning:
        for event in pg.event.get():
            if event.type is pg.QUIT:
                gameRunning = False
        allsprites.update()

        screen.blit(background, (0, 0))
        allsprites.draw(screen)
        pg.display.flip()


if __name__ == "__main__":
    main()