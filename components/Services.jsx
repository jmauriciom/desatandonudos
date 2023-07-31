import { Title } from ".";
import Card from "./Card";
import { services } from "./data";

const Services = () => {
    return (
        <div className='container mx-auto p-5 '>
            <div className='container px-5 py-10 md:py-24 mx-auto'>
                <Title
                    title='Mis Servicios'
                    subTitle='Impulso la excelencia y el trabajo en equipo a la par. Potencia tu productividad con soluciones innovadoras'
                    titleStyles='text-white'
                    subTitleStyles='text-gray-400'
                />

                <div className='w-full flex flex-wrap'>
                    {services.map(({ id, title, text, icon }) => (
                        <div key={id} className='xl:w-1/3 md:w-1/2 p-4 '>
                            <Card title={title} icon={icon} text={text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
