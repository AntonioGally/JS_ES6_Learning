import {
    IFrameComponent, IScreenComponent, IMotherBoardComponent,
    IReceiverComponent, IBackPlateComponent
} from "./ComponentFactory";

interface IBaseTv {
    frame: IFrameComponent;
    screen: IScreenComponent;
    motherBoard: IMotherBoardComponent;
    receiver: IReceiverComponent;
    backPlate: IBackPlateComponent;
}

class BaseTv implements IBaseTv {
    frame: IFrameComponent;
    screen: IScreenComponent;
    motherBoard: IMotherBoardComponent;
    receiver: IReceiverComponent;
    backPlate: IBackPlateComponent;
}

export class CreateFrame extends BaseTv {
    constructor() {
        super();
        this.frame = {
            screws: 32,
            fabricationDate: "20/11/2002",
            manufacturer: "Philco",
            color: "black"
        }
    }
}

export class CreateScreen extends BaseTv {
    constructor() {
        super();
        this.screen = {
            screws: 16,
            fabricationDate: "20/11/2003",
            manufacturer: "samsung",
            type: "LED"
        }
    }
}

export class CreateMotherBoard extends BaseTv {
    constructor() {
        super();
        this.motherBoard = {
            screws: 64,
            fabricationDate: "20/11/2004",
            manufacturer: "LG",
            capacitors: 12
        }
    }
}

export class CreateReceiver extends BaseTv {
    constructor() {
        super();
        this.receiver = {
            screws: 32,
            fabricationDate: "20/11/2005",
            manufacturer: "samsung",
            numberOfAntennas: 2,
            isInfraRed: false
        }
    }
}

export class CreateBackPlate extends BaseTv {
    constructor() {
        super();
        this.backPlate = {
            screws: 128,
            fabricationDate: "20/11/2006",
            manufacturer: "philco",
            color: "black"
        }
    }
}