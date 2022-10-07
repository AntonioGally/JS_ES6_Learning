import { Tv, ITv } from "../Tv";
import {
    CreateFrame, CreateScreen, CreateMotherBoard, CreateReceiver,
    CreateBackPlate, CreateSpeaker, CreateVRBoard
} from "../FancyTvFactory"

export class AssembleFancyTv {
    tv: ITv;
    constructor() {
        this.tv = new Tv();
        // orchestrator
        new AddFrame(this.tv).do();
        new AddScreen(this.tv).do();
        new AddMotherBoard(this.tv).do();
        new AddReceiver(this.tv).do();
        new AddReceiver(this.tv).do();
        new AddBackPlate(this.tv).do();
        new AddSpeaker(this.tv).do();
        new AddVRBoard(this.tv).do();
    }
    getMountedTv() {
        return this.tv.getTv();
    }
}

class AddFrame {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("Frame", new CreateFrame());
    }
    undo() {
        this.tv.removeComponent("Frame");
    }
}

class AddScreen {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("Screen", new CreateScreen());
    }
    undo() {
        this.tv.removeComponent("Screen");
    }
}

class AddMotherBoard {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("MotherBoard", new CreateMotherBoard());
    }
    undo() {
        this.tv.removeComponent("MotherBoard");
    }
}

class AddReceiver {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("Receiver", new CreateReceiver());
    }
    undo() {
        this.tv.removeComponent("Receiver");
    }
}

class AddBackPlate {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("BackPlate", new CreateBackPlate());
    }
    undo() {
        this.tv.removeComponent("BackPlate");
    }
}

class AddSpeaker {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("Speaker", new CreateSpeaker());
    }
    undo() {
        this.tv.removeComponent("Speaker");
    }
}

class AddVRBoard {
    tv: ITv;
    constructor(tv: ITv) {
        this.tv = tv
    }
    do() {
        this.tv.addComponent("VRBoard", new CreateVRBoard());
    }
    undo() {
        this.tv.removeComponent("VRBoard");
    }
}