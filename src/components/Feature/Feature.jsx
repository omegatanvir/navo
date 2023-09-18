import PropTypes from 'prop-types';
import { AiOutlineCheck } from 'react-icons/Ai';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-top align-middle'><AiOutlineCheck className='mr-2'/>{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.object
}
export default Feature;