/**
 * make our imports
 */
// import axios from 'axios';
import {TOGGLE_SERVICE, FILTER_USERS} from './actions_types'

/**
 * define our root api route
 */
const API_URL = 'http://localhost:3000/api';

export function toggleService() {
  return {
    type: TOGGLE_SERVICE
  }
}

export function filter_users(selectedFilter) {
  return {
    type: FILTER_USERS,
    filter_state: selectedFilter
  }
}
