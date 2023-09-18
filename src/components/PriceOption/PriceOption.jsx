import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='bg-green-400 mr-6 p-12 mt-8 rounded-lg mb-8 flex flex-col'>
            <h2>
                <span className="text-6xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className='text-3xl my-4'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='px-8 py-2 rounded-lg mt-3  bg-green-600 hover:bg-red-400 text-white'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;