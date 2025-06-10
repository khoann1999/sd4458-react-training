import { useWatch } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { type FinancialKycData } from '../../types/kycTypes';
import { type UserProfileFormData } from '../../types/userTypes';

interface NetWorthSectionProps {
    control: Control<UserProfileFormData & FinancialKycData>;
    isReadOnly: boolean;
}

const NetWorthSection = ({ control, isReadOnly }: NetWorthSectionProps) => {
    const incomes = useWatch({ control, name: 'incomes' }) || [];
    const assets = useWatch({ control, name: 'assets' }) || [];
    const liabilities = useWatch({ control, name: 'liabilities' }) || [];
    const wealthSources = useWatch({ control, name: 'wealthSources' }) || [];

    const calculateTotal = (items: any[]) => {
        return items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    };

    const totalIncome = calculateTotal(incomes);
    const totalAssets = calculateTotal(assets);
    const totalLiabilities = calculateTotal(liabilities);
    const totalWealthSources = calculateTotal(wealthSources);

    const netWorth = totalIncome + totalAssets - totalLiabilities + totalWealthSources;

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Net Worth Summary</h3>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">${totalIncome.toLocaleString()}</p>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Assets</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">${totalAssets.toLocaleString()}</p>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Liabilities</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">${totalLiabilities.toLocaleString()}</p>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Wealth Sources</p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">${totalWealthSources.toLocaleString()}</p>
                </div>
                <div className="col-span-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Net Worth</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">${netWorth.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default NetWorthSection; 