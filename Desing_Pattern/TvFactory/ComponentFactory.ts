interface IBaseComponent {
    screws: number;
    fabricationDate: string;
    manufacturer: string;
}

class BaseComponent implements IBaseComponent {
    screws = 0;
    fabricationDate = "00/00/0000";
    manufacturer = "";
}

export interface IFrameComponent extends IBaseComponent {
    color: string;
}
export class FrameComponent extends BaseComponent {
    color: IFrameComponent["color"];

    constructor({ screws, fabricationDate, manufacturer, color }: IFrameComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.color = color;
    }
}

export interface IScreenComponent extends IBaseComponent {
    type: "LED" | "QLED" | "OLED";
}
export class ScreenComponent extends BaseComponent {
    type: IScreenComponent["type"];
    constructor({ screws, fabricationDate, manufacturer, type }: IScreenComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.type = type;
    }
}

export interface IMotherBoardComponent extends IBaseComponent {
    capacitors: number;
}
export class MotherBoardComponent extends BaseComponent {
    capacitors: IMotherBoardComponent["capacitors"];
    constructor({ screws, fabricationDate, manufacturer, capacitors }: IMotherBoardComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.capacitors = capacitors;
    }
}

export interface IReceiverComponent extends IBaseComponent {
    numberOfAntennas: number;
    isInfraRed: boolean;
}
export class ReceiverComponent extends BaseComponent {
    numberOfAntennas: IReceiverComponent["numberOfAntennas"];
    isInfraRed: IReceiverComponent["isInfraRed"];
    constructor({ screws, fabricationDate, manufacturer, numberOfAntennas, isInfraRed }: IReceiverComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.numberOfAntennas = numberOfAntennas;
        this.isInfraRed = isInfraRed;
    }
}

export interface IBackPlateComponent extends IBaseComponent {
    color: string;
}
export class BackPlateComponent extends BaseComponent {
    color: IBackPlateComponent["color"];
    constructor({ screws, fabricationDate, manufacturer, color }: IBackPlateComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.color = color;
    }
}

export interface IVRBoardComponent extends IBaseComponent {
    capacitors: number;
    receiverType: "wi-fi" | "bluetooth" | "cabled";
}
export class VRBoardComponent extends BaseComponent {
    capacitors: IVRBoardComponent["capacitors"];
    receiverType: IVRBoardComponent["receiverType"];
    constructor({ screws, fabricationDate, manufacturer, capacitors, receiverType }: IVRBoardComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.capacitors = capacitors;
        this.receiverType = receiverType;
    }
}

export interface ISpeakerComponent extends IBaseComponent {
    soundSurround: "5.1" | "6.1" | "7.1";
}
export class SpeakerComponent extends BaseComponent {
    soundSurround: ISpeakerComponent["soundSurround"];
    constructor({ screws, fabricationDate, manufacturer, soundSurround }: ISpeakerComponent) {
        super();
        this.screws = screws;
        this.fabricationDate = fabricationDate;
        this.manufacturer = manufacturer;
        this.soundSurround = soundSurround;
    }
}