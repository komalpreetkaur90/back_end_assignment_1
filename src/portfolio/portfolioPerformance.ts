export function calculatePortfolioPerformance(): any {
    let initialInvestment: number = 10000;
    let currentValue: number = 12000;

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