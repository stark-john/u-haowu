import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const Com = connect()(UI);

export default Com;