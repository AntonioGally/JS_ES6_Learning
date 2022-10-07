import {
    IFrameComponent, IScreenComponent, IMotherBoardComponent,
    IReceiverComponent, IBackPlateComponent, ISpeakerComponent,
    IVRBoardComponent
} from "./ComponentFactory";

interface IBaseTv {
    frame: IFrameComponent;
    screen: IScreenComponent;
    motherBoard: IMotherBoardComponent;
    receiver: IReceiverComponent;
    backPlate: IBackPlateComponent;
    speaker: ISpeakerComponent,
    vrBoard: IVRBoardComponent
}

class BaseTv implements IBaseTv {
    frame: IFrameComponent;
    screen: IScreenComponent;
    motherBoard: IMotherBoardComponent;
    receiver: IReceiverComponent;
    backPlate: IBackPlateComponent;
    speaker: ISpeakerComponent;
    vrBoard: IVRBoardComponent;
}

export class CreateFrame extends BaseTv {
    constructor() {
        super();
        this.frame = {
            screws: 32,
            fabricationDate: "20/11/2010",
            manufacturer: "Philco",
            color: "white"
        }
    }
}

export class CreateScreen extends BaseTv {
    constructor() {
        super();
        this.screen = {
            screws: 16,
            fabricationDate: "20/11/2011",
            manufacturer: "samsung",
            type: "QLED"
        }
    }
}

export class CreateMotherBoard extends BaseTv {
    constructor() {
        super();
        this.motherBoard = {
            screws: 64,
            fabricationDate: "20/11/2012",
            manufacturer: "LG",
            capacitors: 24
        }
    }
}

export class CreateReceiver extends BaseTv {
    constructor() {
        super();
        this.receiver = {
            screws: 32,
            fabricationDate: "20/11/2013",
            manufacturer: "samsung",
            numberOfAntennas: 6,
            isInfraRed: true
        }
    }
}

export class CreateBackPlate extends BaseTv {
    constructor() {
        super();
        this.backPlate = {
            screws: 128,
            fabricationDate: "20/11/2014",
            manufacturer: "samsung",
            color: "white"
        }
    }
}

export class CreateSpeaker extends BaseTv {
    constructor() {
        super();
        this.speaker = {
            screws: 128,
            fabricationDate: "20/11/2014",
            manufacturer: "samsung",
            soundSurround: "7.1"
        }
    }
}

export class CreateVRBoard extends BaseTv {
    constructor() {
        super();
        this.vrBoard = {
            screws: 128,
            fabricationDate: "20/11/2014",
            manufacturer: "samsung",
            capacitors: 64,
            receiverType: "wi-fi"
        }
    }
}