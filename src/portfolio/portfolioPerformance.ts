interface PortfolioResult {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: () => string;
}

export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
    ): PortfolioResult {

    const profitOrLoss = currentValue - initialInvestment;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    const performanceSummary = () => {
        switch (true) {
            case percentageChange > 20:
                return `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
            case percentageChange > 10 && percentageChange <= 20:
                return `The portfolio has gained moderately with a profit of $${profitOrLoss}.`;
            case percentageChange > 0.1 && percentageChange <= 10:
                return `The portfolio has gained slightly with a profit of $${profitOrLoss}.`;
            case percentageChange >= -0.1 && percentageChange <= 0.1:
                return `The portfolio has had no significant change.`;
            case percentageChange >= -10 && percentageChange < -0.1:
                return `The portfolio has lost slightly with a loss of $${-profitOrLoss}.`;
            case percentageChange >= -20 && percentageChange < -10:
                return `The portfolio has lost moderately with a loss of $${-profitOrLoss}.`;
            case percentageChange < -20:
                return `The portfolio has lost significantly with a loss of $${-profitOrLoss}.`;
            default:
                return `Performance data unavailable.`;
        }
    };

        return {
            initialInvestment,
            currentValue,
            profitOrLoss,
            percentageChange,
            performanceSummary,
        };
    }

export interface Asset {
    name: string;
    value: number;
}

export function findLargestHoldingPortfolio(assets: Asset[]) {
    switch (true) {
        case assets.length === 0:
            const summaryEmpty = () => "No assets in the portfolio.";
            return { largest: null, summary: summaryEmpty };
    }
    let largest: Asset = assets[0];
    for (let i = 1; i < assets.length; i++) {
        const asset = assets[i];
        switch (true) {
            case asset.value > largest.value:
                largest = asset;
                break;
        }
    }
    const summary = () => `The largest holding is "${largest.name}" valued at $${largest.value}.`;
    return {largest, summary};
}


export function calculateAssetAllocationPortfolio(assets: Asset[]) {
    let totalValue = 0;
    for (let asset of assets) {
        totalValue += asset.value;
    }
    const allocations = assets.map(asset => ({
        asset,
        percentage: (asset.value / totalValue) * 100,
        allocationSummary: () => `"${asset.name}" represents ${((asset.value / totalValue) * 100).toFixed(2)}% of the portfolio.`
    }));
    const summary = () => {
        switch (true) {
            case allocations.length === 0:
                return "No assets in the portfolio.";
            default:
                return `Asset allocation calculated for ${allocations.length} assets.`;
        }
    };

    return { allocations, summary };
}