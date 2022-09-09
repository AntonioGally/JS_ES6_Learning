type tvType = {
    componentName: string;
    componentInfo: any;
}

export interface ITv {
    tv: tvType[];
    addComponent: (componentName: string, componentInfo: any) => void;
    removeComponent: (componentName: string) => void;
    getTv: () => tvType[];
    setTv: (tv: tvType[]) => void;
}

export class Tv implements ITv {
    tv = [
        { componentName: "", componentInfo: "" }
    ]

    addComponent(componentName: string, componentInfo: any) {
        this.tv.push({ componentName, componentInfo });
    }

    removeComponent(componentName: string) {
        this.tv.filter(component => component.componentName !== componentName);
    }

    getTv() {
        return this.tv;
    }
    setTv(tv: tvType[]) {
        this.tv = tv;
    }
}