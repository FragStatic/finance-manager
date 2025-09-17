export default function Dashboard() {
    return (
         <div className="grid gap-[clamp(0.75rem,1vw,1.25rem)] grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]  auto-rows-[minmax(4rem,_auto)]">
            <div className="col-span-2 flex place-content-between p-3">
                <span>Overview</span>
                <div className="flex place-content-between">
                    <div>Search</div>
                    <div>Calendar dropdown</div>
                    <div>Notifications</div>
                    <div>User</div>
                </div>
            </div>
            <div className="flex flex-col p-3 border rounded-xl">
                <span>Total Balance</span>
                <div className="flex place-content-between">
                    <div>$48,237,12</div>
                    <div>+3.2%</div>
                </div>
            </div>
            <div className="flex flex-col p-3 border rounded-xl">
                <span>Monthly Income</span>
                <div className="flex place-content-between">
                    <div>$9,120.00</div>
                    <div>+1.1%</div>
                </div>
            </div>
            <div className="flex flex-col p-3 border rounded-xl">
                <span>Monthly expenses</span>
                <div className="flex place-content-between">
                    <div>$6,742,51</div>
                    <div>-2.4%</div>
                </div>
            </div>
            <div className="flex flex-col p-3 border rounded-xl">
                <span>Savings rate</span>
                <div className="flex place-content-between">
                    <div>26%</div>
                    <div>+0.8%</div>
                </div>
            </div>
            <div className="row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between">
                <div className="flex flex-col">
                    <span>Income vs Expenses</span>
                    <div className="flex place-content-between">
                        <span>Past 6 months</span>
                        <span>Details</span>
                    </div>
                </div>
                <div className="flex place-content-between">
                    <div>26%</div>
                    <div>+0.8%</div>
                </div>
            </div>
            <div className="row-span-6 col-span-2 flex flex-col p-3 border rounded-xl place-content-between">
                <div className="flex flex-col">
                    <span>Spending by Category</span>
                    <div className="flex place-content-between">
                        <span>This month</span>
                        <span>Details</span>
                    </div>
                </div>
                <div className="flex place-content-between">
                    <div>26%</div>
                    <div>+0.8%</div>
                </div>
            </div>
            <div className="row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between">
                <div className="flex flex-col">
                    <span>Recent Transactions</span>
                    <div className="flex place-content-between">
                        <span>This month</span>
                        <span>Details</span>
                    </div>
                </div>
                <div className="flex place-content-between">
                    <div>26%</div>
                    <div>+0.8%</div>
                </div>
            </div>
            <div className="row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between">
                <div className="flex flex-col">
                    <span>Accounts</span>
                    <div className="flex place-content-between">
                        <span>This month</span>
                        <span>Details</span>
                    </div>
                </div>
                <div className="flex place-content-between">
                    <div>26%</div>
                    <div>+0.8%</div>
                </div>
            </div>
         </div>
    )
}