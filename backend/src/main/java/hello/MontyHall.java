package hello;

public class MontyHall {
    private int doorCount = 3;

    private int iterations = 1000;
    private boolean switchDoor = true;

    public MontyHall(int iterations, boolean switchDoor) {
        this.iterations = iterations;
        this.switchDoor = switchDoor;
    }

    public int run() {
        int i = 0;
        int wins = 0;
        do {
            double door = getDoor();
            double guess = getDoor();
            if ((guess == door && !this.switchDoor) || (guess != door && this.switchDoor)) {
                wins++;
            }
            i++;
        } while (i < this.iterations);
        return wins;
    }

    private double getDoor() {
        return Math.floor(Math.random() * this.doorCount);
    }
}