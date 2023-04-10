export interface YearMonth {
    year: string | undefined
    month: string | undefined
}

export interface YearMonthRange {
    from: YearMonth
    to: YearMonth
}

export interface Option {
    label: string;
    value: string;
}

export interface ColorOption {
    label: string;
    text: string;
    bg: string;
    code: string;
}