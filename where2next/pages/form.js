import Image from "next/image";
import { useRouter } from 'next/navigation';

const Card = ({ title }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-48 w-36 flex-grow flex flex-col justify-center items-center text-center border border-transparent transition duration-300 hover:border-green-500 hover:border-4">
            <p className="text-black text-lg font-semibold mb-4">{title}</p>
        </div>
    )
}

const HealthTopics = () => {
    return (
        <div className="bg-pink-500 flex flex-col min-h-screen items-center">
            <h1 className="py-5 font-mono text-xlg font-bold text-white">What Can We Help You With?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <Card title="Cardiovascular Health" />
                <Card title="Reproductive Health" />
                <Card title="Gastrointestinal Health" />
                <Card title="Respiratory Health" />
                <Card title="Chronic Conditions" />
                <Card title="Dental Health" />
                <Card title="Eye Health" />
                <Card title="Dermatology" />
            </div>
        </div>
    ); 
}
export default HealthTopics;


