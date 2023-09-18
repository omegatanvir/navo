import { LineChart as LChart, Line,XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        { "id": 1, "name": "John Doe", "math": 85, "chemistry": 75, "physics": 88 },
        { "id": 2, "name": "Jane Smith", "math": 88, "chemistry": 78, "physics": 84 },
        { "id": 3, "name": "Michael Johnson", "math": 92, "chemistry": 85, "physics": 90 },
        { "id": 4, "name": "Emily Davis", "math": 90, "chemistry": 80, "physics": 87 },
        { "id": 5, "name": "David Wilson", "math": 94, "chemistry": 88, "physics": 91 },
        { "id": 6, "name": "Sarah Brown", "math": 95, "chemistry": 89, "physics": 94 },
        { "id": 7, "name": "Olivia Lee", "math": 91, "chemistry": 83, "physics": 88 },
        { "id": 8, "name": "James Evans", "math": 89, "chemistry": 82, "physics": 86 },
        { "id": 9, "name": "Sophia Hall", "math": 93, "chemistry": 87, "physics": 92 },
        { "id": 10, "name": "Liam Clark", "math": 96, "chemistry": 90, "physics": 95 }
      ];
      
      
    return (
        <div className='bg-orange-300'>
            <LChart width={1200} height={500} data={studentData}>
                <XAxis dataKey="id" stroke="#5B0888"></XAxis>
                <Line dataKey='chemistry' stroke="#5B0888"></Line>
                <Line dataKey='math' stroke="#3D0C11"></Line>
                <Line dataKey='physics' stroke="#D80032"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;