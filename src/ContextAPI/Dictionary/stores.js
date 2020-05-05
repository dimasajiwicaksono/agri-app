
import axios from 'axios';
import {
  API_COMMODITIES,
} from '../../Service/endpoint';

export const GET_API_COMMODITIES = async() => await axios.get(API_COMMODITIES) ;