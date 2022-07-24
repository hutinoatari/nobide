import { titleScene } from "./scenes/titleScene.ts";
import { boundScene } from "./scenes/boundScene.ts";

const timeline = (frame: number) => {
    if (frame < 10) return titleScene(frame);
    return boundScene(frame - 10);
};

export { timeline };
