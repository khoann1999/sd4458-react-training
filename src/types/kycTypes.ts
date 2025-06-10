export type IncomeType = 'Salary' | 'Investment' | 'Others';
export type AssetType = 'Bond' | 'Liquidity' | 'Real Estate' | 'Others';
export type LiabilityType = 'Personal Loan' | 'Real Estate Loan' | 'Others';
export type WealthSourceType = 'Inheritance' | 'Donation';
export type ExperienceLevel = '< 5 years' | '> 5 and < 10 years' | '> 10 years';
export type RiskTolerance = '10%' | '30%' | 'All-in';

export interface Income {
    type: IncomeType;
    amount: number;
    currency: string;
}

export interface Asset {
    type: AssetType;
    amount: number;
    currency: string;
}

export interface Liability {
    type: LiabilityType;
    amount: number;
    currency: string;
}

export interface WealthSource {
    type: WealthSourceType;
    amount: number;
    currency: string;
}

export interface InvestmentProfile {
    experience: ExperienceLevel;
    riskTolerance: RiskTolerance;
}

export interface FinancialKycData {
    incomes: Income[];
    assets: Asset[];
    liabilities: Liability[];
    wealthSources: WealthSource[];
    investmentProfile: InvestmentProfile;
}

export type CombinedFormData = {
    incomes: Array<{
        type: string;
        amount: number;
        currency: string;
    }>;
    assets: Array<{
        type: string;
        amount: number;
        currency: string;
    }>;
    liabilities: Array<{
        type: string;
        amount: number;
        currency: string;
    }>;
    wealthSources: Array<{
        type: string;
        amount: number;
        currency: string;
    }>;
    investmentProfile: {
        experience: string;
        riskTolerance: string;
    };
}; 