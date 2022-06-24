import { titleScene } from "./scenes/titleScene.ts";
import { exerciseScene } from "./scenes/exerciseScene.ts";

const timeline = (frame: number) => {
    if (frame < 60) {
        return titleScene(frame);
    }
    return exerciseScene(frame - 60);
};

export { timeline };
