import { AssembleRegularTv } from "./Commands/AssembleRegularTvFactory";

let myRegularTv = new AssembleRegularTv();
console.log(myRegularTv.getMountedTv()[1].componentInfo);