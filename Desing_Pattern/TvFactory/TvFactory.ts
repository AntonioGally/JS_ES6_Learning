import { IAssemble } from "./Commands/assembleType"

import { AssembleRegularTv } from "./Commands/AssembleRegularTvFactory"
import { AssembleFancyTv } from "./Commands/AssembleFancyTvFactory"


export class TvFactory {
    constructor(tvType: string) {
        return tvMap[tvType].getMountedTv()
    }
}
type tvMapType = {
    [key: string]: IAssemble;
}
const tvMap: tvMapType = {
    "fancy": new AssembleFancyTv(),
    "regular": new AssembleRegularTv()
}
