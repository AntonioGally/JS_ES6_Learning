interface IBaseComponent {
    screws: number;
    fabricationDate: string;
    manufacturer: string;
}
export interface IFrameComponent extends IBaseComponent {
    color: string;
}

export interface IScreenComponent extends IBaseComponent {
    type: "LED" | "QLED" | "OLED";
}

export interface IMotherBoardComponent extends IBaseComponent {
    capacitors: number;
}

export interface IReceiverComponent extends IBaseComponent {
    numberOfAntennas: number;
    isInfraRed: boolean;
}

export interface IBackPlateComponent extends IBaseComponent {
    color: string;
}

export interface IVRBoardComponent extends IBaseComponent {
    capacitors: number;
    receiverType: "wi-fi" | "bluetooth" | "cabled";
}
export interface ISpeakerComponent extends IBaseComponent {
    soundSurround: "5.1" | "6.1" | "7.1";
}