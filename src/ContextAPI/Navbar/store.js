
import axios from 'axios';
import {
  API_NAVBAR,
} from '../../Service/endpoint';

export const GET_API_NAVBAR = async() => await axios.get(API_NAVBAR) ;