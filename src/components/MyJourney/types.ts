export interface JourneyItem {
    id: string;
    category: JourneyCategory;
    title: string;
    organization: string;
    organizationLogo?: string;
    startDate: string;
    endDate: string;
    isCurrent?: boolean;
    description: string;
    skills?: string[];
}

export type JourneyCategory = "all" | "work" | "education";

export interface JourneyTab {
    key: JourneyCategory;
    label: string;
}

