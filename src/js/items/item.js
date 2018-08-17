class Item {

    constructor() {
        this.x = this.y = 0;
        this.scaleRandom = random()
    }

    cycle(e) {
        const distance = dist(this, U.playerShip);

        if (distance < ITEM_MAGNETIZED_RADIUS) {
            const angle = atan2(U.playerShip.y - this.y, U.playerShip.x - this.x);
            this.x += cos(angle) * min(distance, ITEM_MAGNETIZED_SPEED * e);
            this.y += sin(angle) * min(distance, ITEM_MAGNETIZED_SPEED * e);
        }

        if (distance < ITEM_PICKUP_RADIUS) {
            U.remove(U.items, this);
        }
    }

    render() {
        wrap(() => {
            translate(this.x, this.y);
            scale(sin(this.scaleRandom + PI * 2 * G.clock), 1); // Give the item a nice flip animation

            this.renderGraphic();
        });
    }

    // For reference only
    // renderGraphic() {

    // }

}