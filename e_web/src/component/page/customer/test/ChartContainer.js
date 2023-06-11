import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function ChartContainer() {
    const [chartData, setChartData] = useState(null);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };
    const getChartData = () => {
        try {
            axios.get('http://127.0.0.1:8000/api/admin/chart-analyst').then((response) => {
                const data = {
                    labels: response.data.month,
                    datasets: [
                        {
                            label: response.data.label,
                            data: response.data.data,
                            borderColor: response.data.borderColor,
                            backgroundColor: response.data.backgroundColor,
                        },
                        {
                            label: response.data.labelOrder,
                            data: response.data.dataOrder,
                            borderColor: response.data.backgroundColorOrder,
                            backgroundColor: response.data.borderColorOrder,
                        },
                    ],
                };
                setChartData(data);
            })

        } catch (error) {
            console.error('Error', error);
        }
    }

    useEffect(() => {
        getChartData();
    }, []);

    return (
        <div>
            {
                chartData && <Line options={options} data={chartData} />
            }

        </div>
    );
}

export default ChartContainer;
