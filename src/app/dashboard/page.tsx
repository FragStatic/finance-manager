'use client';

//Use client is for recharts / Check if all imports need it
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from 'recharts';

type TableData = {
  date: Date;
  merchant: string;
  category: string;
  amount: number;
};

type LineChartData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type PieChartData = {
  color: string;
  percent: number;
  value: string;
};

type AccountData = {
  provider: string;
  lastIbanDigits: string;
  balance: number;
  accountType: string;
};

export default function Dashboard() {
  const lineChartData: LineChartData[] = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const pieChartData: PieChartData[] = [
    {
      color: 'orange',
      percent: 10,
      value: 'Fun',
    },
    {
      color: 'red',
      percent: 34,
      value: 'House',
    },
    {
      color: 'blue',
      percent: 20,
      value: 'Food',
    },
    {
      color: 'purple',
      percent: 15,
      value: 'Health',
    },
    {
      color: 'orange',
      percent: 9,
      value: 'Other',
    },
  ];

  const tableData: TableData[] = [
    {
      date: new Date(),
      merchant: 'Rimi',
      category: 'Food',
      amount: 5,
    },
    {
      date: new Date(),
      merchant: 'HNM',
      category: 'Clothes',
      amount: 5,
    },
    {
      date: new Date(),
      merchant: 'Drogas',
      category: 'Health',
      amount: 5,
    },
    {
      date: new Date(),
      merchant: 'Ezits migla',
      category: 'Fun',
      amount: 5,
    },
  ];

  const accountData: AccountData[] = [
    {
      provider: 'Revolut',
      lastIbanDigits: '3021',
      balance: 3500,
      accountType: 'Checking',
    },
    {
      provider: 'Swedbank',
      lastIbanDigits: '8891',
      balance: 31000,
      accountType: 'Savings',
    },
    {
      provider: 'SEB',
      lastIbanDigits: '1145',
      balance: 18000,
      accountType: 'Business',
    },
  ];

  return (
    <div className='grid gap-[clamp(0.75rem,1vw,1.25rem)] grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]  auto-rows-[minmax(4rem,_auto)]'>
      <div className='col-span-6 flex place-content-between p-3'>
        <span>Overview</span>
        <div className='flex place-content-between'>
          <div>Search</div>
          <div>Calendar dropdown</div>
          <div>Notifications</div>
          <div>User</div>
        </div>
      </div>
      <div className='flex flex-col p-3 border rounded-xl'>
        <span>Total Balance</span>
        <div className='flex place-content-between'>
          <div>$48,237,12</div>
          <div>+3.2%</div>
        </div>
      </div>
      <div className='flex flex-col p-3 border rounded-xl'>
        <span>Monthly Income</span>
        <div className='flex place-content-between'>
          <div>$9,120.00</div>
          <div>+1.1%</div>
        </div>
      </div>
      <div className='flex flex-col p-3 border rounded-xl'>
        <span>Monthly expenses</span>
        <div className='flex place-content-between'>
          <div>$6,742,51</div>
          <div>-2.4%</div>
        </div>
      </div>
      <div className='flex flex-col p-3 border rounded-xl'>
        <span>Savings rate</span>
        <div className='flex place-content-between'>
          <div>26%</div>
          <div>+0.8%</div>
        </div>
      </div>
      <div className='row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between'>
        <div className='flex flex-col'>
          <span>Income vs Expenses</span>
          <div className='flex place-content-between'>
            <span>Past 6 months</span>
            <span>Details</span>
          </div>
        </div>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={lineChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='row-span-6 col-span-2 flex flex-col p-3 border rounded-xl place-content-between'>
        <div className='flex flex-col'>
          <span>Spending by Category</span>
          <div className='flex place-content-between'>
            <span>This month</span>
            <span>Details</span>
          </div>
        </div>
        <ResponsiveContainer height={500} width='100%'>
          <PieChart height={400} width={400}>
            <Pie
              cx='50%'
              cy='50%'
              data={pieChartData}
              dataKey='percent'
              fill='#8884d8'
              label
              nameKey='value'
            >
              <Cell fill='orange' stroke='none' />
              <Cell fill='green' stroke='none' />
              <Cell fill='blue' stroke='none' />
              <Cell fill='red' stroke='none' />
              <Cell fill='indigo' stroke='none' />
              <Cell fill='violet' stroke='none' />
            </Pie>
            <Legend />
            <Tooltip
              formatter={(v: number, n: string) => [
                `€${v.toLocaleString()}`,
                n,
              ]}
              contentStyle={{
                background: '#18181b',
                border: '1px solid #3f3f46',
                borderRadius: 12,
                color: 'white',
              }}
              labelStyle={{ color: '#d4d4d8' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between'>
        <div className='flex flex-col'>
          <span>Recent Transactions</span>
          <div className='flex place-content-between'>
            <span>This month</span>
            <span>Details</span>
          </div>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {tableData.map((data: TableData) => (
            <tr>
              <td>{data.date.toString()}</td>
              <td>{data.merchant}</td>
              <td>{data.category}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className='row-span-4 col-span-2 flex flex-col p-3 border rounded-xl place-content-between'>
        <div className='flex flex-col'>
          <span>Accounts</span>
          <div className='flex place-content-between'>
            <span>This month</span>
            <span>Details</span>
          </div>
        </div>
        <div className='p-4'>
          {accountData.map((account: AccountData) => (
            <div className='w-full h-20 border rounded-xl mb-4 flex flex-col'>
              <div>
                <span>{account.provider}</span>
                <span>{account.lastIbanDigits}</span>
              </div>
              <span>{account.balance}</span>
              <span>{account.accountType}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
