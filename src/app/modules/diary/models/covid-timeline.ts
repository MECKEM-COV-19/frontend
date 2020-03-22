export interface CovidTimeline {
    data_fiever: SingleTimeline[];
    data_cough: SingleTimeline[];
    data_breath: SingleTimeline[];
    data_feel: SingleTimeline[];
}

export interface SingleTimeline {
    name: string;
    series: SinglePoint[];
}

export interface SinglePoint {
    value: number;
    name: string;
}
