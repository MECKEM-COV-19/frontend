export interface CovidTimeline {
    data: SingleTimeline[];
}

export interface SingleTimeline {
    name: string;
    series: FieverPoint[];
}

export interface FieverPoint {
    value: number;
    name: string;
}
