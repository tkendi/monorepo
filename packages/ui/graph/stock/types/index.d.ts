export interface StcokGraphProps {
    Date: Date;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volumne: number;
}

interface Props {
    data: any[];
    chartTitle: string;
    subTitle?: string;
}
